# (1) set up all the mysqldump variables
#!/bin/bash
DATE=`date +"%d_%b_%Y_%H%M"`
SQLFILE=/home/chillvibes/web/db_backup_${DATE}.sql
DATABASE="web"
USER="dbadmin"
PASSWORD="inidbadmin"
 
# (2) in case you run this more than once a day,
# remove the previous version of the file
#unalias rm     2> /dev/null
#rm ${SQLFILE}     2> /dev/null
#rm ${SQLFILE}.gz  2> /dev/null
 
# (3) do the mysql database backup (dump)
mysqldump -u ${USER} -p ${DATABASE}|gzip > ${SQLFILE}.gz
