CREATE TABLE tbl_employee_master (
                sno bigint IDENTITY(1,1) NOT NULL,
                employee_id nvarchar(100) NULL,
                employee_name nvarchar(200) NULL,
                location nvarchar(200) NULL ,
                employee_email nvarchar (70) NULL,
                employee_number nvarchar(20) NULL,
                company nvarchar(100) NULL,
                
                add_user_name nvarchar(50) NULL,
                add_system_name nvarchar(100) NULL,
                add_ip_address nvarchar(30) NULL,
                add_date_time datetime NULL,
                update_user_name nvarchar(30) NULL,
                update_system_name nvarchar(100) NULL,
                update_ip_address nvarchar(30) NULL,
                update_date_time datetime NULL,
                status nvarchar(30) NULL,
                emp_uuid nvarchar(350) NULL
)

CREATE TABLE tbl_asset_type_master (
                sno bigint IDENTITY(1,1) NOT NULL,
                asset_type_id nvarchar(100) NULL,
                asset_type nvarchar(200) NULL,
                asset_description nvarchar(300) NULL ,
                
                add_user_name nvarchar(50) NULL,
                add_system_name nvarchar(100) NULL,
                add_ip_address nvarchar(30) NULL,
                add_date_time datetime NULL,
                update_user_name nvarchar(30) NULL,
                update_system_name nvarchar(100) NULL,
                update_ip_address nvarchar(30) NULL,
                update_date_time datetime NULL,
                status nvarchar(30) NULL,
                asset_type_uuid nvarchar(350) NULL
)

CREATE TABLE  tbl_asset_status_master (
                sno bigint IDENTITY(1,1) NOT NULL,
                asset_status_id nvarchar(100) NULL,
                asset_status nvarchar(200) NULL,
                asset_status_description nvarchar(300) NULL ,
                
                add_user_name nvarchar(50) NULL,
                add_system_name nvarchar(100) NULL,
                add_ip_address nvarchar(30) NULL,
                add_date_time datetime NULL,
                update_user_name nvarchar(30) NULL,
                update_system_name nvarchar(100) NULL,
                update_ip_address nvarchar(30) NULL,
                update_date_time datetime NULL,
                status nvarchar(30) NULL,
                asset_status_uuid nvarchar(350) NULL
)
CREATE TABLE tbl_manufacturer_master (
                sno bigint IDENTITY(1,1) NOT NULL,
                manufacturer_id nvarchar(100) NULL,
                manufacturer_name nvarchar(200) NULL,
                manufacturer_description nvarchar(300) NULL ,
                
                add_user_name nvarchar(50) NULL,
                add_system_name nvarchar(100) NULL,
                add_ip_address nvarchar(30) NULL,
                add_date_time datetime NULL,
                update_user_name nvarchar(30) NULL,
                update_system_name nvarchar(100) NULL,
                update_ip_address nvarchar(30) NULL,
                update_date_time datetime NULL,
                status nvarchar(30) NULL,
                manufacturer_uuid nvarchar(350) NULL
)


CREATE TABLE tbl_software_master (
                sno bigint IDENTITY(1,1) NOT NULL,
                software_id nvarchar(100) NULL,
                software_name nvarchar(200) NULL,
                software_description nvarchar(300) NULL ,
                
                add_user_name nvarchar(50) NULL,
                add_system_name nvarchar(100) NULL,
                add_ip_address nvarchar(30) NULL,
                add_date_time datetime NULL,
                update_user_name nvarchar(30) NULL,
                update_system_name nvarchar(100) NULL,
                update_ip_address nvarchar(30) NULL,
                update_date_time datetime NULL,
                status nvarchar(30) NULL,
                software_master_uuid nvarchar(350) NULL
)

CREATE TABLE tbl_issue_master (
                sno bigint IDENTITY(1,1) NOT NULL,
                issue_id nvarchar(100) NULL,
                issue_type nvarchar(200) NULL,
                issue_description nvarchar(300) NULL ,
                
                add_user_name nvarchar(50) NULL,
                add_system_name nvarchar(100) NULL,
                add_ip_address nvarchar(30) NULL,
                add_date_time datetime NULL,
                update_user_name nvarchar(30) NULL,
                update_system_name nvarchar(100) NULL,
                update_ip_address nvarchar(30) NULL,
                update_date_time datetime NULL,
                status nvarchar(30) NULL,
                issue_uuid nvarchar(350) NULL
)

CREATE TABLE tbl_purchase_type_master (
                sno bigint IDENTITY(1,1) NOT NULL,
                purchase_id nvarchar(100) NULL,
                purchase_type nvarchar(200) NULL,
                purchase_description nvarchar(300) NULL ,
                
                add_user_name nvarchar(50) NULL,
                add_system_name nvarchar(100) NULL,
                add_ip_address nvarchar(30) NULL,
                add_date_time datetime NULL,
                update_user_name nvarchar(30) NULL,
                update_system_name nvarchar(100) NULL,
                update_ip_address nvarchar(30) NULL,
                update_date_time datetime NULL,
                status nvarchar(30) NULL,
                purchase_uuid nvarchar(350) NULL
)

CREATE TABLE tbl_contract_type_master (
                sno bigint IDENTITY(1,1) NOT NULL,
                contract_id nvarchar(100) NULL,
                contract_type nvarchar(200) NULL,
                contract_description nvarchar(300) NULL ,
                
                add_user_name nvarchar(50) NULL,
                add_system_name nvarchar(100) NULL,
                add_ip_address nvarchar(30) NULL,
                add_date_time datetime NULL,
                update_user_name nvarchar(30) NULL,
                update_system_name nvarchar(100) NULL,
                update_ip_address nvarchar(30) NULL,
                update_date_time datetime NULL,
                status nvarchar(30) NULL,
                contract_uuid nvarchar(350) NULL
)