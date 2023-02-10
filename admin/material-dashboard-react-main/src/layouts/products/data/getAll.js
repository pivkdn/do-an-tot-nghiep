
export default function data() {

  return {
    columns: [
      { Header: "Tên sản phẩm", accessor: "localize", width: "30%", align: "left" },
      { Header: "Giá", accessor: "price", align: "left" },
      { Header: "Ngày tạo", accessor: "created_at", align: "center" },
      { Header: "Hoạt động", accessor: "action", align: "center" }
    ]
  };
}
