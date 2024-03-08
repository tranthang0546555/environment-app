import React from "react";
import { Button, Form } from "react-bootstrap";

export type Field = {
  label: string;
  key: string;
  defaultValue?: any;
  placeholder?: string;
  formType: "input" | "select" | "textarea" | "number";
  options?: Option[];
  required?: boolean;
  disabled?: boolean;
};

export type Option = {
  key: string;
  value: any;
};

type Props = {
  fields: Field[];
  onSave?: (data: Record<string, unknown>) => void;
  onCancel?: () => void;
  backPage?: () => void;
  navigateUpdate?: () => void;
  mode?: "view" | "create&update";
};

export const FormBase = (props: Props) => {
  const {
    fields,
    onSave,
    onCancel,
    mode = "create&update",
    backPage,
    navigateUpdate,
  } = props;

  const FormType = ({ props }: { props: Field }) => {
    const { formType, options, key, disabled, ...rest } = props;
    const _disabled = mode == "view" ? true : disabled;

    switch (formType) {
      case "input":
        return (
          <Form.Control type="text" {...rest} name={key} disabled={_disabled} />
        );
      case "number":
        return (
          <Form.Control
            type="number"
            {...rest}
            name={key}
            disabled={_disabled}
          />
        );
      case "textarea":
        return (
          <Form.Control
            {...rest}
            as="textarea"
            rows={3}
            name={key}
            disabled={_disabled}
          />
        );
      case "select":
        return (
          <Form.Select name={key} {...rest} disabled={_disabled}>
            {options?.map((option, idx) => (
              <option key={idx} value={option.value}>
                {option.key}
              </option>
            ))}
          </Form.Select>
        );
      default:
        return (
          <Form.Control type="text" {...rest} name={key} disabled={_disabled} />
        );
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: Record<string, unknown> = {};
    fields.forEach((f) => {
      data[f.key] = (e.target as any)?.[f.key].value;
    });
    onSave && onSave(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      {fields.map((f, idx) => {
        return (
          <Form.Group className="mb-3" controlId={f.key} key={idx}>
            <Form.Label>{f.label}</Form.Label>
            <FormType props={f} />
          </Form.Group>
        );
      })}
      {mode == "create&update" ? (
        <>
          <Button variant="success" type="submit">
            Lưu
          </Button>
          <Button variant="danger" onClick={onCancel}>
            Hủy
          </Button>
        </>
      ) : (
        <>
          <Button variant="info" onClick={navigateUpdate}>
            Cập nhật
          </Button>
          <Button variant="danger" onClick={backPage}>
            Trở về
          </Button>
        </>
      )}
    </Form>
  );
};
