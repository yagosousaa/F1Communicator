import { Header } from "../Shared/header";
import {
  Avatar,
  Field,
  Menu,
  MenuItem,
  MenuList,
  MenuPopover,
  MenuTrigger,
  SearchBox,
  TableBody,
  TableCell,
  TableCellLayout,
  Theme,
} from "@fluentui/react-components";
import {
  Table,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@fluentui/react-components";
import { Ellipsis, Send, TextIcon } from "lucide-react";
import "./draftMessages.css";

interface IDraftMessages {
  theme: Theme;
}

const items = [
  {
    title: { label: "Lorem Ipsum Lorem Ipsum Lorem Ipsum" },
    sendDate: { label: "06/06/2024" },
    recipients: { label: "32" },
    createdBy: { label: "Yago Sousa" },
  },
  {
    title: { label: "Lorem Ipsum" },
    sendDate: { label: "06/06/2024" },
    recipients: { label: "32" },
    createdBy: { label: "Yago Sousa" },
  },
  {
    title: { label: "Lorem Ipsum" },
    sendDate: { label: "06/06/2024" },
    recipients: { label: "32" },
    createdBy: { label: "Yago Sousa" },
  },
  {
    title: { label: "Lorem ipum " },
    sendDate: { label: "06/06/2024" },
    recipients: { label: "32" },
    createdBy: { label: "Yago Sousa" },
  },
  {
    title: { label: "Lorem Ipsum" },
    sendDate: { label: "06/06/2024" },
    recipients: { label: "32" },
    createdBy: { label: "Yago Sousa" },
  },
  {
    title: { label: "Lorem Ipsum" },
    sendDate: { label: "06/06/2024" },
    recipients: { label: "32" },
    createdBy: { label: "Yago Sousa" },
  },
  {
    title: { label: "Lorem Ipsum" },
    sendDate: { label: "06/06/2024" },
    recipients: { label: "32" },
    createdBy: { label: "Yago Sousa" },
  },
  {
    title: { label: "Lorem Ipsum" },
    sendDate: { label: "06/06/2024" },
    recipients: { label: "32" },
    createdBy: { label: "Yago Sousa" },
  },
  {
    title: { label: "Lorem Ipsum" },
    sendDate: { label: "06/06/2024" },
    recipients: { label: "32" },
    createdBy: { label: "Yago Sousa" },
  },
  {
    title: { label: "Lorem Ipsum" },
    sendDate: { label: "06/06/2024" },
    recipients: { label: "32" },
    createdBy: { label: "Yago Sousa" },
  },
];

const columns = [
  { columnKey: "title", label: "Título" },
  { columnKey: "", label: "" },
  { columnKey: "modifiedDate", label: "Modificado" },
  { columnKey: "recipients", label: "Destinatários" },
  { columnKey: "createdBy", label: "Criado por" },
];

export const DraftMessages = (props: IDraftMessages) => {
  return (
    <>
      <Header theme={props.theme} />

      <main className="cc-send">
        <div className="cc-searchbox">
          <h1 className="cc-send-title">Rascunhos</h1>
          <SearchBox className="searchBox" appearance="filled-darker" />
        </div>
        <div>
          <Table arial-label="Default table" size="small" className="tableHeader">
            <TableHeader>
              <TableRow>
                {columns.map((column) => (
                  <TableHeaderCell key={column.columnKey}>{column.label}</TableHeaderCell>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.title.label}>
                  <TableCell className="titleTable">
                    <TableCellLayout>
                      {item.title.label.length > 27
                        ? item.title.label.substring(0, 27) + "..."
                        : item.title.label}
                    </TableCellLayout>
                  </TableCell>
                  <TableCell />
                  <TableCell>
                    <TableCellLayout className="table-text-gray">
                      {item.sendDate.label}
                    </TableCellLayout>
                  </TableCell>
                  <TableCell className="table-text-gray">
                    {item.recipients.label}
                  </TableCell>
                  <TableCell>
                    <TableCellLayout
                      media={
                        <Avatar
                          aria-label={item.createdBy.label}
                          name={item.createdBy.label}
                        />
                      }
                    >
                      {item.createdBy.label}
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
        </div>
      </main>
    </>
  );
};
