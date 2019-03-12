/* 
2. Based on the following schema tables, using an SQL statement, select all contacts in the
table and their address information. Omit any records that do not have an address. Show
the output of your queries as returned from the SQL statement.
*/

-- select all contacts in the table and their address information. 
-- Omit any records that do not have an address.
SELECT 
    CUSTOMERS.NAME, 
    CUSTOMER_ADDRESS.STREET_ADDRESS,
    CUSTOMER_ADDRESS.POSTAL_CODE,
    CUSTOMER_ADDRESS.COUNTRY
 FROM CUSTOMERS 
 INNER JOIN [CUSTOMER_ADDRESS] ON CUSTOMERS.ID = CUSTOMER_ADDRESS.CUSTOMER_ID

-- Result:
-- Number of Records: 3
-- NAME	        STREET_ADDRESS	            POSTAL_CODE	    COUNTRY
-- Ryan	        999 Night Stalker Road	    12345	        US
-- Jonathan	    123 Big Walk Way	        75023	        US
-- Colin	    509 Charter Road	        90021	        US
