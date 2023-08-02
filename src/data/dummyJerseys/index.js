import {
    FormMenu,
    ListCutiMenu,
    StatusMenu,
  } from '../../assets';


  
  export const dummyJerseys = [
    {
      id: 1,
      nama: 'Pengajuan Cuti',
      gambar: [FormMenu, FormMenu],
      halaman: 'PengajuanCuti'
    },
    {
      id: 2,
      nama: 'Status Pengajuan',
      gambar: [StatusMenu, StatusMenu],
      halaman: 'StatusPengajuan'
    },
    {
      id: 3,
      nama: 'Daftar Cuti Hari Ini',
      gambar: [ListCutiMenu, ListCutiMenu],
      halaman: 'DaftarCuti'
    },
  ];