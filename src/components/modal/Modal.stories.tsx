import type { Meta, StoryObj } from "@storybook/react";
import React from "react";

import { Button } from "~/components";
import { Close } from "~/icons";

import ModalTrigger from "./ModalTrigger";

const meta: Meta<typeof ModalTrigger> = {
  title: "UI-Kit components/Modal",
  component: ModalTrigger,
  parameters: {
    docs: {
      description: {
        component: `Компонент ModalTrigger является кнопкой, которая открывает модалку при клике. 
Внешний вид и поведение модалки настраиваются через пропсы, такие как isDismissable (для закрытия модалки по клику вне ее) и другие. 
Этот компонент реализует доступный способ отображения модальных окон с использованием библиотеки @react-aria.`,
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: "Текст, отображаемый на кнопке, которая открывает модалку.",
    },
    isDismissable: {
      control: "boolean",
      description:
        "Позволяет ли модалке быть закрытой по клику вне ее или по нажатию на клавишу Escape.",
    },
  },
};

export default meta;

export const Default: StoryObj<typeof ModalTrigger> = {
  render: () => (
    <ModalTrigger label="Open default Modal" isDismissable>
      {(close) => (
        <div className="p-4">
          <h2>Default Modal</h2>
          <p>This is a basic modal with simple text content.</p>
          <button
            onClick={close}
            className="mt-4 bg-blue-500 text-white p-2 rounded"
          >
            Close Modal
          </button>
        </div>
      )}
    </ModalTrigger>
  ),
};

export const FormModal: StoryObj<typeof ModalTrigger> = {
  render: () => (
    <ModalTrigger
      label="Open Form Modal"
      isDismissable
      closeButtonSlot={(close) => (
        <Button
          onPress={close}
          autoFocus
          variant="default"
          border={{ width: "2" }}
          position={{
            type: "absolute",
            top: 20,
            right: 20,
          }}
          md={{ position: { top: 36, right: 40 } }}
        >
          <Close viewBox="0 0 32 32" className="w-6 h-6 md:w-8 md:h-8" />
        </Button>
      )}
    >
      {(close) => (
        <form className="flex flex-col">
          <label htmlFor="first-name" className="mb-2">
            First Name:
          </label>
          <input
            id="first-name"
            placeholder="John"
            className="p-2 border border-gray-300 rounded-md"
          />
          <label htmlFor="last-name" className="mt-4 mb-2">
            Last Name:
          </label>
          <input
            id="last-name"
            placeholder="Doe"
            className="p-2 border border-gray-300 rounded-md"
          />
          <Button className="mt-4" onPress={close}>
            Submit
          </Button>
        </form>
      )}
    </ModalTrigger>
  ),
};

export const NonDismissibleModal: StoryObj<typeof ModalTrigger> = {
  render: () => (
    <ModalTrigger label="Non-Dismissable Modal">
      {(close) => (
        <div className="p-4">
          <h2>Non-Dismissible Modal</h2>
          <p>
            This modal cannot be closed by clicking outside or pressing the
            Escape key.
          </p>
          <button
            onClick={close}
            className="mt-4 bg-blue-500 text-white p-2 rounded"
          >
            Close Modal
          </button>
        </div>
      )}
    </ModalTrigger>
  ),
};
