import type { Meta, StoryObj } from "@storybook/react";
import type { ReactNode } from "react";
import type { TableStateProps } from "react-stately";

import { UserCircle } from "~/icons";

import { Table } from "./Table";

const meta: Meta<typeof Table> = {
  title: "UI-Kit components/Table",
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: (args) => (
    <Table {...args} aria-label="Example static collection table">
      <Table.Header>
        <Table.Column>Name</Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Date Modified</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Games</Table.Cell>
          <Table.Cell>File folder</Table.Cell>
          <Table.Cell>6/7/2020</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Program Files</Table.Cell>
          <Table.Cell>File folder</Table.Cell>
          <Table.Cell>4/7/2021</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>bootmgr</Table.Cell>
          <Table.Cell>System file</Table.Cell>
          <Table.Cell>11/20/2010</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>log.txt</Table.Cell>
          <Table.Cell>Text Document</Table.Cell>
          <Table.Cell>1/18/2016</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <Table aria-label="Table with selection" selectionMode="multiple">
      <Table.Header>
        <Table.Column>Name</Table.Column>
        <Table.Column>Type</Table.Column>
        <Table.Column>Level</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Charizard</Table.Cell>
          <Table.Cell>Fire, Flying</Table.Cell>
          <Table.Cell>67</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Blastoise</Table.Cell>
          <Table.Cell>Water</Table.Cell>
          <Table.Cell>56</Table.Cell>
        </Table.Row>
        <Table.Row key="3">
          <Table.Cell>Venusaur</Table.Cell>
          <Table.Cell>Grass, Poison</Table.Cell>
          <Table.Cell>83</Table.Cell>
        </Table.Row>
        <Table.Row key="4">
          <Table.Cell>Pikachu</Table.Cell>
          <Table.Cell>Electric</Table.Cell>
          <Table.Cell>100</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};

type RowType = {
  id: number;
  name: string;
  date: string;
  type: string;
  icon: () => ReactNode;
};

export const DynamicCollections: Story = {
  render: (args) => {
    const columns = [
      { name: "Name", key: "name" },
      { name: "Type", key: "type" },
      { name: "Icon", key: "icon" },
      { name: "Date Modified", key: "date" },
    ];

    const rows: Array<RowType> = [
      {
        id: 1,
        name: "Games",
        date: "6/7/2020",
        type: "File folder",
        icon: () => <UserCircle />,
      },
      {
        id: 2,
        name: "Program Files",
        date: "4/7/2021",
        type: "File folder",
        icon: () => <UserCircle />,
      },
      {
        id: 3,
        name: "bootmgr",
        date: "11/20/2010",
        type: "System file",
        icon: () => <UserCircle />,
      },
      {
        id: 4,
        name: "log.txt",
        date: "1/18/2016",
        type: "Text Document",
        icon: () => <UserCircle />,
      },
    ];

    return (
      <Table
        aria-label="Example dynamic collection table"
        {...(args as TableStateProps<RowType>)}
      >
        <Table.Header columns={columns}>
          {(column) => <Table.Column>{column.name}</Table.Column>}
        </Table.Header>
        <Table.Body items={rows}>
          {rows.map((row) => (
            <Table.Row>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.date}</Table.Cell>
              <Table.Cell>{row.type}</Table.Cell>
              <Table.Cell>{row.icon()}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
};

export const Links: Story = {
  render: () => (
    <Table aria-label="Bookmarks" selectionMode="multiple">
      <Table.Header>
        <Table.Column isRowHeader>Name</Table.Column>
        <Table.Column>URL</Table.Column>
        <Table.Column>Date added</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row href="https://adobe.com/" target="_blank">
          <Table.Cell>Adobe</Table.Cell>
          <Table.Cell>https://adobe.com/</Table.Cell>
          <Table.Cell>January 28, 2023</Table.Cell>
        </Table.Row>
        <Table.Row href="https://google.com/" target="_blank">
          <Table.Cell>Google</Table.Cell>
          <Table.Cell>https://google.com/</Table.Cell>
          <Table.Cell>April 5, 2023</Table.Cell>
        </Table.Row>
        <Table.Row href="https://nytimes.com/" target="_blank">
          <Table.Cell>New York Times</Table.Cell>
          <Table.Cell>https://nytimes.com/</Table.Cell>
          <Table.Cell>July 12, 2023</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  ),
};
