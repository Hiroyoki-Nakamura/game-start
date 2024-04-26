"use client";

import React from "react";
import Container from "../../atom/Container";
import UserData from "../../molecule/UserData";
import PersonalData from "../../molecule/PersonalData";
import Button from "../../atom/Button";

import { useUserEdit, usePersonalEdit } from "@/hooks/useEditNavigation";

const UserInfoContainer: React.FC = () => {
  const handlePersonalEdit = usePersonalEdit();
  const handleUserEdit = useUserEdit();

  return (
    <Container className="w-full border-solid border-2 border-red-500 p-2">
      <h2 className="text-white font-bold mt-6">Dados Pessoais</h2>
      <div className="flex justify-end my-4">
        <Button
          name="Editar"
          className="bg-red-500 p-1 rounded text-white hover:bg-red-400"
          onClick={handlePersonalEdit}
        />
      </div>
      <PersonalData></PersonalData>
      <h2 className="text-white font-bold mt-6">Dados de Login</h2>
      <div className="flex justify-end my-4">
        <Button
          name="Editar"
          className="bg-red-500 p-1 rounded text-white hover:bg-red-400"
          onClick={handleUserEdit}
        />
      </div>
      <UserData></UserData>
    </Container>
  );
};

export default UserInfoContainer;
