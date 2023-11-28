import type molecule from '@dtinsight/molecule';

/**
 * ID 集合
 */
export enum ID_COLLECTIONS {

    /* 活动栏 ID 集合 */
    /**
     * 数据开发
     */
    AC_DATADEV_ID = 'activity.data.dev',
    /**
     * 函数库
     */
    AC_FUNCTIONLIB = 'activity.function.lib',
    /**
     * 元数据
     */
    AC_METADATA = 'activity.metadata',
    /**
     * 回收站
     */
    AC_RECYCLEBIN = 'activity.recycle.bin',
    /**
     * 临时查询
     */
    AC_TEMPORARYQUERY = 'activity.temporary.query',
    /**
     * 资源库
     */
    AC_RESOURCELIB = 'activity.resource.lib',
    /**
     * 任务模板
     */
    AC_TASKTEMPLATE = 'activity.task.template',
    /**
     * 更多
     */
    AC_MORE = 'activity.more',

    /* 菜单栏 ID 集合 */
    /**
     * 全部产品
     */
    MENU_ALL_PROJECTS_ID = 'menu.all.projects',
    /**
    * 数据开发
    */
    MENU_DATA_DEV_ID = 'menu.data.dev',
    /**
    * 任务开发
    */
    MENU_TASK_DEV_ID = 'menu.task.dev',
    /**
    * 发布中心
    */
    MENU_PUBLISH_CENTER_ID = 'menu.publish.center',
    /**
    * 用户配置
    */
    MENU_USER_CONFIG_ID = 'menu.user.config',


}

/**
 * 运维中心下拉菜单
 */
export const OPERATIONS: molecule.model.IMenuBarItem[] = [
    {
        id: 'operations',
        name: '实时运维任务',
    },
    {
        id: 'offlineOperations',
        name: '离线运维任务',
    },
];

export const OFFSET_RESET_FORMAT = 'YYYY-MM-DD HH:mm:ss';

// 表单正常布局
export const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

export const scheduleConfigLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 18 },
    },
};

// 表单对称布局
export const specFormItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
    },
};

// 表单行label居中对齐
export const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 14,
            offset: 8,
        },
    },
};

/**
 * 目录结构类型
 */
export enum CATALOGUE_TYPE {
    /**
     * 任务开发
     */
    TASK = 'task',
    /**
     * 资源管理
     */
    RESOURCE = 'resource',
    /**
     * 函数管理
     */
    FUNCTION = 'function',
}

/**
 * 任务目录的菜单类型
 */
export enum MENU_TYPE_ENUM {
    TASK = 'TaskManager',
    TASK_DEV = 'TaskDevelop',
    SCRIPT = 'ScriptManager',
    RESOURCE = 'ResourceManager',
    FUNCTION = 'FunctionManager',
    PROCEDURE = 'ProcedureManager',
    SPARKFUNC = 'SparkSQLFunction',
    FLINKFUNC = 'FlinkSQLFunction',
    LIBRAFUNC = 'LibraSQLFunction',
    LIBRASYSFUN = 'LibraSysFunc',
    COSTOMFUC = 'CustomFunction',
    COSTOMPROD = 'CustomProcedure',
    SYSFUC = 'SystemFunction',
    COMPONENT = 'ComponentManager',
    TABLE = 'TableQuery',
    TIDB_FUNC = 'TiDBSQLFunction',
    TIDB_SYS_FUNC = 'TiDBSysFunc',
    ORACLE_FUNC = 'OracleSQLFunction',
    ORACLE_SYS_FUNC = 'OracleSysFunc',
    GREEN_PLUM = 'GreenPlumSQLFunction',
    GREEN_PLUM_FUNC = 'GreenPlumCustomFunction',
    GREEN_PLUM_SYS_FUNC = 'GreenPlumSysFunc',
    GREEN_PLUM_PROD = 'ProcedureFunction',
}


/**
 * 任务状态
 */
export enum TASK_STATUS {
    WAIT_SUBMIT = 0,
    CREATED = 1,
    INVOKED = 2,
    DEPLOYING = 3,
    RUNNING = 4,
    FINISHED = 5,
    STOPING = 6,
    STOPED = 7,
    RUN_FAILED = 8, // 运行失败
    SUBMIT_FAILED = 9, // 提交失败
    SUBMITTING = 10,
    RESTARTING = 11,
    SET_SUCCESS = 12,
    KILLED = 13,
    SUBMITTED = 14,
    TASK_STATUS_NOT_FOUND = 15, // 暂时无法获取任务状态
    WAIT_RUN = 16,
    WAIT_COMPUTE = 17,
    FROZEN = 18,
    ENGINEACCEPTED = 19,
    PARENT_FAILD = 21, // 上游失败
    DO_FAIL = 22,
    COMPUTING = 23,
    LACKING = 25,
    AUTO_CANCEL = 26, // 自动取消
}

/**
 * 任务状态集合，运行中
 */
export const RUNNING_STATUS = [TASK_STATUS.RUNNING, TASK_STATUS.TASK_STATUS_NOT_FOUND];
export const FINISH_STATUS = [TASK_STATUS.FINISHED, TASK_STATUS.SET_SUCCESS];
export const FAILED_STATUS = [TASK_STATUS.DO_FAIL, TASK_STATUS.SUBMIT_FAILED];
export const SUBMITFAILD_STATUS = [TASK_STATUS.SUBMIT_FAILED];
export const PARENTFAILED_STATUS = [TASK_STATUS.PARENT_FAILD];
/**
 * 运行失败集合
 */
export const RUN_FAILED_STATUS = [TASK_STATUS.RUN_FAILED];
/**
 * 等待运行集合
 */
export const WAIT_STATUS = [
    TASK_STATUS.WAIT_RUN,
    TASK_STATUS.WAIT_COMPUTE,
    TASK_STATUS.RESTARTING,
    TASK_STATUS.SUBMITTED,
    TASK_STATUS.CREATED,
    TASK_STATUS.COMPUTING,
];
export const SUBMITTING_STATUS = [TASK_STATUS.SUBMITTING];
/**
 * 停止集合
 */
export const STOP_STATUS = [TASK_STATUS.KILLED, TASK_STATUS.AUTO_CANCEL];
export const FROZEN_STATUS = [TASK_STATUS.FROZEN];

/**
 * 任务状态过滤筛选
 */
export const TASK_STATUS_FILTERS = [
    {
        text: '等待提交',
        value: TASK_STATUS.WAIT_SUBMIT,
    },
    {
        text: '提交中',
        value: TASK_STATUS.SUBMITTING,
    },
    {
        text: '提交失败',
        value: TASK_STATUS.SUBMIT_FAILED,
    },
    {
        text: '等待运行',
        value: TASK_STATUS.WAIT_RUN,
    },
    {
        text: '运行中',
        value: TASK_STATUS.RUNNING,
    },
    {
        text: '成功',
        value: TASK_STATUS.FINISHED,
    },
    {
        text: '手动取消',
        value: TASK_STATUS.STOPED,
    },
    {
        text: '超时取消',
        value: TASK_STATUS.AUTO_CANCEL,
    },
    {
        text: '运行失败',
        value: TASK_STATUS.RUN_FAILED,
    },
    {
        text: '失败中',
        value: TASK_STATUS.DO_FAIL,
    },
    {
        text: '停止中',
        value: TASK_STATUS.STOPING,
    },
    {
        text: '上游失败',
        value: TASK_STATUS.PARENT_FAILD,
    },
    {
        text: '冻结',
        value: TASK_STATUS.FROZEN,
    },
];

/**
 * hdfs 类型
 */
export const HDFS_FIELD_TYPES = [
    'STRING',
    'VARCHAR',
    'CHAR',
    'TINYINT',
    'SMALLINT',
    'INT',
    'BIGINT',
    'FLOAT',
    'DECIMAL',
    'DOUBLE',
    'TIMESTAMP',
    'DATE',
];

/**
 * 菜单抽屉类别
 */
export enum DRAWER_MENU_ENUM {
    /**
     * 任务管理
     */
    TASK = 'task',
    /**
     * 实时任务管理
     */
    STREAM_TASK = 'stream-task',
    /**
     * 周期实例
     */
    SCHEDULE = 'schedule',
    /**
     * 补数据实例
     */
    PATCH = 'patch',
    /**
     * 补数据实例明细
     */
    PATCH_DETAIL = 'patch-detail',
    /**
     * 队列管理
     */
    QUEUE = 'queue',
    /**
     * 队列管理明细
     */
    QUEUE_DETAIL = 'queue-detail',
    /**
     * 资源管理
     */
    RESOURCE = 'resource',
    /**
     * 多集群管理
     */
    CLUSTER = 'cluster',
    /**
     * 多集群管理明细
     */
    CLUSTER_DETAIL = 'cluster-detail',
}



/**
 * 组件枚举
 */
export enum COMPONENT_TYPE_VALUE {
    FLINK = 0,
    SPARK = 1,
    HDFS = 2,
    YARN = 3,
    SPARK_THRIFT = 4,
    HIVE_SERVER = 5,
    SFTP = 6,
}
/**
 * 控制台-多集群管理文件类别
 */
export const FILE_TYPE = {
    KERNEROS: 0,
    CONFIGS: 1,
    PARAMES: 2,
} as const;

/**
 * 任务语言类别
 */
export enum TASK_LANGUAGE {
    SPARKSQL = 'sparksql',
    HIVESQL = 'hivesql',
    FLINKSQL = 'flinksql',
    MYSQL = 'mysql',
    PLSQL = 'plsql',
    SQL = 'sql',
    JSON = 'json',
    PYTHON = 'python',
    SHELL = 'shell',
}

/**
 * 数据操作类型
 */
export enum CAT_TYPE {
    /**
     * 插入
     */
    INSERT = 1,
    /**
     * 更新
     */
    UPDATE = 2,
    /**
     * 删除
     */
    DELETE = 3,
}