import TabelaReutilizavel from '@/components/Solicitacao/TabelaReutilizavel';
import React, { useState, useEffect } from 'react';
import { faArrowDown, faArrowUp, faPerson, faSearch } from '@fortawesome/free-solid-svg-icons';
import { PageChangeEvent } from '@/components/Solicitacao/TabelaReutilizavel.d';
import './styles.css'

const Solicitacoes = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0);
  const [data, setData] = useState([
    {
      solicitante: 'alice',
      titulo: 'Reserva UCSal',
      periodo: '10/10/2024 14:00 às 10/10/2024 14:00',
      status: { label: 'Aguardando aprovação', color: 'yellow' },
      criadoEm: 'criado em: 10/10/2024 14:00',
    },
  ]);

  const columns = [
    { header: 'Solicitante', key: 'solicitante' },
    { header: 'Título da solicitação', key: 'titulo' },
    { header: 'Período', key: 'periodo' },
    { header: 'Status', key: 'status', type: 'badge' as const },
    { header: 'Criado em', key: 'criadoEm', type: 'date' as const },
  ];

  const filters = [
    { placeholder: 'Ordenar por', options: [{ label: 'Mais recente', icon: faArrowUp }, { label: 'Mais antigo', icon: faArrowDown },] },
    { placeholder: 'Status', options: [{ label: 'Aguardando aprovação', color: '#FFE55F' }, { label: 'Aprovada', color: '#68D68A' }, { label: 'Reprovada', color: '#F97E7A' }, { label: 'Fora do prazo', color: '#868686' },] },
  ];

  const textButtons = [
    { placeholder: 'Título de solicitação', icon: faSearch },
    { placeholder: 'Solicitante', icon: faPerson },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/solicitacoes?page=${currentPage}&pageSize=${pageSize}`);
      const result = await response.json();
      setData(result.data);
      setTotalRecords(result.totalRecords);
    };

    fetchData();
  }, [currentPage, pageSize]);

  function handlePageChange(event: PageChangeEvent) {
    setCurrentPage(event.page);
    setPageSize(event.rows);
  }

  return (
    <div className='page p-20'>
      <h2 className="mb-3">Históricos de solicitações</h2>
      <TabelaReutilizavel
        columns={columns}
        data={data}
        filters={filters}
        textButtons={textButtons}
        totalRecords={totalRecords}
        initialPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Solicitacoes;