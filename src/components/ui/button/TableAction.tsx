import { BiExpand, BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Row } from "../../layouts/row_column";
import styles from "./TableAction.module.css";
import type React from "react";

interface ActionConfig {
  key: "view" | "edit" | "delete";
  icon: React.ReactNode;
  show: boolean;
  label: string;
}

interface TableActionProps {
  hasView?: boolean;
  hasEdit?: boolean;
  hasDelete?: boolean;
  onViewClick?: () => void;
  onEditClick?: () => void;
  onDeleteClick?: () => void;
}

const TableAction: React.FC<TableActionProps> = ({
  hasView = true,
  hasEdit = true,
  hasDelete = true,
  onViewClick,
  onEditClick,
  onDeleteClick,
}) => {
  const actions: ActionConfig[] = [
    { key: "view", icon: <BiExpand />, show: hasView, label: "View" },
    { key: "edit", icon: <BiSolidEdit />, show: hasEdit, label: "Edit" },
    { key: "delete", icon: <MdDelete />, show: hasDelete, label: "Delete" },
  ];

  const clickHandlers: Record<string, (() => void) | undefined> = {
    view: onViewClick,
    edit: onEditClick,
    delete: onDeleteClick,
  };

  return (
    <Row gap={10}>
      {actions
        .filter((action) => action.show)
        .map(({ key, icon, label }) => (
          <button
            key={key}
            onClick={clickHandlers[key]}
            aria-label={label}
            className={styles.button}
          >
            {icon}
          </button>
        ))}
    </Row>
  );
};

export default TableAction;
