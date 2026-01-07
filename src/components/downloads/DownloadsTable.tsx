import { useState, useMemo } from "react";
import { Search, Download, FileDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { downloads, downloadCategories, Download as DownloadType } from "@/data/downloads";
import { cn } from "@/lib/utils";

const ITEMS_PER_PAGE = 8;

export function DownloadsTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredDownloads = useMemo(() => {
    return downloads.filter((download) => {
      const matchesSearch = download.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        categoryFilter === "all" || download.category === categoryFilter;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, categoryFilter]);

  const paginatedDownloads = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredDownloads.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredDownloads, currentPage]);

  const totalPages = Math.ceil(filteredDownloads.length / ITEMS_PER_PAGE);

  const exportCSV = () => {
    const headers = ["Sr", "Name", "Category", "File Size"];
    const rows = filteredDownloads.map((d, i) => [
      i + 1,
      d.name,
      d.category,
      d.fileSize,
    ]);
    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "downloads-list.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      {/* Header */}
      <div className="p-6 bg-primary">
        <h2 className="text-xl font-semibold text-primary-foreground">
          Downloads & Resources
        </h2>
      </div>

      {/* Filters */}
      <div className="p-4 border-b border-border flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search downloads..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="pl-10"
          />
        </div>
        <Select
          value={categoryFilter}
          onValueChange={(value) => {
            setCategoryFilter(value);
            setCurrentPage(1);
          }}
        >
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="All Categories" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {downloadCategories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button variant="outline" onClick={exportCSV} className="btn-press">
          <FileDown className="w-4 h-4 mr-2" />
          Export CSV
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground w-16">
                Sr
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">
                Name of Requirement
              </th>
              <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground w-32">
                Size
              </th>
              <th className="text-center px-6 py-4 text-sm font-medium text-muted-foreground w-40">
                Download
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedDownloads.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-12 text-center text-muted-foreground">
                  No downloads found matching your criteria.
                </td>
              </tr>
            ) : (
              paginatedDownloads.map((download, index) => (
                <TableRow
                  key={download.id}
                  download={download}
                  index={(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="p-4 border-t border-border flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={cn(
                "w-10 h-10 rounded-lg text-sm font-medium transition-colors",
                page === currentPage
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80 text-foreground"
              )}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function TableRow({ download, index }: { download: DownloadType; index: number }) {
  return (
    <tr className="border-t border-border hover:bg-accent/30 transition-colors">
      <td className="px-6 py-4 text-sm text-muted-foreground">{index}</td>
      <td className="px-6 py-4">
        <div>
          <p className="font-medium text-foreground">{download.name}</p>
          <p className="text-xs text-muted-foreground mt-1">{download.category}</p>
        </div>
      </td>
      <td className="px-6 py-4 text-sm text-muted-foreground">{download.fileSize}</td>
      <td className="px-6 py-4 text-center">
        <Button
          asChild
          size="sm"
          className="bg-success hover:bg-success/90 text-success-foreground btn-press"
        >
          <a
            href={download.fileUrl}
            download
            aria-label={`Download ${download.name}`}
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </a>
        </Button>
      </td>
    </tr>
  );
}
