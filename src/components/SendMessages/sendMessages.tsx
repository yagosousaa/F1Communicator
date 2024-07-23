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

interface ISendMessagesProps {
  theme: Theme;
}

interface ISendMessagesState {
  columns: IColumn[];
  items: IMessage[];
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
        data: "number",
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
        data: "number",
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
        data: "number",
        onRender: (item: IMessage) => {
          return <span>{item.status}</span>;
        },
        isPadded: true,
      },
    ];

    this.state = {
      items: this._allItems,
      columns,
    };
  }

  public render() {
    const { columns, items } = this.state;
    const { theme } = this.props;

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
            items={items}
            columns={columns}
            selectionMode={SelectionMode.none}
            setKey="none"
            layoutMode={DetailsListLayoutMode.justified}
            isHeaderVisible={true}
          />
        </div>
      </div>
    );
  }

  private _onChangeText = (
    ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    text?: string
  ): void => {
    this.setState({
      items: text
        ? this._allItems.filter(
            (i) => i.title.toLowerCase().indexOf(text.toLowerCase()) > -1
          )
        : this._allItems,
    });
  };
}
