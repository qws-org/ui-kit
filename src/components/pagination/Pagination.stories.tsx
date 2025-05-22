import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

import { Container } from "../container/Container";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "UI-Kit components/Pagination",
  component: Pagination,
  argTypes: {
    totalPages: {
      control: "number",
      description: "Общее количество страниц в пагинации.",
    },
    currentPage: {
      description: "Текущая активная страница (изменяется в стейте).",
    },
    itemsPerPage: {
      control: "number",
      description: "Количество элементов на одной странице.",
    },
    onPageChange: {
      action: "page changed",
      description: "Функция-коллбек, вызываемая при смене страницы.",
    },
    renderPageLabel: {
      description: "Функция для кастомного отображения номеров страниц.",
    },
  },
  args: {
    totalPages: 5,
    itemsPerPage: 10,
  },
};
export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: (args) => {
    const [page, setPage] = useState(0);
    const content = `Контент для страницы ${page + 1}`;
    return (
      <>
        <Pagination {...args} currentPage={page} onPageChange={setPage} />
        <Container justify="center" className="mt-20">
          {content}
        </Container>
      </>
    );
  },
};

export const WithCustomLabels: Story = {
  render: (args) => {
    const [page, setPage] = useState(0);
    const content = `Страница ${page + 1} с кастомным лейблом`;
    return (
      <>
        <Pagination
          {...args}
          currentPage={page}
          onPageChange={setPage}
          renderPageLabel={(p) => `Страница ${p + 1}`}
        />
        <Container justify="center" className="mt-20">
          {content}
        </Container>
      </>
    );
  },
};
