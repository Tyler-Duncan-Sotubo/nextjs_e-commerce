import React, { FC } from "react";
import AdminLayout from "../../components/Admin/AdminLayout";
import UploadForm from "../../components/Admin/UploadForm";

const Upload: FC = () => {
  return (
    <AdminLayout title="Upload Product Page">
      <UploadForm />
    </AdminLayout>
  );
};

export default Upload;
