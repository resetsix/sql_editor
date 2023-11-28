import {
	SparkSQLIcon,
	HiveSQLIcon,
	FlinkSQLIcon,
	DataCollectionIcon,
	FlinkIcon,
	OceanBaseIcon,
	VirtualIcon,
	WorkflowIcon,
	PythonIcon,
	ShellIcon,
	ClickhouseIcon,
	SparkIcon,
	DorisIcon,
	MysqlIcon,
	GreenPlumIcon,
	PostgreSqlIcon,
	SqlServerIcon,
	TiDbIcon,
	VerticaIcon,
	HadoopMRIcon,
	DataxIcon,
} from "../components/icon";
import { TASK_TYPE_ENUM } from "../constant/taier_back";

export const filterIcon = (icon: TASK_TYPE_ENUM) => {
	switch (icon) {
		case TASK_TYPE_ENUM.SPARK_SQL:
			return <SparkSQLIcon style={{ color: "#519aba" }} />;
		case TASK_TYPE_ENUM.SYNC:
			return "sync";
		case TASK_TYPE_ENUM.HIVE_SQL:
			return <HiveSQLIcon style={{ color: "#4291f0" }} />;
		case TASK_TYPE_ENUM.SQL:
			return <FlinkSQLIcon style={{ color: "#5655d8" }} />;
		case TASK_TYPE_ENUM.DATA_ACQUISITION:
			return <DataCollectionIcon style={{ color: "#3F87FF" }} />;
		case TASK_TYPE_ENUM.FLINK:
			return <FlinkIcon />;
		case TASK_TYPE_ENUM.OCEANBASE:
			return <OceanBaseIcon />;
		case TASK_TYPE_ENUM.VIRTUAL:
			return <VirtualIcon />;
		case TASK_TYPE_ENUM.WORK_FLOW:
			return <WorkflowIcon style={{ color: "#2491F7" }} />;
		case TASK_TYPE_ENUM.PYTHON:
			return <PythonIcon />;
		case TASK_TYPE_ENUM.SHELL:
			return <ShellIcon />;
		case TASK_TYPE_ENUM.CLICKHOUSE:
			return <ClickhouseIcon />;
		case TASK_TYPE_ENUM.SPARK:
			return <SparkIcon />;
		case TASK_TYPE_ENUM.DORIS:
			return <DorisIcon />;
		case TASK_TYPE_ENUM.MYSQL:
			return <MysqlIcon />;
		case TASK_TYPE_ENUM.GREENPLUM:
			return <GreenPlumIcon />;
		case TASK_TYPE_ENUM.POSTGRE_SQL:
			return <PostgreSqlIcon />;
		case TASK_TYPE_ENUM.SQL_SERVER:
			return <SqlServerIcon style={{ color: "#bf4339" }} />;
		case TASK_TYPE_ENUM.TiDB:
			return <TiDbIcon style={{ color: "#bf4339" }} />;
		case TASK_TYPE_ENUM.VERTICA:
			return <VerticaIcon />;
		case TASK_TYPE_ENUM.HADOOP_MR:
			return <HadoopMRIcon />;
		case TASK_TYPE_ENUM.DATAX:
			return <DataxIcon />;
		default:
			return "file";
	}
};
