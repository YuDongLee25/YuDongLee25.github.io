(function () {
  const legacyRoutes = {
    "/research/": "/#research",
    "/publications/": "/#publications",
    "/projects/": "/#research",
    "/projects/semantic-object-exploration/": "/#semantic-exploration",
    "/projects/gnn-diffusion-motion-planning/": "/#gnn-diffusion",
    "/projects/ppo-biped-locomotion/": "/#ppo-biped",
    "/projects/biped-mpc/": "/#biped-mpc",
    "/projects/gimbal-control/": "/#research",
    "/cv/": "/#cv",
    "/contact/": "/#contact"
  };

  const redirect = legacyRoutes[window.location.pathname];
  if (redirect) {
    window.location.replace(redirect);
    return;
  }

  const zhTranslations = {
    ".skip-link": "跳转到主要内容",
    ".site-name": "李煜东",
    "#profile-name": "李煜东",
    ".site-nav a[href='#about']": "个人简介",
    ".site-nav a[href='#publications']": "论文",
    ".site-nav a[href='#research']": "研究",
    ".site-nav a[href='#experience']": "实习",
    ".site-nav a[href='#education']": "教育",
    ".site-nav a[data-cv-link]": "简历",
    ".position": "<strong>智能制造与机器人专业硕士研究生</strong><br>机械与能源工程系<br>南方科技大学",
    ".profile-copy > p:nth-of-type(2)": "现为南方科技大学机械与能源工程系智能制造与机器人专业硕士研究生，本科毕业于华南农业大学自动化专业。研究聚焦机器人轨迹规划、运动控制与具身智能，相关工作涵盖腿足机器人语义目标探索、跨构型机械臂生成式轨迹规划，以及基于强化学习和模型预测控制的双足机器人运动控制。具备算法设计与实现、仿真验证、系统集成及实机调试经验。",
    ".profile-links a[href^='mailto:']": "邮箱",
    ".profile-links a[data-cv-link]": "简历",
    "#interests-title": "研究兴趣",
    "#interests > p": "研究兴趣包括机器人轨迹规划与运动控制、机器人学习、具身导航与具身操作，以及嵌入式机器人系统；具备较丰富的机器人仿真、系统集成与实机调试经验。",
    "#expertise-title": "核心技术能力",
    ".expertise-item:nth-child(1) h4": "规划与控制",
    ".expertise-item:nth-child(1) p": "轨迹表示、插值与生成，GNN 与 Diffusion Model，MPPI-MPC、MPC-QP、PPO、机器人运动学与动力学、PID 控制及系统辨识。",
    ".expertise-item:nth-child(2) h4": "感知与自主系统",
    ".expertise-item:nth-child(2) p": "RGB-D、LiDAR、ToF、点云处理、语义分割、语义地图构建、置信度校准、目标检测、目标跟踪与运动预测，以及 GroundingDINO、SAM、YOLO 和 AnyGrasp。",
    ".expertise-item:nth-child(3) h4": "仿真与部署",
    ".expertise-item:nth-child(3) p": "主要使用 ROS/ROS2、NVIDIA Isaac Sim、Isaac Gym、MuJoCo 和 Webots，开展机械臂、双足和四足机器人的仿真与实机验证。",
    ".expertise-item:nth-child(4) h4": "嵌入式系统",
    ".expertise-item:nth-child(4) p": "C/C++、Python、Linux、STM32、FreeRTOS、CAN、UART、SPI、USB、IMU 与编码器集成、Kalman 滤波及串级 PID 控制。",
    "#publications-title": "论文与专利",
    "#pub-iros .venue": "<em>IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)</em>，2026，已录用。*共同一作。",
    "#pub-ral-execution .venue": "<em>IEEE Robotics and Automation Letters (RA-L)</em>，2026，已录用。",
    ".publication-item .item-links a[href*='arxiv.org']": "论文<span class='sr-only'>（在新标签页打开）</span>",
    ".publication-item .item-links a[href='#semantic-exploration']": "项目",
    "[data-bibtex]": "复制 BibTeX",
    "#pub-gimbal .item-links a": "DOI<span class='sr-only'>（在新标签页打开）</span>",
    "#patent-platform .venue": "实用新型专利。",
    "#research-title": "代表性研究项目",
    "#semantic-exploration h3": "面向腿足机器人的语义目标探索",
    "#semantic-exploration .research-summary": "该研究面向开放环境下的腿足机器人，探讨如何依据自然语言指令与不确定的语义观测完成目标选择和路径规划。系统集成置信度校准的语义感知、受控增长的语义拓扑记忆、基于效用的子目标选择、局部规划及强化学习运动控制。以共同第一作者身份参与语义感知、拓扑记忆与规划模块的设计和集成，并在 NVIDIA Isaac Sim 与 Unitree Go1 实机平台上完成闭环验证。",
    "#semantic-exploration .item-links a": "论文<span class='sr-only'>（在新标签页打开）</span>",
    "#gnn-diffusion h3": "基于本体模态（Embodiment Modality）条件的跨构型机械臂动作生成模型",
    "#gnn-diffusion .research-summary": "面向不同机械臂因自由度、运动学拓扑与物理参数差异导致动作经验难以跨平台迁移的问题，将机器人“自身是什么”从固定的平台先验提升为可学习的本体模态（Embodiment Modality），将跨构型动作生成建模为 <em>Embodiment × Task → Action</em> 的多模态条件生成问题。基于 URDF 构建关节—连杆图，通过 Edge-conditioned GIN Encoder 编码机器人拓扑、关节属性及物理参数，获得统一的本体模态表征；以 Temporal U-Net Diffusion Model 作为动作生成器，通过 AdaLN 与 Cross-Attention 联合融合本体模态和目标位姿条件，并在 B-spline 控制点空间生成连续关节轨迹，从多种机械臂数据中学习共享的 motion prior。针对真实执行中的残余误差与目标变化，进一步引入 MPPI-MPC 进行终端在线滚动恢复。在 NVIDIA Isaac Sim 五种机械臂上进行未见构型 zero-shot 动作生成验证，平均成功率达到 74.3%；经目标平台数据适配后，在 KD7/A10 实机实现 91.7%/96.7% 的静态位姿到达成功率及 86.7%/95.0% 的扰动恢复成功率。",
    "#ppo-biped h3": "基于 PPO 的双足运动控制与 Sim-to-Real 评估",
    "#ppo-biped .research-summary": "基于 Isaac Gym 和 PPO 训练点足双足机器人的运动策略。课程学习用于逐步提升指令与地形难度，动力学随机化涵盖质量、摩擦、阻尼和观测扰动。主要工作包括训练流程、奖励函数与课程学习模块的实现、MuJoCo Sim-to-Sim 验证，以及 TRON2 实机部署与调试。",
    "#biped-mpc h3": "双足行走的质心动力学 MPC",
    "#biped-mpc .research-summary": "本科毕业设计采用简化质心动力学模型实现双足行走控制。接触力与力矩优化表述为带约束的 MPC-QP，并纳入摩擦和法向力限制，随后与摆动腿笛卡尔空间 PD 控制相结合。完成优化与控制流程的实现，并在 MATLAB/Simulink 和 MuJoCo 中开展行走测试。",
    "#gimbal-project h3": "三轴自稳云台",
    "#gimbal-project .research-meta": "2022 年 5 月–2023 年 11 月",
    "#gimbal-project .role": "嵌入式系统负责人",
    "#gimbal-project .research-summary": "基于 STM32 和 FreeRTOS 开发三轴自稳云台样机，主要承担 IMU 状态估计、Kalman 滤波、系统辨识、串级 PID 控制及样机闭环测试。",
    "#robomaster-project h3": "RoboMaster 嵌入式控制与系统集成",
    "#robomaster-project .research-meta": "2021 年 8 月–2022 年 8 月",
    "#robomaster-project .role": "嵌入式软件负责人",
    "#robomaster-project .research-summary": "承担 RoboMaster 哨兵和步兵机器人的嵌入式控制开发，具体包括云台与底盘控制、功率管理、CAN/UART/SPI 通信、裁判系统解析、故障检测及整机联调。",
    "#experience-title": "实习经历",
    "#pudu-internship .timeline-date": "2026 年 8 月–至今",
    "#pudu-internship h3": "普渡机器人（PUDU Robotics）",
    "#pudu-internship .role": "感知运动强化学习算法实习生 · 深圳",
    "#pudu-internship .experience-points li:nth-child(1)": "基于 NVIDIA Isaac Gym 完成 D5-W 四轮足机器人的强化学习训练环境、机器人模型与控制接口适配，用于 PPO 感知运动策略训练。",
    "#pudu-internship .experience-points li:nth-child(2)": "基于 Extreme Parkour 跑通 Teacher–Student 特权学习流程：利用特权地形信息训练 Teacher，并将策略蒸馏到以深度视觉和本体感知为输入的 Student。",
    "#pudu-internship .experience-points li:nth-child(3)": "完成 PIE 感知运动框架在 D5-W 上的复现、训练和部署，通过 Depth + Proprioception 融合实现复杂地形运动。",
    "#pudu-internship .experience-points li:nth-child(4)": "完成 Isaac Gym 到 MuJoCo 的 Sim-to-Sim 评估及 D5-W 真机 Sim-to-Real 部署，围绕接触动力学、执行器特性、控制时延、传感器噪声和模型偏差进行系统调试；后续探索 PUMA、DreamWaQ++ 及真实场景采集与重建，以进一步缩小 Sim-to-Real Gap。",
    ".timeline-item:nth-child(2) h3": "香港科技大学（广州）",
    ".timeline-item:nth-child(2) .role": "科研实习生",
    ".timeline-item:nth-child(2) .role + p": "参与腿足机器人语义目标探索与具身导航研究，主要承担置信度感知的语义决策、拓扑表示和局部规划，并在 Isaac Sim 与 Unitree Go1 平台上开展闭环验证。相关论文已被 IROS 2026 录用，共同一作。",
    ".timeline-item:nth-child(3) h3": "智元机器人（AgiBot）",
    ".timeline-item:nth-child(3) .role": "感知与规划算法实习生",
    ".timeline-item:nth-child(3) .role + p": "参与四足机器人的多传感器感知与规划开发，包括点云处理、目标检测、语义分割、目标跟踪与预测、语义导航，以及 Isaac Sim 仿真和实机测试。",
    ".timeline-item:nth-child(4) h3": "DJI 大疆创新",
    ".timeline-item:nth-child(4) .role": "电源控制算法实习生",
    ".timeline-item:nth-child(4) .role + p": "参与 24 V/40 A 双向超级电容数字电源开发，包括 ADC 采样与滤波、Buck-Boost 双闭环控制、PWM 调节、保护逻辑及整板联合调试。",
    "#education-title": "教育背景",
    ".education-item:nth-child(1) h3": "南方科技大学",
    ".education-item:nth-child(1) p": "智能制造与机器人专业 · 硕士研究生<br>机械与能源工程系",
    ".education-item:nth-child(2) h3": "华南农业大学",
    ".education-item:nth-child(2) p": "自动化专业 · 工学学士<br>专业排名：4/107",
    "#cv-title": "个人简历",
    ".cv-note p": "本科专业排名：4/107。",
    ".cv-download": "查看感知规划控制方向中文简历（PDF）<span class='sr-only'>（在新标签页打开）</span>",
    "#awards-title": "代表性奖项",
    ".awards-list li:nth-child(1)": "<span>2023</span>第八届国际大学生智能农业装备创新大赛全国一等奖",
    ".awards-list li:nth-child(2)": "<span>2023</span>中国机器人及人工智能大赛广东省区域赛三等奖",
    ".awards-list li:nth-child(3)": "<span>2022</span>广东省工科大学生实验综合技能竞赛省级一等奖",
    ".awards-list li:nth-child(4)": "<span>2022</span>RoboMaster 2022 超级对抗赛全国一等奖",
    ".awards-list li:nth-child(5)": "<span>2022</span>RoboMaster 2022 哨兵机器人组实战奖全国一等奖",
    ".awards-list li:nth-child(6)": "<span>2022</span>RoboMaster 2022 机甲大师超级对抗赛南部分区赛一等奖",
    ".awards-list li:nth-child(7)": "<span>2022–2023</span>华南农业大学二等奖学金",
    ".awards-list li:nth-child(8)": "<span>2020–2022</span>华南农业大学三等奖学金（两个学年）",
    ".footer-inner p:first-child": "<strong>李煜东</strong><br>中国 · 深圳"
  };

  const englishContent = new Map();
  Object.keys(zhTranslations).forEach((selector) => {
    const element = document.querySelector(selector);
    if (element) englishContent.set(selector, element.innerHTML);
  });

  const languageToggle = document.querySelector("[data-language-toggle]");
  let currentLanguage = "en";

  function applyLanguage(language) {
    currentLanguage = language === "zh" ? "zh" : "en";
    document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";
    document.title = currentLanguage === "zh" ? "李煜东｜机器人研究" : "Yudong Li | Robotics Research";
    document.querySelector("meta[name='description']")?.setAttribute("content", currentLanguage === "zh"
      ? "李煜东的学术主页：机器人轨迹规划、运动控制、具身导航、机器人学习、机器人仿真与实机系统。"
      : "Yudong Li is a master's student at SUSTech working on robot learning, motion planning, embodied navigation, and closed-loop control.");

    Object.entries(zhTranslations).forEach(([selector, chinese]) => {
      const element = document.querySelector(selector);
      if (!element) return;
      element.innerHTML = currentLanguage === "zh" ? chinese : englishContent.get(selector);
    });

    document.querySelectorAll("[data-lang-en][data-lang-zh]").forEach((element) => {
      element.textContent = currentLanguage === "zh" ? element.dataset.langZh : element.dataset.langEn;
    });

    document.querySelectorAll("[data-cv-link]").forEach((link) => {
      link.setAttribute("href", currentLanguage === "zh"
        ? "/assets/Yudong-Li-CV-ZH.pdf"
        : "/assets/Yudong-Li-Academic-CV.pdf");
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });

    if (languageToggle) {
      languageToggle.textContent = currentLanguage === "zh" ? "English" : "中文";
      languageToggle.setAttribute("aria-label", currentLanguage === "zh" ? "Switch to English" : "切换为中文");
      languageToggle.setAttribute("aria-pressed", String(currentLanguage === "zh"));
    }

    try { window.localStorage.setItem("preferred-language", currentLanguage); } catch {}
  }

  if (languageToggle) {
    languageToggle.addEventListener("click", () => applyLanguage(currentLanguage === "en" ? "zh" : "en"));
  }

  let savedLanguage = "en";
  try { savedLanguage = window.localStorage.getItem("preferred-language") || "en"; } catch {}
  applyLanguage(savedLanguage);

  const button = document.querySelector("[data-bibtex]");
  const bibtex = document.querySelector("#bibtex");
  if (button && bibtex) {
    button.addEventListener("click", () => {
      bibtex.hidden = false;
      button.textContent = "BibTeX shown below";
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(bibtex.textContent.trim())
        .then(() => { button.textContent = "BibTeX copied"; })
        .catch(() => {});
    });
  }

  function enableProjectMedia() {

  const mediaGroups = {
    "iros-framework": {
      layout: "feature",
      items: [
        {
          type: "image",
          title: "System framework",
          caption: "Decision-driven semantic object exploration: calibrated perception, semantic topological memory, utility-based subgoal selection, and closed-loop execution.",
          src: "/assets/media/figures/iros-framework.png",
          alt: "Framework diagram for semantic object exploration, from perception and topology construction to subgoal selection and motion control"
        }
      ]
    },
    iros: {
      layout: "single",
      items: [
      {
        type: "video",
        title: "IROS semantic object exploration",
        caption: "Semantic object exploration and closed-loop legged-robot deployment.",
        src: "/assets/media/iros-semantic-exploration.mp4",
        poster: "/assets/media/posters/iros-semantic-exploration.jpg"
      }
      ]
    },
    "gnn-framework": {
      layout: "feature",
      items: [
        {
          type: "image",
          title: "Program framework",
          caption: "Structure-aware GNN conditioning, Diffusion Model-based trajectory generation, differentiable objectives, and receding-horizon MPPI-MPC terminal-error recovery.",
          src: "/assets/media/figures/gnn-framework.png",
          alt: "Framework diagram for cross-configuration manipulator trajectory planning with a GNN-conditioned Diffusion Model and receding-horizon MPPI-MPC terminal-error recovery"
        }
      ]
    },
    gnn: {
      layout: "grid",
      items: [
      {
        type: "video",
        title: "A10 static grasp-pose execution",
        caption: "Static grasp-pose reaching sequence on A10.",
        src: "/assets/media/gnn-a10-static.mp4"
      },
      {
        type: "video",
        title: "A10 dynamic target tracking",
        caption: "Dynamic target-tracking and terminal-recovery sequence on A10.",
        src: "/assets/media/gnn-a10-dynamic.mp4"
      },
      {
        type: "video",
        title: "KD7 dynamic target tracking",
        caption: "KD7 terminal recovery under a moving target.",
        src: "/assets/media/gnn-kd7-dynamic.mp4",
        poster: "/assets/media/posters/gnn-kd7-dynamic.jpg"
      },
      {
        type: "video",
        title: "KD7 static pose reaching",
        caption: "KD7 static grasp-pose reaching and terminal-alignment demonstration.",
        src: "/assets/media/gnn-kd7-static.mp4",
        poster: "/assets/media/posters/gnn-kd7-static.jpg"
      }
      ]
    },
    ppo: {
      layout: "compact",
      items: [
        {
          type: "image",
          title: "Training diagnostics",
          caption: "Representative velocity, force, joint-state, and tracking traces.",
          src: "/assets/media/ppo/training-diagnostics.png",
          alt: "PPO biped locomotion diagnostic plots showing base velocities, joint states, forces, and tracking signals"
        },
        {
          type: "video",
          title: "PPO Sim-to-Sim evaluation",
          caption: "Sim-to-Sim locomotion evaluation in MuJoCo after training in Isaac Gym.",
          src: "/assets/media/ppo/simulation.mp4"
        },
        {
          type: "video",
          title: "PPO Sim-to-Real deployment",
          caption: "Sim-to-Real locomotion deployment on the TRON2 biped.",
          src: "/assets/media/ppo/robot-evaluation.mp4"
        }
      ]
    },
    "mpc-framework": {
      layout: "feature",
      items: [
        {
          type: "image",
          title: "Control architecture",
          caption: "MPC and swing-leg control pipeline.",
          src: "/assets/media/mpc/control-architecture.jpg",
          alt: "Block diagram of the biped MPC control architecture with target state, dynamics, torque mapping, and swing-leg PD control"
        }
      ]
    },
    mpc: {
      layout: "grid",
      items: [
        {
          type: "video",
          title: "MPC walking demonstration I",
          caption: "Biped walking evaluation from the undergraduate thesis project.",
          src: "/assets/media/mpc/walking-demo-1.mp4"
        },
        {
          type: "video",
          title: "MPC walking demonstration II",
          caption: "Additional biped walking evaluation.",
          src: "/assets/media/mpc/walking-demo-2.mp4"
        },
        ...[1, 2, 3, 4].map((index) => ({
          type: "image",
          title: `Walking result ${index}`,
          caption: index <= 2
            ? "Forward-velocity tracking at 0.5 m/s."
            : "Forward-velocity tracking at 0.8 m/s.",
          src: `/assets/media/mpc/walking-result-${index}.jpg`,
          alt: `Biped MPC ${index <= 2 ? "0.5" : "0.8"} m/s forward-velocity tracking result plot ${index}`
        }))
      ]
    },
    gimbal: {
      layout: "grid",
      items: [
        {
          type: "image",
          title: "Prototype structure",
          caption: "Three-axis gimbal prototype structure.",
          src: "/assets/media/gimbal/mechanical-design.png",
          alt: "Three-axis gimbal prototype structure"
        },
        {
          type: "video",
          title: "Three-axis shock-absorption test",
          caption: "Three-axis gimbal shock-absorption test.",
          src: "/assets/media/gimbal/prototype-demo.mp4"
        }
      ]
    },
    robomaster: {
      layout: "grid",
      items: [
        {
          type: "image",
          title: "Competition robot platform",
          caption: "RoboMaster robot.",
          src: "/assets/media/robomaster/robot-platform.jpg",
          alt: "RoboMaster robot platform on a competition field"
        },
        ...[1, 2, 3].map((index) => ({
          type: "video",
          title: `RoboMaster demonstration ${index}`,
          caption: "RoboMaster competition and system-integration demonstration.",
          src: `/assets/media/robomaster/demo-${index}.mp4`
        }))
      ]
    },
    zhiyuan: {
      layout: "grid",
      items: [
        {
          type: "image",
          title: "Quadruped platform",
          caption: "Quadruped robot platform used during the internship.",
          src: "/assets/media/zhiyuan/platform-photo.png",
          alt: "Quadruped robot platform in an office test environment"
        },
        {
          type: "video",
          title: "Internship demonstration",
          caption: "Perception and planning experiment during the internship.",
          src: "/assets/media/zhiyuan/internship-demo.mp4"
        }
      ]
    }
  };

  const mediaChinese = {
    "System framework": "系统框架",
    "Decision-driven semantic object exploration: calibrated perception, semantic topological memory, utility-based subgoal selection, and closed-loop execution.": "决策驱动的语义目标探索框架：置信度校准感知、语义拓扑记忆、效用子目标选择与闭环执行。",
    "IROS semantic object exploration": "IROS 语义目标探索",
    "Semantic object exploration and closed-loop legged-robot deployment.": "语义目标探索与腿足机器人闭环验证。",
    "Program framework": "方法框架",
    "Structure-aware GNN conditioning, Diffusion Model-based trajectory generation, differentiable objectives, and receding-horizon MPPI-MPC terminal-error recovery.": "结构感知 GNN 条件编码、基于 Diffusion Model 的轨迹生成、可微目标与 MPPI-MPC 末端误差滚动恢复。",
    "A10 static grasp-pose execution": "A10 静态抓取位姿到达",
    "Static grasp-pose reaching sequence on A10.": "A10 静态目标位姿到达测试。",
    "A10 dynamic target tracking": "A10 动态目标跟踪",
    "Dynamic target-tracking and terminal-recovery sequence on A10.": "A10 动态目标跟踪与末端误差恢复测试。",
    "KD7 dynamic target tracking": "KD7 动态目标跟踪",
    "KD7 terminal recovery under a moving target.": "KD7 动态目标跟踪与末端误差恢复测试。",
    "KD7 static pose reaching": "KD7 静态位姿到达",
    "KD7 static grasp-pose reaching and terminal-alignment demonstration.": "KD7 静态目标位姿到达测试。",
    "Training diagnostics": "训练诊断曲线",
    "Representative velocity, force, joint-state, and tracking traces.": "速度、力、关节状态与跟踪曲线示例。",
    "PPO Sim-to-Sim evaluation": "PPO 运动控制演示一（Sim-to-Sim）",
    "Sim-to-Sim locomotion evaluation in MuJoCo after training in Isaac Gym.": "在 Isaac Gym 中完成训练，并在 MuJoCo 中进行 Sim-to-Sim 测试。",
    "PPO Sim-to-Real deployment": "PPO 运动控制演示二（Sim-to-Real）",
    "Sim-to-Real locomotion deployment on the TRON2 biped.": "TRON2 双足机器人 Sim-to-Real 实机测试。",
    "Control architecture": "控制架构",
    "MPC and swing-leg control pipeline.": "MPC 与摆动腿控制流程。",
    "MPC walking demonstration I": "MPC 行走演示一",
    "Biped walking evaluation from the undergraduate thesis project.": "本科毕业设计中的双足行走评估。",
    "MPC walking demonstration II": "MPC 行走演示二",
    "Additional biped walking evaluation.": "另一段双足行走评估。",
    "Forward-velocity tracking at 0.5 m/s.": "0.5 m/s 前向速度跟踪结果。",
    "Forward-velocity tracking at 0.8 m/s.": "0.8 m/s 前向速度跟踪结果。",
    "Prototype structure": "原型结构",
    "Three-axis gimbal prototype structure.": "三轴云台原型结构。",
    "Three-axis shock-absorption test": "三轴缓震测试",
    "Three-axis gimbal shock-absorption test.": "三轴云台缓震测试。",
    "Competition robot platform": "竞赛机器人平台",
    "RoboMaster robot.": "RoboMaster 机器人。",
    "RoboMaster competition and system-integration demonstration.": "RoboMaster 比赛与整机联调演示。",
    "Quadruped platform": "四足机器人平台",
    "Quadruped robot platform used during the internship.": "实习期间使用的四足机器人平台。",
    "Internship demonstration": "实习项目演示",
    "Perception and planning experiment during the internship.": "实习期间的感知与规划测试。"
  };

  function mediaTranslation(text) {
    if (mediaChinese[text]) return mediaChinese[text];
    const walkingResult = /^Walking result (\d+)$/.exec(text);
    if (walkingResult) return `行走结果 ${walkingResult[1]}`;
    const roboMasterDemo = /^RoboMaster demonstration (\d+)$/.exec(text);
    if (roboMasterDemo) return `RoboMaster 演示 ${roboMasterDemo[1]}`;
    return text;
  }

  function escapeAttribute(value) {
    return String(value).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  document.querySelectorAll("[data-preview-media]").forEach((slot) => {
    const group = mediaGroups[slot.dataset.previewMedia];
    if (!group) return;
    slot.innerHTML = `<div class="media-gallery media-gallery-${group.layout}">
      ${group.items.map((item) => `<figure class="media-item media-item-${item.type}">
        ${item.type === "image"
          ? `<img src="${item.src}" alt="${item.alt}" loading="lazy">`
          : `<video controls controlslist="nodownload nofullscreen noremoteplayback" muted loop preload="none" playsinline disablepictureinpicture disableremoteplayback draggable="false" ${item.poster ? `poster="${item.poster}"` : ""} aria-label="${item.title}">
              <source src="${item.src}" type="video/mp4">
              Your browser does not support embedded video.
            </video>`}
        <figcaption><strong data-lang-en="${escapeAttribute(item.title)}" data-lang-zh="${escapeAttribute(mediaTranslation(item.title))}">${currentLanguage === "zh" ? mediaTranslation(item.title) : item.title}</strong><span data-lang-en="${escapeAttribute(item.caption)}" data-lang-zh="${escapeAttribute(mediaTranslation(item.caption))}">${currentLanguage === "zh" ? mediaTranslation(item.caption) : item.caption}</span></figcaption>
      </figure>`).join("")}
    </div>`;
    slot.querySelectorAll("video").forEach((video) => {
      video.muted = true;
      video.controlsList?.add("nodownload", "nofullscreen", "noremoteplayback");
      video.disablePictureInPicture = true;
      video.disableRemotePlayback = true;
      video.addEventListener("contextmenu", (event) => event.preventDefault());
      video.addEventListener("dragstart", (event) => event.preventDefault());
      video.addEventListener("dblclick", (event) => event.preventDefault());
    });
  });

  const videos = [...document.querySelectorAll(".media-item video")];
  const videoObserver = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          video.dataset.inView = String(entry.isIntersecting && entry.intersectionRatio >= 0.2);
          if (video.dataset.inView === "true" && !document.hidden) {
            if (!video.dataset.loaded) {
              video.preload = "auto";
              video.load();
              video.dataset.loaded = "true";
            }
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      }, { rootMargin: "180px 0px", threshold: [0, 0.2, 0.6] })
    : null;

  videos.forEach((video) => {
    if (videoObserver) videoObserver.observe(video);
    else {
      video.preload = "metadata";
      video.load();
    }
  });

  document.addEventListener("visibilitychange", () => {
    videos.forEach((video) => {
      if (document.hidden || video.dataset.inView !== "true") video.pause();
      else video.play().catch(() => {});
    });
  });

  applyLanguage(currentLanguage);
  }

  enableProjectMedia();
})();


