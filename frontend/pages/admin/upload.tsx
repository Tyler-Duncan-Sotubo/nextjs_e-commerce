import React, { FC } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import UploadForm from "../../components/Admin/UploadForm";

const Upload: FC = () => {
  return (
    <AdminLayout title="upload">
      <UploadForm />
    </AdminLayout>
  );
};

export default Upload;
