/**
 * 天宫空间站虚拟漫游 - 数据结构文件
 * 包含所有舱段、全景图和热点信息
 */

// 漫游数据结构
// 这个对象包含了整个虚拟漫游系统的所有数据
// 按照空间站的不同舱段进行组织，每个舱段包含多个全景图，每个全景图包含多个热点
const tourData = {
    // 天和核心舱数据
    // 包含核心舱的基本信息和三个全景场景：总览、工作区和生活区
    tianhe: {
        name: "天和核心舱", // 舱段名称
        description: "中国空间站的管理与控制中心，为航天员提供生活区域和工作平台。", // 舱段描述
        panoramas: [ // 全景图数组，包含该舱段的所有全景场景
            {
                id: "tianhe-overview", // 全景图唯一标识符
                name: "核心舱总览", // 全景图名称
                image: "images/panoramas/tianhe-overview.jpeg", // 全景图片路径
                description: "天和核心舱全景视图，全长16.6米，重约22.5吨，由节点舱、小柱段、大柱段、后端通道及资源舱组成。", // 全景图描述
                hotspots: [ // 热点数组，定义全景图中的交互点
                    {
                        x: 30, // 热点在全景图中的水平位置（百分比）
                        y: 50, // 热点在全景图中的垂直位置（百分比）
                        title: "资源舱", // 热点标题
                        content: "为环形柱段，位于大柱段外侧，主要安装有各种生命维持系统，负责空间站的环境控制与生命保障。" // 热点详细内容
                    },
                    {
                        x: 50,
                        y: 60,
                        title: "大柱段",
                        content: "直径4.2米，是航天员的主要工作区，装有4个机柜，配备各种科学实验设备和控制系统。"
                    },
                    {
                        x: 70,
                        y: 35,
                        title: "小柱段",
                        content: "直径约2.8米，内侧是居住区，有3个卧室和1个卫生间，外侧是太阳能帆板、中继天线、机械臂、控制力矩陀螺等大尺寸舱外设备。"
                    },
                    {
                        x: 30,
                        y: 40,
                        title: "节点舱",
                        content: "核心舱的主要对接模块，有2个对接口、2个停泊口和1个出舱口，兼作气闸舱。可使核心舱与其他四个方向访问空间站的飞船对接，包括两个实验舱（问天舱和梦天舱）、一艘货运飞船和一艘载人飞船。"
                    }
                ]
            },
            {
                id: "tianhe-work", // 工作区全景图
                name: "工作区",
                image: "images/panoramas/tianhe-work.jpg",
                description: "天和核心舱的工作区域，位于大柱段内，配备了先进的控制系统和科研设备。",
                hotspots: [
                    {
                        x: 40,
                        y: 30,
                        title: "计算机系统",
                        content: "空间站的中央计算机系统，负责处理所有操作指令、数据收集和环境控制，确保空间站各系统协调运行。"
                    },
                    {
                        x: 60,
                        y: 50,
                        title: "通信设备",
                        content: "与地面控制中心进行通信的设备，支持实时视频会议、数据传输和紧急联络，是空间站与地球保持联系的关键设备。"
                    },
                    {
                        x: 25,
                        y: 55,
                        title: "机械臂控制台",
                        content: "控制空间站机械臂的操作界面，航天员通过该系统精确操作机械臂完成舱外实验、设备安装和维修任务。"
                    },
                    {
                        x: 75,
                        y: 40,
                        title: "生命维持系统控制台",
                        content: "监控和调节空间站环境参数的控制台，负责空间站的统一管理和控制，为空间站提供指导、导航和方向控制，还管理动力、推进和生命支持系统。"
                    }
                ]
            },
            {
                id: "tianhe-living", // 生活区全景图
                name: "生活区",
                image: "images/panoramas/tianhe-living.jpg",
                description: "位于小柱段内侧的生活区，包括3个卧室、1个卫生间和航天员日常活动区域。",
                hotspots: [
                    {
                        x: 30,
                        y: 40,
                        title: "航天员卧室",
                        content: "航天员的私人睡眠空间，小柱段内共有3个独立卧室，每个航天员都有独立的睡眠舱，配备睡袋、个人物品存放处和小型娱乐设备，提供必要的隐私和休息环境。"
                    },
                    {
                        x: 70,
                        y: 35,
                        title: "餐饮区",
                        content: "航天员用餐的区域，配备食品储存柜、加热设备和特制餐具，可供航天员享用各种太空食品，包括中国传统食品和国际美食。"
                    },
                    {
                        x: 50,
                        y: 70,
                        title: "健身设备",
                        content: "为抵抗微重力环境对人体的负面影响，空间站配备了专业健身设备，如跑步机和阻力训练器，航天员每天都要进行规定的锻炼计划。"
                    },
                    {
                        x: 20,
                        y: 60,
                        title: "卫生间",
                        content: "航天员进行个人清洁的区域，包括特殊设计的太空淋浴系统、牙刷站和太空厕所，所有设备都经过专门设计，适合微重力环境使用，确保航天员保持良好的卫生条件。"
                    },
                    {
                        x: 80,
                        y: 50,
                        title: "休闲娱乐区",
                        content: "航天员放松休息的区域，配备电子阅读设备、音乐播放器和视频通话设备，帮助航天员在繁忙的工作之余放松身心，与地球的家人朋友保持联系。"
                    }
                ]
            }
        ]
    },
    
    // 问天实验舱数据
    // 包含问天实验舱的基本信息和三个全景场景：总览、生物实验区和材料实验区
    wentian: {
        name: "问天实验舱", // 舱段名称
        description: "主要科学实验平台，配备多学科实验柜，支持生命科学、材料科学等研究。", // 舱段描述
        panoramas: [ // 全景图数组
            {
                id: "wentian-overview", // 实验舱总览全景图
                name: "实验舱总览",
                image: "images/panoramas/wentian-overview.jpg",
                description: "问天实验舱的全景视图，展示了各种科学实验设备和工作区域。",
                hotspots: [
                    {
                        x: 35,
                        y: 45,
                        title: "生命科学实验区",
                        content: "专门用于生命科学研究的区域，配备了植物培养箱、细胞培养设备和生物样本分析仪器，研究微重力环境下生物体的生长和适应机制。"
                    },
                    {
                        x: 65,
                        y: 40,
                        title: "材料科学实验区",
                        content: "用于材料科学研究的区域，配备了材料熔炼、结晶和分析设备，可研究微重力环境对材料形成和性能的影响，为新材料开发提供科学依据。"
                    },
                    {
                        x: 50,
                        y: 60,
                        title: "实验控制台",
                        content: "集中控制实验舱内各类实验的操作界面，航天员可以通过这里设置实验参数、监测实验过程、收集实验数据，是开展科学实验的指挥中心。"
                    },
                    {
                        x: 80,
                        y: 30,
                        title: "舱外实验平台接口",
                        content: "连接舱外实验平台的接口，可以通过此处控制和监测暴露在太空环境中的实验装置，研究空间辐射、真空等极端环境对各类材料和生物样本的影响。"
                    }
                ]
            },
            {
                id: "wentian-biology", // 生物实验区全景图
                name: "生物实验区",
                image: "images/panoramas/wentian-biology.jpg",
                description: "问天实验舱中的生物实验区，进行植物培养和微生物研究。",
                hotspots: [
                    {
                        x: 40,
                        y: 30,
                        title: "植物培养箱",
                        content: "特殊设计的植物生长箱，提供光照、水分和营养，研究植物在微重力环境下的生长发育过程，为未来太空农业提供科学数据。"
                    },
                    {
                        x: 60,
                        y: 60,
                        title: "显微分析系统",
                        content: "高精度的显微观察和分析系统，可对生物样本进行实时观察和数据收集，支持航天员进行复杂的生物学实验和分析。"
                    },
                    {
                        x: 25,
                        y: 50,
                        title: "细胞培养设备",
                        content: "用于培养和研究各类细胞的设备，可以在严格控制的环境中长期培养细胞样本，研究微重力对细胞结构、分裂和代谢的影响。"
                    },
                    {
                        x: 75,
                        y: 40,
                        title: "生物样本存储柜",
                        content: "用于保存各类生物样本的低温储存设备，可以保存细胞、组织、种子等样本，供长期研究使用或带回地球进行深入分析。"
                    },
                    {
                        x: 50,
                        y: 20,
                        title: "动物实验监测系统",
                        content: "用于监测太空中小型动物（如小鼠、果蝇等）生理状态的系统，可以无创地记录心率、活动量等指标，研究太空环境对动物生理的影响。"
                    }
                ]
            },
            {
                id: "wentian-materials", // 材料实验区全景图
                name: "材料实验区",
                image: "images/panoramas/wentian-materials.jpg",
                description: "问天实验舱中的材料科学实验区，研究微重力环境下的材料性能。",
                hotspots: [
                    {
                        x: 35,
                        y: 45,
                        title: "材料熔炼设备",
                        content: "高温材料熔炼和处理设备，可在微重力环境下研究材料的结晶、合金形成和相变过程，为地面材料制造提供新的理论和技术支持。"
                    },
                    {
                        x: 70,
                        y: 50,
                        title: "测试分析平台",
                        content: "材料性能测试和分析平台，配备各种传感器和分析仪器，可对实验样品进行全面的物理和化学性能测试，获取宝贵的科学数据。"
                    },
                    {
                        x: 55,
                        y: 25,
                        title: "3D打印实验台",
                        content: "用于太空3D打印研究的实验平台，探索在微重力环境下进行增材制造的可能性，测试不同材料和工艺参数，为未来太空建造提供技术支持。"
                    },
                    {
                        x: 20,
                        y: 40,
                        title: "晶体生长装置",
                        content: "用于研究晶体在微重力环境中生长过程的装置，可培养高质量、高纯度的蛋白质晶体和半导体晶体，应用于医药研发和电子工业。"
                    },
                    {
                        x: 80,
                        y: 65,
                        title: "流体物理实验装置",
                        content: "研究微重力环境下流体行为的专用设备，可以观察和测量没有重力干扰时液体的表面张力、毛细现象等特性，为空间技术和地面应用提供基础研究数据。"
                    }
                ]
            }
        ]
    },
    
    // 梦天实验舱数据
    // 包含梦天实验舱的基本信息和三个全景场景：总览、货物气闸舱和科研工作区
    mengtian: {
        name: "梦天实验舱", // 舱段名称
        description: "专注于微重力环境下的高端科学实验，配备有舱外机械臂和操作平台。", // 舱段描述
        panoramas: [ // 全景图数组
            {
                id: "mengtian-overview", // 实验舱总览全景图
                name: "实验舱总览",
                image: "images/panoramas/mengtian-overview.jpg",
                description: "梦天实验舱的全景视图，展示了其多功能实验平台和各种科研设备。",
                hotspots: [
                    {
                        x: 30,
                        y: 40,
                        title: "舱外设备控制台",
                        content: "用于控制舱外机械臂和实验平台的操作台，航天员可以通过这里远程操作舱外设备，进行舱外实验和空间站维护工作。"
                    },
                    {
                        x: 70,
                        y: 35,
                        title: "高精度实验区",
                        content: "配备了高精度科学设备的区域，用于开展需要精确控制环境的尖端科学实验，如量子物理、精密光学等领域的研究。"
                    },
                    {
                        x: 50,
                        y: 55,
                        title: "货物转运区",
                        content: "用于空间站物资转运和临时储存的区域，可接收来自货运飞船的补给物资，并进行分类整理后分发到各个舱段。"
                    },
                    {
                        x: 25,
                        y: 65,
                        title: "能源管理系统",
                        content: "负责梦天实验舱能源分配和管理的系统，连接太阳能电池板，储存和分配电能，确保所有实验设备和生命支持系统的正常运行。"
                    }
                ]
            },
            {
                id: "mengtian-airlock", // 货物气闸舱全景图
                name: "货物气闸舱",
                image: "images/panoramas/mengtian-airlock.jpg",
                description: "梦天实验舱的货物气闸舱，用于舱内外物品转移。",
                hotspots: [
                    {
                        x: 40,
                        y: 50,
                        title: "气闸操作面板",
                        content: "控制气闸舱压力和舱门开关的操作面板，确保货物和设备在转移过程中的安全，是舱内外物品交换的关键设备。"
                    },
                    {
                        x: 60,
                        y: 40,
                        title: "货物固定系统",
                        content: "用于固定和转移货物的系统，可安全地将实验设备和材料从舱内转移到舱外或反向操作，支持各类舱外实验和空间站维护。"
                    },
                    {
                        x: 20,
                        y: 65,
                        title: "压力监测系统",
                        content: "实时监测气闸舱内外压力差的系统，确保气闸操作的安全性，防止意外减压事件发生，是航天员安全的重要保障。"
                    },
                    {
                        x: 75,
                        y: 30,
                        title: "舱外实验平台接口",
                        content: "连接舱外实验平台的接口，可以通过此处将实验装置安装到空间站外部，暴露于真空和辐射环境中进行特殊实验研究。"
                    },
                    {
                        x: 50,
                        y: 80,
                        title: "紧急返回通道",
                        content: "在紧急情况下航天员可以通过此通道快速返回核心舱的安全通道，配备应急设备和指示系统，是空间站安全设计的重要组成部分。"
                    }
                ]
            },
            {
                id: "mengtian-research", // 科研工作区全景图
                name: "科研工作区",
                image: "images/panoramas/mengtian-research.jpg",
                description: "梦天实验舱的主要科研工作区，配备了先进的科研设备。",
                hotspots: [
                    {
                        x: 35,
                        y: 45,
                        title: "数据处理中心",
                        content: "用于处理和分析科学实验数据的计算机系统，配备高性能处理器和专业软件，可进行复杂的科学数据处理和模拟分析。"
                    },
                    {
                        x: 65,
                        y: 55,
                        title: "可变重力实验设备",
                        content: "通过离心机模拟不同重力环境的实验设备，可以研究从月球重力到火星重力等不同条件下的物理和生物现象，为未来深空探测提供科学依据。"
                    },
                    {
                        x: 50,
                        y: 30,
                        title: "精密光学平台",
                        content: "用于开展高精度光学实验的平台，配备了激光系统、光谱仪和干涉仪等设备，利用微重力环境的优势开展地面难以实现的精密光学研究。"
                    },
                    {
                        x: 20,
                        y: 60,
                        title: "空间物理实验区",
                        content: "专门研究空间物理现象的区域，配备了粒子探测器、磁场测量仪等设备，可以研究宇宙射线、地球磁场和太阳活动对近地空间环境的影响。"
                    },
                    {
                        x: 80,
                        y: 40,
                        title: "量子实验平台",
                        content: "用于进行前沿量子物理实验的平台，利用空间站的微重力和高真空环境，研究量子纠缠、量子通信等现象，推动量子科技的发展。"
                    }
                ]
            }
        ]
    },
    
    // 神舟飞船数据
    // 包含神舟飞船的基本信息和三个全景场景：总览、返回舱内部和对接机构
    shenzhou: {
        name: "神舟飞船", // 舱段名称
        description: "航天员往返空间站的主要交通工具，具备对接、应急返回等功能。", // 舱段描述
        panoramas: [ // 全景图数组
            {
                id: "shenzhou-overview", // 飞船总览全景图
                name: "神舟飞船总览",
                image: "images/panoramas/shenzhou-overview.jpg",
                description: "神舟载人飞船的内部全景视图，展示了返回舱和轨道舱。",
                hotspots: [
                    {
                        x: 30,
                        y: 40,
                        title: "返回舱",
                        content: "飞船的核心部分，也是航天员返回地球时使用的舱段，配备了生命支持系统、控制系统和减速降落装置，确保航天员安全返回地球。"
                    },
                    {
                        x: 70,
                        y: 35,
                        title: "轨道舱",
                        content: "航天员在轨期间的主要活动区域，也是进行简单科学实验的场所，配备了生活设施和实验设备，可与空间站对接后作为航天员的额外活动空间。"
                    },
                    {
                        x: 50,
                        y: 60,
                        title: "推进舱",
                        content: "飞船的动力系统部分，包含主发动机和姿态控制发动机，负责轨道机动、对接操作和返回地球前的制动，是飞船航行的动力来源。"
                    },
                    {
                        x: 20,
                        y: 50,
                        title: "太阳能电池板",
                        content: "飞船的能源系统，通过将太阳光转化为电能，为飞船各系统提供电力支持，确保长时间在轨飞行的能源需求。"
                    }
                ]
            },
            {
                id: "shenzhou-return", // 返回舱内部全景图
                name: "返回舱内部",
                image: "images/panoramas/shenzhou-return.jpg",
                description: "神舟飞船返回舱的内部视图，展示了航天员座椅和控制面板。",
                hotspots: [
                    {
                        x: 40,
                        y: 50,
                        title: "航天员座椅",
                        content: "专门设计的航天员座椅，可吸收返回地球过程中的冲击和振动，配备了个性化模具和多点安全带，为航天员提供安全舒适的返回环境。"
                    },
                    {
                        x: 60,
                        y: 30,
                        title: "控制面板",
                        content: "飞船的主要控制界面，航天员可以通过此控制飞船的姿态、监测各系统状态，并在必要时进行手动操作，是确保飞行安全的关键设备。"
                    },
                    {
                        x: 25,
                        y: 40,
                        title: "生命支持系统",
                        content: "维持返回舱内合适环境的系统，控制氧气供应、二氧化碳清除、温度和湿度等参数，确保航天员在返回过程中有安全的生存环境。"
                    },
                    {
                        x: 75,
                        y: 60,
                        title: "紧急设备箱",
                        content: "存放各种紧急情况下可能需要的设备和用品，包括医疗急救包、应急通信设备和生存工具，为可能的紧急着陆场景做好准备。"
                    },
                    {
                        x: 50,
                        y: 20,
                        title: "对接状态显示器",
                        content: "显示飞船与空间站对接状态的设备，提供实时对接参数和舱门密封状态信息，帮助航天员监控对接过程的安全性。"
                    }
                ]
            },
            {
                id: "shenzhou-docking", // 对接机构全景图
                name: "对接机构",
                image: "images/panoramas/shenzhou-docking.jpg",
                description: "神舟飞船与空间站对接的机构和通道，航天员通过此进入空间站。",
                hotspots: [
                    {
                        x: 45,
                        y: 40,
                        title: "对接机构",
                        content: "飞船与空间站连接的关键设备，采用国际通用的对接标准，配备多层密封和锁定机构，确保对接过程的安全和可靠。"
                    },
                    {
                        x: 55,
                        y: 60,
                        title: "通道舱",
                        content: "连接飞船和空间站的过渡通道，航天员通过此进入空间站，也是物资转运的通道，设计紧凑而实用，便于航天员和货物通过。"
                    },
                    {
                        x: 30,
                        y: 55,
                        title: "压力平衡系统",
                        content: "在打开舱门前平衡飞船和空间站内部压力的系统，确保航天员在穿越时不会受到压力差的影响，是安全对接的重要保障。"
                    },
                    {
                        x: 70,
                        y: 30,
                        title: "对接监控摄像头",
                        content: "用于监控对接过程的高清摄像系统，为航天员和地面控制中心提供清晰的视觉反馈，辅助手动对接操作和状态监测。"
                    },
                    {
                        x: 50,
                        y: 80,
                        title: "紧急分离系统",
                        content: "在紧急情况下可以快速分离飞船和空间站的系统，配备独立电源和控制线路，确保在各种异常情况下都能执行分离操作，保障航天员安全。"
                    }
                ]
            }
        ]
    },
    tianzhou: {
        name: "天舟货运飞船", // 舱段名称
        description: "天舟货运飞船负责将物资、设备以及补给送往中国空间站，支持航天员的长期工作和生活。", // 舱段描述
        panoramas: [ // 全景图数组
            {
                id: "tianzhou-overview", // 天舟货运飞船总览全景图
                name: "天舟货运飞船总览",
                image: "images/panoramas/tianzhou-overview.jpg",
                description: "天舟货运飞船的内部全景视图，展示了货舱、对接舱和能源系统。",
                hotspots: [
                    {
                        x: 35,
                        y: 45,
                        title: "货舱",
                        content: "货舱用于运输和存储物资，包括食物、设备、实验材料等，确保空间站的正常运行。",
                    },
                    {
                        x: 60,
                        y: 25,
                        title: "对接舱",
                        content: "天舟货运飞船的对接舱与空间站对接，确保物资运输过程中安全可靠。",
                    },
                    {
                        x: 50,
                        y: 60,
                        title: "太阳能电池板",
                        content: "太阳能电池板提供电力支持，通过转化太阳光为电能，确保天舟飞船在轨运行的能源需求。",
                    },
                    {
                        x: 70,
                        y: 40,
                        title: "推进系统",
                        content: "推进系统负责控制飞船的轨道调整和机动，确保顺利对接与离开空间站。",
                    }
                ]
            },
            {
                id: "tianzhou-cargo", // 货舱内部全景图
                name: "货舱内部",
                image: "images/panoramas/tianzhou-cargo.jpg",
                description: "天舟货运飞船货舱的内部视图，展示了货物存放区域与装卸通道。",
                hotspots: [
                    {
                        x: 40,
                        y: 50,
                        title: "物资存储区",
                        content: "这里存放着各种用于补给空间站的物资，包括食品、医疗用品、实验设备等。",
                    },
                    {
                        x: 60,
                        y: 30,
                        title: "装卸通道",
                        content: "装卸通道用于将货物转移到空间站或飞船外部，确保运输过程的顺畅与安全。",
                    },
                    {
                        x: 25,
                        y: 70,
                        title: "货物固定系统",
                        content: "货物固定系统确保在飞行过程中货物的稳定，防止物资在运输过程中出现移位。",
                    },
                    {
                        x: 75,
                        y: 40,
                        title: "紧急设备存储区",
                        content: "存放紧急情况下需要的设备和补给品，包括备用食品、医疗包和应急工具。",
                    }
                ]
            },
            {
                id: "tianzhou-docking", // 对接机构全景图
                name: "对接机构",
                image: "images/panoramas/tianzhou-docking.jpg",
                description: "天舟货运飞船与空间站对接的关键部分，航天员通过此进行物资转运。",
                hotspots: [
                    {
                        x: 50,
                        y: 40,
                        title: "对接机构",
                        content: "飞船与空间站对接的核心设备，采用国际标准，确保对接过程中的安全和密封性。",
                    },
                    {
                        x: 55,
                        y: 60,
                        title: "对接锁定系统",
                        content: "对接锁定系统用于确保飞船和空间站之间的紧密连接，避免任何失联风险。",
                    },
                    {
                        x: 35,
                        y: 55,
                        title: "对接监控摄像头",
                        content: "用于监控对接过程的摄像系统，提供高清影像，辅助航天员和地面指挥中心实时控制。",
                    },
                    {
                        x: 65,
                        y: 20,
                        title: "气密隔离装置",
                        content: "气密隔离装置确保飞船和空间站在对接后内部压力稳定，为航天员提供安全通行环境。",
                    }
                ]
            }
        ]
    }
    
};      


// 数据结构说明：
// 1. tourData是主对象，包含四个子对象，分别对应四个舱段
// 2. 每个舱段对象包含name(名称)、description(描述)和panoramas(全景图数组)
// 3. 每个全景图对象包含id(唯一标识)、name(名称)、image(图片路径)、description(描述)和hotspots(热点数组)
// 4. 每个热点对象包含x/y(位置坐标)、title(标题)和content(详细内容)

// 导出数据以供其他模块使用
// 在实际项目中，可能会使用ES6模块导出
// export default tourData;