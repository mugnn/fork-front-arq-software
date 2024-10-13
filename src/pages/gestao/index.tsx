import React, { useEffect, useState } from 'react';
import { Box, Flex, IconButton } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash, faEdit, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import { Column, PageChangeEvent } from '@/utils/interfaces/ReusableTable';
import TabelaReutilizavel from '@/components/Shared/genericTable/ReusableTable';
import './styles.css';
import Database from '@/utils/Database';
import DynamicModal from '@/components/Shared/genericModal/DynamicModal';
import type { Field } from '@/components/Shared/genericModal/DynamicModal';
import { faAdd, faBuildingUser, faFlaskVial, faGraduationCap, faSchool } from '@fortawesome/free-solid-svg-icons';
import SpaceCreateUserFormComponent from '@/components/Form/spaceCreateUserForm/SpaceCreateUserFormComponent';
import { User } from '@/utils/interfaces/User';
import GestaoService from '@/services/gestao/GestaoService';
import DeleteTextModalComponent from '@/components/UserInterface/deleteTextModal/DeleteTextModalComponent';

type ModalType = 'create' | 'edit' | 'delete' | null;

const gestao = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [usuariosData, setUsuariosData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await GestaoService.getUsers();
        setUsuariosData(Array.isArray(users) ? users : []);
      } catch (error) {
        console.error('Error fetching users:', error);
        setUsuariosData([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const eventosData = [
    { usuario: 'johndoe', tipo: 'solicitou uma reserva', data: '10/10/2024 às 14:00' },
    { usuario: 'alice', tipo: 'saiu', data: '10/10/2024 às 14:00' },
    { usuario: 'alice', tipo: 'logou-se', data: '10/10/2024 às 14:00' },
    { usuario: 'bob', tipo: 'editou uma reserva', data: '10/10/2024 às 14:00' },
    { usuario: 'bob', tipo: 'solicitou uma reserva', data: '10/10/2024 às 14:00' },
    { usuario: 'johndoe', tipo: 'aprovou uma reserva', data: '10/10/2024 às 14:00' },
    { usuario: 'johndoe', tipo: 'solicitou uma reserva', data: '10/10/2024 às 14:00' },
    { usuario: 'johndoe', tipo: 'solicitou uma reserva', data: '10/10/2024 às 14:00' },
    { usuario: 'johndoe', tipo: 'solicitou uma reserva', data: '10/10/2024 às 14:00' },
    { usuario: 'johndoe', tipo: 'solicitou uma reserva', data: '10/10/2024 às 14:00' },
    { usuario: 'johndoe', tipo: 'solicitou uma reserva', data: '10/10/2024 às 14:00' },
    { usuario: 'johndoe', tipo: 'solicitou uma reserva', data: '10/10/2024 às 14:00' },
    { usuario: 'johndoe', tipo: 'solicitou uma reserva', data: '10/10/2024 às 14:00' },
    { usuario: 'johndoe', tipo: 'solicitou uma reserva', data: '10/10/2024 às 14:00' },
    { usuario: 'johndoe', tipo: 'solicitou uma reserva', data: '10/10/2024 às 14:00' },
    { usuario: 'johndoe', tipo: 'solicitou uma reserva', data: '10/10/2024 às 14:00' },
  ];

  // const usuariosData = Database.users;

  const eventosColumns = [
    { header: 'Usuário', key: 'usuario' },
    { header: 'Tipo de evento', key: 'tipo' },
    { header: 'Data', key: 'data' },
  ];

  const usuariosColumns: Column[] = [
    { header: '', key: 'username', type: 'avatar' },
    { header: 'Login', key: 'login' },
    { header: 'Nome do usuário', key: 'username' },
    { header: 'Cargo', key: 'role' },
    { header: 'Ações', key: 'acoes' },
  ];

  const spaceFields: Field[] = [
    { name: 'name', label: 'Login do usuário', type: 'text', placeholder: 'Login do usuário' },
    { name: 'name', label: 'Nome do usuário', type: 'text', placeholder: 'Nome do usuário' },
    {
      name: 'type', label: 'Cargo do usuário', type: 'select', placeholder: 'Cargo do usuário',
      options: [{ label: 'Administrador', icon: faGraduationCap, color: 'black' }, { label: 'Gestor', icon: faBuildingUser }, { label: 'Professor', icon: faFlaskVial },],
    },
    { name: 'Senha', label: 'Senha', type: 'text', placeholder: 'Senha' },
    { name: 'Confirme a senha', label: 'Confirme a senha', type: 'text', placeholder: 'Confirme a senha' },
  ];

  const textButtonsEvents = [
    { placeholder: 'Usuário', icon: faUser },
    { placeholder: 'Tipo de evento', icon: faCalendar },
  ];

  const textButtonsUser = [
    { placeholder: 'Usuário', icon: faUser, variant: 'dark' },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const handleSubmitSpace = (formData: Record<string, string>) => {
    console.log('Novo espaço:', formData);
    setIsModalOpen(false);
  };

  const handleRegister = () => {
    setModalType('create');
    setIsModalOpen(true);
  };

  const handleDeleteUser = (userId: number) => {
    const user = usuariosData.find(u => u.id === userId);
    setSelectedUser(user || null);
    setModalType('delete');
    setIsModalOpen(true);
  };

  const handleEditUser = (userId: number) => {
    const user = usuariosData.find(u => u.id === userId);
    setSelectedUser(user || null);
    setModalType('edit');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalType(null);
    setSelectedUser(null);
  };

  const handleSubmitModal = (formData: Record<string, string>) => {
    console.log('Enviado', formData);
    switch (modalType) {
      case 'create':
        break;
      case 'edit':
        break;
      case 'delete':
        break;
    }
    handleCloseModal();
  };

  const renderModalComponent = () => {
    switch (modalType) {
      case 'create':
        return <SpaceCreateUserFormComponent />;
      case 'edit':
        // return <EditUserModalComponent user={selectedUser} />;
      case 'delete':
        return <DeleteTextModalComponent />;
      default:
        return null;
    }
  };

  const getModalTitle = () => {
    switch (modalType) {
      case 'create':
        return 'Criar usuário';
      case 'edit':
        return 'Editar usuário';
      case 'delete':
        return 'Excluir usuário';
      default:
        return '';
    }
  };

  const handlePageChange = (event: PageChangeEvent) => {
    setCurrentPage(event.page);
    setPageSize(event.rows);
  };

  return (
    <div className='page p-20'>
      <Flex justifyContent="space-between" mb={8}>
        <Box flex={1} mr={4}>
          <h2 className='mb-6'>Rastreador de eventos</h2>
          <TabelaReutilizavel
            columns={eventosColumns}
            data={eventosData}
            filters={[]}
            textButtons={textButtonsEvents}
            totalRecords={eventosData.length}
            initialPage={currentPage}
            rowsPerPageOptions={[10]}
            onPageChange={handlePageChange}
          />
        </Box>
        <Box flex={1} ml={4}>
          <h2 className='mb-6'>Usuários</h2>
          <TabelaReutilizavel
            columns={usuariosColumns}
            data={usuariosData.map(user => ({
              ...user,
              acoes: (
                <Flex>
                  <IconButton
                    aria-label="Excluir usuário"
                    icon={<FontAwesomeIcon icon={faTrash} />}
                    colorScheme="red"
                    onClick={() => handleDeleteUser(user.id)}
                  />
                  <IconButton
                    aria-label="Editar usuário"
                    icon={<FontAwesomeIcon icon={faEdit} />}
                    colorScheme="green"
                    ml={2}
                    onClick={() => handleEditUser(user.id)}
                  />
                </Flex>
              ),
            }))}
            filters={[]}
            colorHeader='white'
            textButtons={textButtonsUser}
            totalRecords={usuariosData.length}
            initialPage={currentPage}
            onRegister={{ label: 'Criar usuário', onClick: handleRegister, colorBg: 'white', icon: faPlus, colorText: 'black' }}
            rowsPerPageOptions={[7]}
            onPageChange={handlePageChange}
            isLoading={isLoading}
          />
        </Box>
      </Flex>
      <DynamicModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitModal}
        title={getModalTitle()}
        fields={spaceFields}
        component={renderModalComponent()}
      />
    </div>
  );
}



export default gestao;

