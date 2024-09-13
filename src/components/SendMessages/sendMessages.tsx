import * as React from "react";
import { TextField } from "@fluentui/react/lib/TextField";
import {
  DetailsList,
  DetailsListLayoutMode,
  SelectionMode,
  IColumn,
} from "@fluentui/react/lib/DetailsList";
import { messages } from "../../services/data";
import { IMessage } from "../../interfaces/interfaces";
import "./sendMessages.css";
import { Header } from "../Shared/header";
import { Theme } from "@fluentui/react-components";
import { Pagination } from "@fluentui/react-experiments";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleChevronLeftIcon,
  DoubleChevronRightIcon,
} from "@fluentui/react-icons-mdl2";

interface ISendMessagesProps {
  theme: Theme;
}

interface ISendMessagesState {
  columns: IColumn[];
  items: IMessage[];
  filteredItems: IMessage[];
  itemsPerPage: number;
  currentPage: number;
}

export class SendMessages extends React.Component<
  ISendMessagesProps,
  ISendMessagesState
> {
  private _allItems: IMessage[];

  constructor(props: ISendMessagesProps) {
    super(props);

    this._allItems = messages;

    const columns: IColumn[] = [
      {
        key: "column1",
        name: "Titulo",
        fieldName: "Titulo",
        minWidth: 240,
        maxWidth: 320,
        isResizable: true,
        data: "string",
        onRender: (item: IMessage) => {
          return <span>{item.title}</span>;
        },
        isPadded: true,
      },
      {
        key: "column2",
        name: "Autor",
        fieldName: "Autor",
        minWidth: 240,
        maxWidth: 320,
        isResizable: true,
        data: "string",
        onRender: (item: IMessage) => {
          return <span>{item.author}</span>;
        },
        isPadded: true,
      },
      {
        key: "column3",
        name: "Status",
        fieldName: "Status",
        minWidth: 240,
        maxWidth: 320,
        isResizable: true,
        data: "string",
        onRender: (item: IMessage) => {
          return <span>{item.status}</span>;
        },
        isPadded: true,
      },
    ];

    this.state = {
      items: this._allItems,
      filteredItems: this._allItems,
      itemsPerPage: 10,
      currentPage: 1,
      columns,
    };
  }

  public render() {
    const { columns, itemsPerPage, currentPage, filteredItems } = this.state;
    const { theme } = this.props;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);

    return (
      <div className="root">
        <Header theme={theme} />
        <div>
          <TextField
            placeholder="Digite para pesquisar..."
            onChange={this._onChangeText}
          />
        </div>
        <div className="detailsList">
          <DetailsList
            items={paginatedItems}
            columns={columns}
            selectionMode={SelectionMode.none}
            setKey="none"
            layoutMode={DetailsListLayoutMode.justified}
            isHeaderVisible={true}
          />
          <Pagination
            selectedPageIndex={currentPage - 1}
            pageCount={Math.ceil(filteredItems.length / itemsPerPage)}
            itemsPerPage={itemsPerPage}
            totalItemCount={filteredItems.length}
            format={"buttons"}
            firstPageIconProps={{
              iconName: "DoubleChevronLeftIcon",
              children: <DoubleChevronLeftIcon className="iconPagination" />,
            }}
            previousPageIconProps={{
              iconName: "ChevronLeftIcon",
              children: <ChevronLeftIcon />,
            }}
            nextPageIconProps={{
              iconName: "ChevronRightIcon",
              children: <ChevronRightIcon />,
            }}
            lastPageIconProps={{
              iconName: "DoubleChevronRightIcon",
              children: <DoubleChevronRightIcon />,
            }}
            onPageChange={this._onChangePage}
          />
        </div>
      </div>
    );
  }

  private _onChangeText = (
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    text?: string
  ): void => {
    const filteredItems = text
      ? this._allItems.filter(
          (i) => i.title.toLowerCase().indexOf(text.toLowerCase()) > -1
        )
      : this._allItems;

    this.setState({
      filteredItems,
      currentPage: 1,
    });
  };

  private _onChangePage = (pageIndex: number): void => {
    this.setState({ currentPage: pageIndex + 1 });
  };
}
