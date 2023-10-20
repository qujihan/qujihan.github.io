---
author: "Jihan"
title: "记录本站实现的功能"
date: "2023-01-01"
math: true
viz: true
# top: true
top: false
tags:
- Handbook
---
这个网站可以支持的功能, 记录下来等我写博客的时候快速翻阅
<!--more-->

这个就是本文的md文件的头部部分

```yaml
    ---
    author: "Jihan"
    title: "记录本站实现的功能"
    date: "2023-01-01"
    math: true
    viz: true
    # top: true
    top: false
    tags: 
    - handbooks
    ---
```

### Math
当`math: true` 的时候, 可以使用 $\LaTeX$ 去渲染数学公式

### Viz
当`viz: true` 的时候, 可以使用语言为`viz-dot`的代码块去渲染graphviz代码, 生成svg图片

例如:
```viz-dot
digraph {
    nodesep=0.1;
    ranksep=0.1;
    rankdir=TB;
    fontname="Helvetica";
    fontsize=10;

    labelloc ="t"
    label="Option 4 - Postgres Migration Hot Standby on GCP"
    fontsize="12"

    node [ color=red, shape=record, fontname=Helvetica,fontsize=10 ];
    edge [ color=blue, fontname=Helvetica, fontsize=6];

    master_mysql [ label="Master Postgres
    datasource",shape=oval];
    hot_swap [ label = "hot standby", shape=rectangle ]
    #pg_dump [ label = "pg_dump", shape=rectangle ]
    #aws_dms [ label="AWS Data Migration Service" ]
    cloud_sql [ label="CloudSQL Postgres"]

    subgraph cluster_aws {
        label="AWS";
        labeljust=l
        color=blue;
        style="bold";
        width=.8
        fontsize=10
        ranksep=1
        
        subgraph cluster_rdp {
            label="RDS";
            color=brown;
            height=.1;
            master_mysql; 
            test_sql           
        }        
    }

    subgraph cluster_gcp {
        label="GCP";
        labeljust=l;
        color=darkgreen;
        style="bold";
        width=.8
        fontsize=10
        ranksep=1
        hot_swap
        subgraph cluster_ec2 {
            label="k8s Pod";
            labeljust=l;
            concentrate=true
            color=brown;
            pg_dump
            pg_restore
        }
        subgraph cluster_gs {
            label = "gs://bucket"
            color=purple;
           dump_tar 
        }
        subgraph cluster_cloud_sql {
            label="CloudSQL";
            color=purple;
            cloud_sql
        }
    }

    master_mysql -> hot_swap [fontname=Helvetica, color=red, fontsize=8, arrowtail=vee, arrowhead=vee, ];
    hot_swap -> cloud_sql [ label=pg_restore fontname=Helvetica, color=red, fontsize=8, arrowhead=vee, ];
    dump_tar -> pg_restore 
    pg_restore -> cloud_sql [ label="Cloud Migration" fontsize=9 ]   
}
```

就是使用下面的代码渲染出来的(```后面跟的是viz-dot)
```
digraph {
    nodesep=0.1;
    ranksep=0.1;
    rankdir=TB;
    fontname="Helvetica";
    fontsize=10;

    labelloc ="t"
    label="Option 4 - Postgres Migration Hot Standby on GCP"
    fontsize="12"

    node [ color=red, shape=record, fontname=Helvetica,fontsize=10 ];
    edge [ color=blue, fontname=Helvetica, fontsize=6];

    master_mysql [ label="Master Postgres
    datasource",shape=oval];
    hot_swap [ label = "hot standby", shape=rectangle ]
    #pg_dump [ label = "pg_dump", shape=rectangle ]
    #aws_dms [ label="AWS Data Migration Service" ]
    cloud_sql [ label="CloudSQL Postgres"]

    subgraph cluster_aws {
        label="AWS";
        labeljust=l
        color=blue;
        style="bold";
        width=.8
        fontsize=10
        ranksep=1
        
        subgraph cluster_rdp {
            label="RDS";
            color=brown;
            height=.1;
            master_mysql; 
            test_sql           
        }        
    }

    subgraph cluster_gcp {
        label="GCP";
        labeljust=l;
        color=darkgreen;
        style="bold";
        width=.8
        fontsize=10
        ranksep=1
        hot_swap
        subgraph cluster_ec2 {
            label="k8s Pod";
            labeljust=l;
            concentrate=true
            color=brown;
            pg_dump
            pg_restore
        }
        subgraph cluster_gs {
            label = "gs://bucket"
            color=purple;
           dump_tar 
        }
        subgraph cluster_cloud_sql {
            label="CloudSQL";
            color=purple;
            cloud_sql
        }
    }

    master_mysql -> hot_swap [
      fontname=Helvetica, color=red, fontsize=8, arrowtail=vee, arrowhead=vee, 
    ];
    hot_swap -> cloud_sql [
       label=pg_restore fontname=Helvetica, color=red, fontsize=8, arrowhead=vee, 
    ];
    dump_tar -> pg_restore 
    pg_restore -> cloud_sql [ label="Cloud Migration" fontsize=9 ]   
}
```


### Top
当`top: true` 的时候, 可以在主页显示


### 表格功能

| Name              | Markdown            | HTML tag             |
| ----------------- | ------------------- | -------------------- |
| *Emphasis*        | `*Emphasis*`        | `<em></em>`          |
| **Strong**        | `**Strong**`        | `<strong></strong>` |
| `code`            | ``code``            | `<code></code>`      |
| ~~Strikethrough~~ | `~~Strikethrough~~` | `<del></del`         |
| <u>Underline</u>  | `<u>underline</u>`  | `<u></u>`            |

### 代码块功能
[Example](https://gohugo.io/content-management/syntax-highlighting/#example-highlight-shortcode)
