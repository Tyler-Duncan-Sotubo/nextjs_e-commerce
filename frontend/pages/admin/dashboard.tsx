import React, { FC } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";

type Props = {};

const dashboard: FC<Props> = () => {
  return <AdminLayout title="admin">dashboard</AdminLayout>;
};

export default dashboard;
