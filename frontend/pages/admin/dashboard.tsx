import React, { FC } from "react";
import AdminLayout from "../../src/components/Layout/AdminLayout";

type Props = {};

const dashboard: FC<Props> = () => {
  return <AdminLayout title="admin">dashboard</AdminLayout>;
};

export default dashboard;
