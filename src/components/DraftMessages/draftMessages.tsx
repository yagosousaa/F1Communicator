import React, { useState, useEffect } from "react";
import { Header } from "../Shared/header";
import {
  Avatar,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  Table,
  TableBody,
  TableCell,
  TableCellLayout,
  TableHeader,
  TableHeaderCell,
  TableRow,
  Theme,
} from "@fluentui/react-components";
import { SearchBox } from "@fluentui/react/lib/SearchBox";
import { Ellipsis, Send, TextIcon } from "lucide-react";
import "./draftMessages.css";
import { messages } from "../../services/data";
import ReactPaginate from "react-paginate";
import { IMessage } from "../../interfaces/interfaces";

interface IDraftMessagesProps {
  theme: Theme;
}

const columns = [
  { columnKey: "title", label: "Título" },
  { columnKey: "", label: "" },
  { columnKey: "modifiedDate", label: "Modificado" },
  { columnKey: "recipients", label: "Destinatários" },
  { columnKey: "createdBy", label: "Criado por" },
];

const itemsPerPage = 10;

const DraftMessages: React.FC<IDraftMessagesProps> = ({ theme }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState<IMessage[]>(messages);

  useEffect(() => {
    const filtered = messages.filter(
      (item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
    setCurrentPage(0);
  }, [searchTerm]);

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredItems.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  const handleSearchChange = (
    event?: React.ChangeEvent<HTMLInputElement>,
    newValue?: string
  ) => {
    setSearchTerm(newValue?.trim() || ""); // Remove espaços desnecessários e trata undefined
  };

  return (
    <div className="root">
      <Header theme={theme} />
      <main className="cc-send">
        <div className="cc-searchbox">
          <h1 className="cc-send-title">Rascunhos</h1>
          <SearchBox
            className="searchBox"
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={handleSearchChange}
            showIcon={false}
          />
        </div>
        <div>
          <Table aria-label="Default table" size="small" className="tableHeader">
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableHeaderCell key={column.columnKey}>{column.label}</TableHeaderCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentItems.map((item: IMessage) => (
                <TableRow key={item.title}>
                  <TableCell className="titleTable">
                    <TableCellLayout>
                      {item.title.length > 27
                        ? item.title.substring(0, 27) + "..."
                        : item.title}
                    </TableCellLayout>
                  </TableCell>
                  <TableCell />
                  <TableCell>
                    <TableCellLayout className="table-text-gray">
                      {item.date}
                    </TableCellLayout>
                  </TableCell>
                  <TableCell className="table-text-gray">{item.recipients}</TableCell>
                  <TableCell>
                    <TableCellLayout
                      media={<Avatar aria-label={item.date} name={item.author} />}
                    >
                      {item.author}
                    </TableCellLayout>
                  </TableCell>
                  <TableCell>
                    <Menu>
                      <MenuTrigger disableButtonEnhancement>
                        <Ellipsis size={18} className="card-menu" />
                      </MenuTrigger>
                      <MenuPopover>
                        <MenuList>
                          <MenuItem icon={<TextIcon size={18} />}>Abrir</MenuItem>
                          <MenuItem icon={<Send size={18} />}>Enviar</MenuItem>
                        </MenuList>
                      </MenuPopover>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="pagination-container">
            <ReactPaginate
              className="paginate"
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              activeClassName={"active"}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default DraftMessages;
