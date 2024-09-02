import { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import EditModal from '../../components/EditModal';

export default function MuiX_DataGrid_Demo() {
  const rows = [
    { id: "d3a9d8b7-4d4a-46e1-9254-506c3c8d7c24", member: "林俊傑", gender: "male", address: "701 台南市東區仁愛路16號" },
    { id: "8ab3f799-e9f2-4238-8366-8e9ec8b74e7f", member: "王小美", gender: "female", address: "100 台北市中正區忠孝東路1號" },
    { id: "9cf2d9f5-7287-4b3d-9fd8-35d7cb5d38b7", member: "蔡依林", gender: "female", address: "813 高雄市左營區博愛路88號" },
    { id: "b39f858f-1d08-4d67-9809-0c59f2e98ab5", member: "周杰倫", gender: "male", address: "802 高雄市新興區中山路2號" },
    { id: "2f63cc14-9650-4d97-b9c8-f9d1a9c91457", member: "鄭元暢", gender: "male", address: "403 台中市西區自由路19號" },
    { id: "e307c258-37c8-45e6-b55d-9476e5084796", member: "林志玲", gender: "female", address: "105 台北市松山區民生東路13號" },
    { id: "d54d3c34-9393-4973-8e95-68b50fbbc792", member: "陳柏霖", gender: "male", address: "220 新北市板橋區文化路15號" },
    { id: "1d923ace-95f3-4d75-bf97-1f71c891de13", member: "桂綸鎂", gender: "female", address: "400 台中市北區健行路22號" },
    { id: "edc408e5-fef6-4e8d-b7b2-b364f02dbcf9", member: "張孝全", gender: "male", address: "106 台北市大安區忠孝東路四段77號" },
    { id: "15a2399c-c06b-442b-a712-3d1d0cfdd149", member: "舒淇", gender: "female", address: "110 台北市信義區松仁路99號" },
    { id: "d765b511-5b96-404b-87b4-803eb25ac87e", member: "陳奕迅", gender: "male", address: "403 台中市南屯區五權西路18號" },
    { id: "b6489af0-e633-4d3e-81b6-6fa9240143a6", member: "楊丞琳", gender: "female", address: "231 新北市新店區中正路5號" },
    { id: "f1895e8b-53df-4f0e-9362-82f7c2a74e0f", member: "彭于晏", gender: "male", address: "800 高雄市前鎮區中山三路27號" },
    { id: "c1a617a1-46bb-48d4-b7d1-65079a9fe602", member: "林宥嘉", gender: "male", address: "300 新竹市東區光復路38號" },
    { id: "9730485a-47a7-4184-b5fc-c2f6c91a77ee", member: "鄭秀文", gender: "female", address: "220 新北市中和區中正路76號" },
    { id: "257ba1bc-e89e-49b2-9967-9eab0a5b5a71", member: "張惠妹", gender: "female", address: "407 台中市西屯區文心路55號" },
    { id: "ff4a8c7e-7708-4bbf-b762-587cf75efdb9", member: "胡歌", gender: "male", address: "701 台南市東區文化路62號" },
    { id: "11f0d46f-e292-40fa-a284-94fcf2758f7f", member: "楊洋", gender: "male", address: "500 彰化縣彰化市曉明路99號" },
    { id: "f7b5b5d1-2e7f-40c4-a345-cbb04e0cb0ed", member: "鄭爽", gender: "female", address: "108 台北市萬華區和平西路45號" },
    { id: "d0f1b9a4-d275-4f13-b6c9-8c9f3a62e6e8", member: "許瑋甯", gender: "female", address: "106 台北市大安區新生南路3號" },
    { id: "feef9679-1ac9-4c83-a3bb-31bb9c84cfad", member: "吳青峰", gender: "male", address: "200 基隆市仁愛區忠一路10號" },
    { id: "39d9463c-d516-40ff-b27c-c3ff72ea2b9a", member: "張韶涵", gender: "female", address: "205 新北市汐止區福德一路88號" },
    { id: "f6a37e70-e285-4c61-95da-7088b7be16d2", member: "鍾欣潼", gender: "female", address: "600 嘉義市西區世賢路12號" },
    { id: "0325b7be-0e6d-4c0f-b94d-82e590a4a2a5", member: "古天樂", gender: "male", address: "103 台北市大同區延平北路21號" },
    { id: "2eae1d39-4411-4727-afe1-2f3f8482e5cf", member: "唐嫣", gender: "female", address: "407 台中市北屯區松竹路35號" },
    { id: "c7d7f425-b32b-4f18-8ff3-23120dbf98d0", member: "韓庚", gender: "male", address: "302 新竹縣竹北市嘉豐南路56號" },
    { id: "a0b1234e-5dcb-4975-a65f-c9f8d016c241", member: "安以軒", gender: "female", address: "103 台北市大同區南京西路17號" },
    { id: "81a8a693-25f7-4edb-9874-fbcabbdd9314", member: "王俊凱", gender: "male", address: "710 台南市永康區中正路44號" },
    { id: "8d7eaeec-4cbb-42d6-8c76-b87b1a6c891d", member: "迪麗熱巴", gender: "female", address: "104 台北市中山區松江路58號" },
    { id: "2bc3641c-96c2-47e2-bff3-3f618d7b6c11", member: "陳偉霆", gender: "male", address: "804 高雄市鹽埕區大仁路75號" },
    { id: "bf07bced-3d2e-4dc9-b3bb-07a981da423d", member: "舒淇", gender: "female", address: "108 台北市萬華區和平西路67號" },
    { id: "e7a3a3df-31f4-4b99-90df-bd03e0c9dc62", member: "黃曉明", gender: "male", address: "404 台中市南區工學路18號" }
  ];
  const [ dataRows, setDataRows ] = useState(rows); 
  
  const columns = [
    { field: 'member', headerName: '會員', width: 150 },
    { 
      field: 'gender',
      headerName: '性別',
      width: 150,
      renderCell: (params) => (
        params.value === 'male' ? '男生' : params.value === 'female' ? '女生' : '其他'
      ),
    },
    { field: 'address', headerName: '地址', width: 300 },
    {
      field: 'action',
      headerName: '編輯/刪除',
      width: 150,
      renderCell: ({ row }) => (
        <>
          <IconButton onClick={() => handleEdit(row)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDeleteData(row)}>
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  const [selectedRows, setSelectedRows] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentRowData, setCurrentRowData] = useState({});

  const handleEditData = (updatedData) => {
    const newRows = [...dataRows];
    const { id } = updatedData;
    console.log(id);
    const upDateMenberIndex = newRows.findIndex((element) => element.id === updatedData.id);
    newRows[upDateMenberIndex] = updatedData

    setDataRows(() => newRows);
    setEditMode(() => false)
  };

  const handleEdit = (rowData) => {
    setCurrentRowData(() => {
      setEditMode(true);
      return rowData
    });
  };

  const handleDeleteData = (rowData) => {
    const newRows = [...dataRows];
    const updateMemberIndex = newRows.findIndex((element) => element.id === rowData.id);

    if (updateMemberIndex !== -1) {
      newRows.splice(updateMemberIndex, 1); // 刪除指定索引處的一個元素
    }

    setDataRows(() => newRows);
  };

  const handleSelectionChange = (newSelection) => {
    const selectedData = newSelection.map(id => rows.find(row => row.id === id));
    setSelectedRows(selectedData);
  };

  return (
    <>
      <h1>Data Grid Demo</h1>
      <h4>探索所有資料網格功能並了解它們在哪個專案中可用。</h4>
      <hr />
      <EditModal title="編輯會員" isOpen={editMode} handleClose={() => setEditMode(false)} modalData={currentRowData} editData={(updatedData) => handleEditData(updatedData)} />
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          checkboxSelection
          disableRowSelectionOnClick
          rows={dataRows}
          columns={columns}
          onRowSelectionModelChange={(toSelection) => handleSelectionChange(toSelection)}
          initialState={{
            pagination: { paginationModel: { pageSize: 20 } },
          }}
          pageSizeOptions={[5,10,15,20,25,30,35]}
          localeText={{
            MuiTablePagination: {
              labelRowsPerPage: '每頁顯示筆數:',
            },
          }}
        />
      </div>
      <div>
        <h4>選中的行:</h4>
        <pre>{JSON.stringify(selectedRows)}</pre>
      </div>
    </>
  );
}