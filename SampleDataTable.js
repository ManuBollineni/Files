import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const SampleDataTable = ({ refresh }) => {
  const [formData, setformData] = useState({ selectedProject: '' });
  const [postsList, setpostsList] = useState([{id:1, title:'project-1'},{id:2, title:'project-2'}]);
  //const [selectedProjectstate, setSelectedProject] = useState({selectedProject:'', selected : ''});
  const [gridColumnsState, setGridColumnsState] = useState([
    {
      name: "Edit",
      selector: "Id",
      export: false,
      cell: (record) => {
        return (
          <React.Fragment>
            <div style={{ paddingLeft: "10px" }}>
              <NavLink
                title="Edit"
                className="csrLink ms-draggable"
                to={`/Buyers/${record.Id}`}
              >
                <FontAwesomeIcon
                  icon={faEdit}
                  onClick={() => {
                    this.onEditClickHandler(record.Id);
                  }}
                ></FontAwesomeIcon>
              </NavLink>
            </div>
          </React.Fragment>
        );
      },
      header: "Action",
      dataKey: "Id",
    },
    {
      name: "Plant",
      selector: "Plant",
      sortable: true,
      header: "Plant",
      dataKey: "Plant",
    },
    {
      name: "Plant Code",
      selector: "PlantCode",
      sortable: true,
      header: "PlantCode",
      dataKey: "PlantCode",
    },
    {
      name: "Database",
      selector: "Database",
      sortable: true,
      header: "Database",
      dataKey: "Database",
    },
    {
      name: "Buyer Name",
      selector: "Title",
      sortable: true,
      header: "Title",
      dataKey: "Title",
    },
  ]);
  const [totalData, setTotalData] = useState([]);
  const [dynamicColumns, setdynamicColumns] = useState([]);

  const columns = [
    {
      name: "Edit",
      selector: "Id",
      export: false,
      cell: (record) => {
        return (
          <React.Fragment>
            <div style={{ paddingLeft: "10px" }}>
              <NavLink
                title="Edit"
                className="csrLink ms-draggable"
                to={`/Buyers/${record.Id}`}
              >
                <FontAwesomeIcon
                  icon={faEdit}
                  onClick={() => {
                    this.onEditClickHandler(record.Id);
                  }}
                ></FontAwesomeIcon>
              </NavLink>
            </div>
          </React.Fragment>
        );
      },
      header: "Action",
      dataKey: "Id",
    },
    {
      name: "Plant",
      selector: "Plant",
      sortable: true,
      header: "Plant",
      dataKey: "Plant",
    },
    {
      name: "Plant Code",
      selector: "PlantCode",
      sortable: true,
      header: "PlantCode",
      dataKey: "PlantCode",
    },
    {
      name: "Database",
      selector: "Database",
      sortable: true,
      header: "Database",
      dataKey: "Database",
    },
    {
      name: "Buyer Name",
      selector: "Title",
      sortable: true,
      header: "Title",
      dataKey: "Title",
    },
  ];

  // {
  //     name: "Buyer Code",
  //     selector: "Buyer_x0020_Number",
  //     sortable: true,
  //     header: 'Buyer Number',
  //     dataKey: 'Buyer_x0020_Number'
  // },
  // {
  //     name: "Status",
  //     selector: "IsActive",    // plant plantcode database buyername
  //     sortable: true,         // status buyer code
  //     header: 'IsActive',
  //     dataKey: 'IsActive'
  // }
  const loadListData = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts`).then(function (
      response
    ) {
        
      var data1 = [
        {
          Id: 83,
          settings: { IsActive: true, Buyer_x0020_Number: "Honda" },
          IsActive: true,
          Buyer_x0020_Number: "Honda",
          Title: "Hell bush",
          Plant: "CLAW",
          PlantCode: "0007",
          Database: "CMSDAT",
        },
        {
          Id: 83,
          IsActive: true,
          settings: { IsActive: true, Buyer_x0020_Number: "Yamaha" },
          IsActive: true,
          Buyer_x0020_Number: "Yamaha",
          Title: "Manoj",
          Plant: "CLAW",
          PlantCode: "1112",
          Database: "Mysql",
        },
        {
          Id: 83,
          IsActive: true,
          settings: { IsActive: true, Buyer_x0020_Number: "Suzuki" },
          IsActive: true,
          Buyer_x0020_Number: "Suzuki",
          Title: "Gautham",
          Plant: "CLAW",
          PlantCode: "0007",
          Database: "NJT",
        },
      ];

      var data2 = [
        {
          Id: 83,
          settings: { IsActive: true, Vendor_x0020_Number: "Honda" },
          IsActive: true,
          Buyer_x0020_Number: "Honda",
          Title: "Hell bush",
          Plant: "CLAW",
          PlantCode: "0007",
          Database: "CMSDAT",
        },
        {
          Id: 83,
          IsActive: true,
          settings: { IsActive: true, vendor_x0020_Number: "Yamaha" },
          IsActive: true,
          Buyer_x0020_Number: "Yamaha",
          Title: "Manoj",
          Plant: "CLAW",
          PlantCode: "1112",
          Database: "Mysql",
        },
        {
          Id: 83,
          IsActive: true,
          settings: { IsActive: true, vendor_x0020_Number: "Suzuki" },
          IsActive: true,
          Buyer_x0020_Number: "Suzuki",
          Title: "Gautham",
          Plant: "CLAW",
          PlantCode: "0007",
          Database: "NJT",
        },
      ];

      if(formData.selectedProject == "project-1")
      {
      const gridColumns = [];
      Object.keys(data1[0].settings).forEach((item) => {
        gridColumns.push({
          name: item,
          selector: item,
          sortable: true,
          header: item,
          dataKey: item,
        });
      });
      //setInitialColumnState();
      console.log(gridColumns);   //static            ///dynamic
      //setGridColumnsState([...gridColumnsState, ...gridColumns]);
      let allColumns = [...columns, ...gridColumns];
      setGridColumnsState(allColumns);
      //gridColumnsState.push(gridColumns);
        setTotalData(data1);
      }
      else if(formData.selectedProject == "project-2"){
        const gridColumns = [];
        Object.keys(data2[0].settings).forEach((item) => {
          gridColumns.push({
            name: item,
            selector: item,
            sortable: true,
            header: item,
            dataKey: item,
          });
        });
        //setInitialColumnState();
        console.log(gridColumns);
        //setGridColumnsState([...gridColumnsState, ...gridColumns]);
        let allColumns = [...columns, ...gridColumns];
        setGridColumnsState(allColumns);
        //gridColumnsState.push(gridColumns);
        setTotalData(data2);
      }
      else{

      }
      
    });
  };

  const setInitialColumnState = () =>{
    setGridColumnsState(columns);
  }
  useEffect(() => {
    loadListData();
  }, [refresh,formData.selectedProject]);

  useEffect(() => {
    console.log(formData);
  }
  ,[gridColumnsState])

  const handleChange = (event) => {
    const formdata = { ...formData };
        const { name } = event.target;
        const value = event.target.value;

        formdata[name] = value !== 'None' ? value : null;
        setformData(formdata);
  }
  const customStyles = {
    rows: {
      style: {
        minHeight: "70px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "11px", // override the cell padding for head cells
        // paddingRight: '3px',
        color: "#572ba7",
        fontSize: ".9rem",
        background: "linear-gradient(rgb(228 228 228),rgb(191 191 191))",
        borderTop: "0!important",
        borderBottom: "2px solid #dee2e6;",
        verticalAlign: "bottom",
      },
    },
    cells: {
      style: {
        paddingLeft: "3px", // override the cell padding for data cells
        paddingRight: "3px",
      },
    },
  };

  return (
    <div className="mt-2" id="tablePDF">
      <select
        className="form-control"
        required={true}
        value={formData.posts}
        name="selectedProject"
        title="selectedProject"
        onChange={handleChange}
      >
        <option value="">None</option>
        {postsList.map((option, index) => (
          <option key={index} value={option.title}>
            {option.title}
          </option>
        ))}
      </select>

      <DataTable
        // title="Vendor Master"
        noHeader
        columns={gridColumnsState}
        data={totalData || []}
        striped={true}
        pagination
        actions
        customStyles={customStyles}
        persistTableHead={true}
      />
    </div>
  );
};

export default SampleDataTable;
