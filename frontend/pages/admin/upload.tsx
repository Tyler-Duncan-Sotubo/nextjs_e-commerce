import React, { FC } from "react";
import AdminLayout from "@components/Layout/AdminLayout";
import UploadForm from "@components/Form/UploadForm";

const Upload: FC = () => {
  return (
    <AdminLayout title="Upload Product Page">
      <UploadForm />
    </AdminLayout>
  );
};

export default Upload;
