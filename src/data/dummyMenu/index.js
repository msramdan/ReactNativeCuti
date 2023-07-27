import React from 'react';
import { IconChangePassword, IconEditProfile, } from "../../assets";

export const dummyMenu = [
  {
    id: 1,
    nama: 'Edit Profile',
    gambar: <IconEditProfile />,
    halaman: 'EditProfile'
  },
  {
    id: 2,
    nama: 'Change Password',
    gambar: <IconChangePassword />,
    halaman: 'ChangePassword'
  },
];