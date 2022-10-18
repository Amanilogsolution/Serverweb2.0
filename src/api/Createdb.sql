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
CREATE TABLE tbl_priority_master (
                sno bigint IDENTITY(1,1) NOT NULL,
                priority_id nvarchar(100) NULL,
                priority_type nvarchar(200) NULL,
                priority_description nvarchar(300) NULL ,
                
                add_user_name nvarchar(50) NULL,
                add_system_name nvarchar(100) NULL,
                add_ip_address nvarchar(30) NULL,
                add_date_time datetime NULL,
                update_user_name nvarchar(30) NULL,
                update_system_name nvarchar(100) NULL,
                update_ip_address nvarchar(30) NULL,
                update_date_time datetime NULL,
                status nvarchar(30) NULL,
                priority_uuid nvarchar(350) NULL
)


CREATE TABLE tbl_ticket_status_master (
                sno bigint IDENTITY(1,1) NOT NULL,
                ticket_id nvarchar(100) NULL,
                ticket_status nvarchar(200) NULL,
                ticket_description nvarchar(300) NULL ,
                
                add_user_name nvarchar(50) NULL,
                add_system_name nvarchar(100) NULL,
                add_ip_address nvarchar(30) NULL,
                add_date_time datetime NULL,
                update_user_name nvarchar(30) NULL,
                update_system_name nvarchar(100) NULL,
                update_ip_address nvarchar(30) NULL,
                update_date_time datetime NULL,
                status nvarchar(30) NULL,
                ticket_uuid nvarchar(350) NULL
)


CREATE TABLE tbl_billing_freq_master (
                sno bigint IDENTITY(1,1) NOT NULL,
                billing_freq_id nvarchar(100) NULL,
                billing_freq nvarchar(200) NULL,
               billing_freq_description nvarchar(300) NULL ,
                
                add_user_name nvarchar(50) NULL,
                add_system_name nvarchar(100) NULL,
                add_ip_address nvarchar(30) NULL,
                add_date_time datetime NULL,
                update_user_name nvarchar(30) NULL,
                update_system_name nvarchar(100) NULL,
                update_ip_address nvarchar(30) NULL,
                update_date_time datetime NULL,
                status nvarchar(30) NULL,
                billing_freq_uuid nvarchar(350) NULL
)

CREATE TABLE tbl_vendor_category_master (
                sno bigint IDENTITY(1,1) NOT NULL,
                vendor_category_id nvarchar(100) NULL,
                vendor_category nvarchar(200) NULL,
                vendor_category_description nvarchar(300) NULL ,
                
                add_user_name nvarchar(50) NULL,
                add_system_name nvarchar(100) NULL,
                add_ip_address nvarchar(30) NULL,
                add_date_time datetime NULL,
                update_user_name nvarchar(30) NULL,
                update_system_name nvarchar(100) NULL,
                update_ip_address nvarchar(30) NULL,
                update_date_time datetime NULL,
                status nvarchar(30) NULL,
                vendor_category_uuid nvarchar(350) NULL
)

CREATE TABLE tbl_vendor_sub_category_master (
                sno bigint IDENTITY(1,1) NOT NULL,
                vendor_sub_category_id nvarchar(100) NULL,
                vendor_category nvarchar(200) NULL,
                vendor_sub_category nvarchar(100) NULL,
                vendor_sub_category_description nvarchar(300) NULL ,
                
                add_user_name nvarchar(50) NULL,
                add_system_name nvarchar(100) NULL,
                add_ip_address nvarchar(30) NULL,
                add_date_time datetime NULL,
                update_user_name nvarchar(30) NULL,
                update_system_name nvarchar(100) NULL,
                update_ip_address nvarchar(30) NULL,
                update_date_time datetime NULL,
                status nvarchar(30) NULL,
                vendor_sub_category_uuid nvarchar(350) NULL
)
CREATE TABLE tbl_service_action_type_master (
                sno bigint IDENTITY(1,1) NOT NULL,
                service_action_id nvarchar(100) NULL,
                service_action_type nvarchar(200) NULL,
                service_action_type_description nvarchar(300) NULL ,
                
                add_user_name nvarchar(50) NULL,
                add_system_name nvarchar(100) NULL,
                add_ip_address nvarchar(30) NULL,
                add_date_time datetime NULL,
                update_user_name nvarchar(30) NULL,
                update_system_name nvarchar(100) NULL,
                update_ip_address nvarchar(30) NULL,
                update_date_time datetime NULL,
                status nvarchar(30) NULL,
                service_action_type_uuid nvarchar(350) NULL
)



CREATE TABLE tbl_service_group_master (
                sno bigint IDENTITY(1,1) NOT NULL,
                service_group_id nvarchar(100) NULL,
                service_group_type nvarchar(200) NULL,
                service_group_description nvarchar(300) NULL ,
                
                add_user_name nvarchar(50) NULL,
                add_system_name nvarchar(100) NULL,
                add_ip_address nvarchar(30) NULL,
                add_date_time datetime NULL,
                update_user_name nvarchar(30) NULL,
                update_system_name nvarchar(100) NULL,
                update_ip_address nvarchar(30) NULL,
                update_date_time datetime NULL,
                status nvarchar(30) NULL,
                service_group_uuid nvarchar(350) NULL
)

CREATE TABLE tbl_vendor_code_master (
                sno bigint IDENTITY(1,1) NOT NULL,
                vendor_code_id nvarchar(100) NULL,
                vendor_code nvarchar(200) NULL,
                vendor_name nvarchar(300) NULL ,
                company_address_line1 nvarchar(300) NULL ,
                company_address_line2 nvarchar(300) NULL ,
                company_city nvarchar(100) NULL ,
                company_state nvarchar(100) NULL,
                company_pin_code nvarchar(100) NULL ,
                company_gst nvarchar(100) NULL ,
                company_website nvarchar(100) NULL ,
                company_email nvarchar(100) NULL ,
                venodr_portal nvarchar(100) NULL ,
                add_user_name nvarchar(50) NULL,
                add_system_name nvarchar(100) NULL,
                add_ip_address nvarchar(30) NULL,
                add_date_time datetime NULL,
                update_user_name nvarchar(30) NULL,
                update_system_name nvarchar(100) NULL,
                update_ip_address nvarchar(30) NULL,
                update_date_time datetime NULL,
                status nvarchar(30) NULL,
                vendor_code_uuid nvarchar(350) NULL
)

CREATE TABLE tbl_vendor_contract_master (
                sno bigint IDENTITY(1,1) NOT NULL,
                vendor_contract_id nvarchar(100) NULL,
                vendor nvarchar(150) NULL,
                company_address_line1 nvarchar(300) NULL ,
                company_address_line2 nvarchar(300) NULL ,
                company_city nvarchar(100) NULL ,
                company_state nvarchar(50) NULL,
                company_pin_code bigint NULL ,
                company_gst nvarchar(30) NULL ,
                company_website nvarchar(100) NULL ,
                company_email nvarchar(100) NULL ,
                type_of_contract nvarchar(100) NULL ,
                
                major_category nvarchar(100) NULL ,
                sub_category nvarchar(100) NULL,
                location nvarchar(150) NULL ,
                company nvarchar(100) NULL ,
                customer_account_no nvarchar(100) NULL ,
                reference_no nvarchar(100) NULL ,
                contatct_plain_details nvarchar(100) NULL ,
                
                 rate_per_month nvarchar(50) NULL,
                contract_start_date nvarchar(20) NULL ,
                invoice_generation_date nvarchar(30) NULL ,
                billling_freq nvarchar(100) NULL ,
                payee_name nvarchar(100) NULL ,
                tds nvarchar(100) NULL ,
                
                link_id_no nvarchar(50) NULL ,
                help_desk_no nvarchar(50) NULL ,
                
                add_user_name nvarchar(50) NULL,
                add_system_name nvarchar(100) NULL,
                add_ip_address nvarchar(30) NULL,
                add_date_time datetime NULL,
                update_user_name nvarchar(30) NULL,
                update_system_name nvarchar(100) NULL,
                update_ip_address nvarchar(30) NULL,
                update_date_time datetime NULL,
                status nvarchar(30) NULL,
                vendor_contract_uuid nvarchar(350) NULL
)

CREATE TABLE tbl_drizzle_agent_master (
                sno bigint IDENTITY(1,1) NOT NULL,
                employee_name nvarchar(100) NULL,
                mark_as_agent nvarchar(150) NULL,
                allocate_company nvarchar(300) NULL ,
                agent_email_id nvarchar(300) NULL ,
                agent_contact_number nvarchar(300) NULL ,
                allocate_location nvarchar(300) NULL ,
                agent_role nvarchar(300) NULL ,
                reporting_to nvarchar(300) NULL ,
             
                
                add_user_name nvarchar(50) NULL,
                add_system_name nvarchar(100) NULL,
                add_ip_address nvarchar(30) NULL,
                add_date_time datetime NULL,
                update_user_name nvarchar(30) NULL,
                update_system_name nvarchar(100) NULL,
                update_ip_address nvarchar(30) NULL,
                update_date_time datetime NULL,
                status nvarchar(30) NULL,
                drizzle_agent_uuid nvarchar(350) NULL
)