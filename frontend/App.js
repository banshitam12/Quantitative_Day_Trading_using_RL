import React, { useState } from "react";
import "./styles.css";
import TradingChart from "./components/TradingChart";
import ModelControls from "./components/ModelControls";
import PerformanceMetrics from "./components/PerformanceMetrics";

// Mock data for demonstration
const mockTradingData = [
  {
    date: "2025-03-30",
    stockPrice: 0,
    modelDecision: 9304.417186747638,
  },
  {
    date: "2025-03-31",
    stockPrice: 59735.75256067255,
    modelDecision: 40264.24743932745,
  },
  {
    date: "2025-04-01",
    stockPrice: 45483.86623359896,
    modelDecision: 54766.13376640104,
  },
  {
    date: "2025-04-02",
    stockPrice: 86220.79409442988,
    modelDecision: 14279.205905570117,
  },
  {
    date: "2025-04-03",
    stockPrice: 70359.57271053048,
    modelDecision: 30390.427289469517,
  },
  {
    date: "2025-04-04",
    stockPrice: 68146.41564074249,
    modelDecision: 32853.584359257504,
  },
  {
    date: "2025-04-05",
    stockPrice: 78859.99265456945,
    modelDecision: 22390.007345430553,
  },
  {
    date: "2025-04-06",
    stockPrice: 61805.553440547534,
    modelDecision: 39694.446559452466,
  },
  {
    date: "2025-04-07",
    stockPrice: 88102.40333440683,
    modelDecision: 13647.596665593172,
  },
  {
    date: "2025-04-08",
    stockPrice: 10994.787744791553,
    modelDecision: 91005.21225520845,
  },
  {
    date: "2025-04-09",
    stockPrice: 63070.41094704138,
    modelDecision: 39179.58905295862,
  },
  {
    date: "2025-04-10",
    stockPrice: 47209.40333942989,
    modelDecision: 55290.59666057011,
  },
  {
    date: "2025-04-11",
    stockPrice: 9257.47071388307,
    modelDecision: 93492.52928611693,
  },
  {
    date: "2025-04-12",
    stockPrice: 17323.004855803287,
    modelDecision: 85676.99514419671,
  },
  {
    date: "2025-04-13",
    stockPrice: 21667.48583931793,
    modelDecision: 81582.51416068207,
  },
  {
    date: "2025-04-14",
    stockPrice: 45597.873864163754,
    modelDecision: 57902.126135836246,
  },
  {
    date: "2025-04-15",
    stockPrice: 99309.37675525152,
    modelDecision: 4440.623244748485,
  },
  {
    date: "2025-04-16",
    stockPrice: 48971.96957468248,
    modelDecision: 55028.03042531752,
  },
  {
    date: "2025-04-17",
    stockPrice: 63686.33510052333,
    modelDecision: 40563.66489947667,
  },
  {
    date: "2025-04-18",
    stockPrice: 82023.11564552077,
    modelDecision: 22476.884354479236,
  },
  {
    date: "2025-04-19",
    stockPrice: 4653.10414616474,
    modelDecision: 100096.89585383526,
  },
  {
    date: "2025-04-20",
    stockPrice: 48271.86123904962,
    modelDecision: 56728.13876095038,
  },
  {
    date: "2025-04-21",
    stockPrice: 100327.08059138035,
    modelDecision: 4922.919408619648,
  },
  {
    date: "2025-04-22",
    stockPrice: 33182.338132821154,
    modelDecision: 72317.66186717885,
  },
  {
    date: "2025-04-23",
    stockPrice: 13659.375340874554,
    modelDecision: 92090.62465912545,
  },
  {
    date: "2025-04-24",
    stockPrice: 84804.93669969952,
    modelDecision: 21195.06330030048,
  },
  {
    date: "2025-04-25",
    stockPrice: 7118.001183071276,
    modelDecision: 99131.99881692872,
  },
  {
    date: "2025-04-26",
    stockPrice: 84919.96797953406,
    modelDecision: 21580.032020465937,
  },
  {
    date: "2025-04-27",
    stockPrice: 82410.3625010392,
    modelDecision: 24339.6374989608,
  },
  {
    date: "2025-04-28",
    stockPrice: 89883.88071900324,
    modelDecision: 17116.119280996754,
  },
  {
    date: "2025-04-29",
    stockPrice: 50991.67431016088,
    modelDecision: 56258.32568983912,
  },
  {
    date: "2025-04-30",
    stockPrice: 17544.77014979547,
    modelDecision: 89955.22985020453,
  },
  {
    date: "2025-05-01",
    stockPrice: 46960.2721753172,
    modelDecision: 60789.7278246828,
  },
  {
    date: "2025-05-02",
    stockPrice: 86734.17875688002,
    modelDecision: 21265.821243119983,
  },
  {
    date: "2025-05-03",
    stockPrice: 49669.97437220158,
    modelDecision: 58580.02562779842,
  },
  {
    date: "2025-05-04",
    stockPrice: 42212.382109053724,
    modelDecision: 66287.61789094628,
  },
  {
    date: "2025-05-05",
    stockPrice: 38006.88076216295,
    modelDecision: 70743.11923783705,
  },
  {
    date: "2025-05-06",
    stockPrice: 31745.263684195364,
    modelDecision: 77254.73631580464,
  },
  {
    date: "2025-05-07",
    stockPrice: 89214.62005305529,
    modelDecision: 20035.37994694471,
  },
  {
    date: "2025-05-08",
    stockPrice: 14141.904246589038,
    modelDecision: 95358.09575341096,
  },
  {
    date: "2025-05-09",
    stockPrice: 43278.09362814049,
    modelDecision: 66471.90637185951,
  },
  {
    date: "2025-05-10",
    stockPrice: 45631.36499579355,
    modelDecision: 64368.63500420645,
  },
  {
    date: "2025-05-11",
    stockPrice: 46031.02726821403,
    modelDecision: 64218.97273178597,
  },
  {
    date: "2025-05-12",
    stockPrice: 21664.027702984036,
    modelDecision: 88835.97229701596,
  },
  {
    date: "2025-05-13",
    stockPrice: 18999.31647229167,
    modelDecision: 91750.68352770833,
  },
  {
    date: "2025-05-14",
    stockPrice: 59054.70487392665,
    modelDecision: 51945.29512607335,
  },
  {
    date: "2025-05-15",
    stockPrice: 65954.41742702888,
    modelDecision: 45295.582572971114,
  },
  {
    date: "2025-05-16",
    stockPrice: 85212.11614091723,
    modelDecision: 26287.88385908277,
  },
  {
    date: "2025-05-17",
    stockPrice: 22658.12692968991,
    modelDecision: 89091.87307031009,
  },
  {
    date: "2025-05-18",
    stockPrice: 17748.4120549761,
    modelDecision: 94251.5879450239,
  },
  {
    date: "2025-05-19",
    stockPrice: 5361.00783643419,
    modelDecision: 106888.99216356581,
  },
  {
    date: "2025-05-20",
    stockPrice: 31231.95096483102,
    modelDecision: 81268.04903516898,
  },
  {
    date: "2025-05-21",
    stockPrice: 45763.58600499312,
    modelDecision: 66986.41399500688,
  },
  {
    date: "2025-05-22",
    stockPrice: 53511.396691884576,
    modelDecision: 59488.603308115424,
  },
  {
    date: "2025-05-23",
    stockPrice: 58759.69563663318,
    modelDecision: 54490.30436336682,
  },
  {
    date: "2025-05-24",
    stockPrice: 73305.89489126587,
    modelDecision: 40194.10510873413,
  },
  {
    date: "2025-05-25",
    stockPrice: 98661.58716124679,
    modelDecision: 15088.412838753211,
  },
  {
    date: "2025-05-26",
    stockPrice: 6872.503422373411,
    modelDecision: 107127.49657762659,
  },
  {
    date: "2025-05-27",
    stockPrice: 26328.72586207246,
    modelDecision: 87921.27413792754,
  },
  {
    date: "2025-05-28",
    stockPrice: 96108.22531260573,
    modelDecision: 18391.774687394267,
  },
  {
    date: "2025-05-29",
    stockPrice: 59131.040632326316,
    modelDecision: 55618.959367673684,
  },
  {
    date: "2025-05-30",
    stockPrice: 11068.9512423431,
    modelDecision: 103931.0487576569,
  },
  {
    date: "2025-05-31",
    stockPrice: 47758.96634029923,
    modelDecision: 67491.03365970077,
  },
  {
    date: "2025-06-01",
    stockPrice: 58460.44176030382,
    modelDecision: 57039.55823969618,
  },
  {
    date: "2025-06-02",
    stockPrice: 72127.1381011277,
    modelDecision: 43622.8618988723,
  },
  {
    date: "2025-06-03",
    stockPrice: 22845.414875602088,
    modelDecision: 93154.58512439791,
  },
  {
    date: "2025-06-04",
    stockPrice: 3847.1702711996477,
    modelDecision: 112402.82972880035,
  },
  {
    date: "2025-06-05",
    stockPrice: 39845.672083316065,
    modelDecision: 76654.32791668393,
  },
  {
    date: "2025-06-06",
    stockPrice: 37695.57540002778,
    modelDecision: 79054.42459997222,
  },
  {
    date: "2025-06-07",
    stockPrice: 8810.261827906026,
    modelDecision: 108189.73817209397,
  },
  {
    date: "2025-06-08",
    stockPrice: 101089.1165864122,
    modelDecision: 16160.883413587804,
  },
  {
    date: "2025-06-09",
    stockPrice: 112874.62212035875,
    modelDecision: 4625.37787964125,
  },
  {
    date: "2025-06-10",
    stockPrice: 95580.12585792698,
    modelDecision: 22169.874142073022,
  },
  {
    date: "2025-06-11",
    stockPrice: 89629.96468421887,
    modelDecision: 28370.035315781133,
  },
  {
    date: "2025-06-12",
    stockPrice: 86899.70815533654,
    modelDecision: 31350.29184466346,
  },
  {
    date: "2025-06-13",
    stockPrice: 110265.31788454702,
    modelDecision: 8234.682115452977,
  },
  {
    date: "2025-06-14",
    stockPrice: 117570.905610301,
    modelDecision: 1179.094389699013,
  },
  {
    date: "2025-06-15",
    stockPrice: 80131.64989157594,
    modelDecision: 38868.35010842405,
  },
  {
    date: "2025-06-16",
    stockPrice: 37321.07993476775,
    modelDecision: 81928.92006523225,
  },
  {
    date: "2025-06-17",
    stockPrice: 36271.71232394362,
    modelDecision: 83228.28767605638,
  },
  {
    date: "2025-06-18",
    stockPrice: 14559.827914545938,
    modelDecision: 105190.17208545406,
  },
  {
    date: "2025-06-19",
    stockPrice: 85004.62416372132,
    modelDecision: 34995.375836278676,
  },
  {
    date: "2025-06-20",
    stockPrice: 119820.45661852798,
    modelDecision: 429.5433814720172,
  },
  {
    date: "2025-06-21",
    stockPrice: 87369.19387386936,
    modelDecision: 33130.80612613064,
  },
  {
    date: "2025-06-22",
    stockPrice: 98264.27593719377,
    modelDecision: 22485.724062806225,
  },
  {
    date: "2025-06-23",
    stockPrice: 46621.62478279155,
    modelDecision: 74378.37521720845,
  },
  {
    date: "2025-06-24",
    stockPrice: 8920.016143980916,
    modelDecision: 112329.98385601908,
  },
  {
    date: "2025-06-25",
    stockPrice: 26358.114117691133,
    modelDecision: 95141.88588230887,
  },
  {
    date: "2025-06-26",
    stockPrice: 2482.3100301112863,
    modelDecision: 119267.68996988871,
  },
  {
    date: "2025-06-27",
    stockPrice: 93169.56928642145,
    modelDecision: 28830.430713578553,
  },
  {
    date: "2025-06-28",
    stockPrice: 52625.67950231812,
    modelDecision: 69624.32049768188,
  },
  {
    date: "2025-06-29",
    stockPrice: 12181.175965782328,
    modelDecision: 110318.82403421767,
  },
  {
    date: "2025-06-30",
    stockPrice: 30967.40742027077,
    modelDecision: 91782.59257972923,
  },
  {
    date: "2025-07-01",
    stockPrice: 3042.928052465053,
    modelDecision: 119957.07194753495,
  },
  {
    date: "2025-07-02",
    stockPrice: 85744.59885583486,
    modelDecision: 37505.40114416514,
  },
  {
    date: "2025-07-03",
    stockPrice: 107574.11658954149,
    modelDecision: 15925.883410458508,
  },
  {
    date: "2025-07-04",
    stockPrice: 117611.74447427639,
    modelDecision: 6138.255525723613,
  },
  {
    date: "2025-07-05",
    stockPrice: 92999.45643935753,
    modelDecision: 31000.543560642476,
  },
  {
    date: "2025-07-06",
    stockPrice: 37722.81241275712,
    modelDecision: 86527.18758724288,
  },
  {
    date: "2025-07-07",
    stockPrice: 76511.16706100437,
    modelDecision: 47988.832938995634,
  },
  {
    date: "2025-07-08",
    stockPrice: 113915.23498295517,
    modelDecision: 10834.765017044834,
  },
  {
    date: "2025-07-09",
    stockPrice: 113730.99880647194,
    modelDecision: 11269.001193528056,
  },
  {
    date: "2025-07-10",
    stockPrice: 7411.394078094454,
    modelDecision: 117838.60592190555,
  },
  {
    date: "2025-07-11",
    stockPrice: 113424.00304885881,
    modelDecision: 12075.996951141196,
  },
  {
    date: "2025-07-12",
    stockPrice: 99674.92432895662,
    modelDecision: 26075.07567104338,
  },
  {
    date: "2025-07-13",
    stockPrice: 73047.67851730075,
    modelDecision: 52952.321482699255,
  },
  {
    date: "2025-07-14",
    stockPrice: 97996.16764000992,
    modelDecision: 28253.832359990083,
  },
  {
    date: "2025-07-15",
    stockPrice: 15178.296124941335,
    modelDecision: 111321.70387505867,
  },
  {
    date: "2025-07-16",
    stockPrice: 98859.14123063047,
    modelDecision: 27890.858769369526,
  },
  {
    date: "2025-07-17",
    stockPrice: 8493.598269998518,
    modelDecision: 118506.40173000148,
  },
  {
    date: "2025-07-18",
    stockPrice: 78291.28841100042,
    modelDecision: 48958.711588999584,
  },
  {
    date: "2025-07-19",
    stockPrice: 30284.875168797458,
    modelDecision: 97215.12483120254,
  },
  {
    date: "2025-07-20",
    stockPrice: 121537.99933602673,
    modelDecision: 6212.000663973271,
  },
  {
    date: "2025-07-21",
    stockPrice: 94067.78857889588,
    modelDecision: 33932.21142110411,
  },
  {
    date: "2025-07-22",
    stockPrice: 4303.473356257004,
    modelDecision: 123946.526643743,
  },
  {
    date: "2025-07-23",
    stockPrice: 43158.24207237239,
    modelDecision: 85341.75792762761,
  },
  {
    date: "2025-07-24",
    stockPrice: 2873.169191681023,
    modelDecision: 125876.83080831898,
  },
  {
    date: "2025-07-25",
    stockPrice: 48683.775756564515,
    modelDecision: 80316.22424343548,
  },
  {
    date: "2025-07-26",
    stockPrice: 86300.48591902741,
    modelDecision: 42949.51408097258,
  },
  {
    date: "2025-07-27",
    stockPrice: 57847.410730131596,
    modelDecision: 71652.5892698684,
  },
  {
    date: "2025-07-28",
    stockPrice: 63182.54494079828,
    modelDecision: 66567.45505920172,
  },
];

const mockPerformance = {
  sharpeRatio: 1.42,
  totalReturn: 15.7,
  maxDrawdown: 3.2,
  winRate: 68.5,
  profitFactor: 2.3,
  volatility: 12.4,
  aiInsights:
    "Market sentiment analysis suggests increased volatility in the next trading session. Consider adjusting risk parameters.",
};

export default function App() {
  const [tradingData, setTradingData] = useState(mockTradingData);
  const [modelPerformance, setModelPerformance] = useState(mockPerformance);

  const handleModelRun = (params) => {
    console.log("Running model with params:", params);
    // Simulate API call with updated data
    setTimeout(() => {
      // Generate some random new data based on parameters
      const newData = [...mockTradingData];
      newData.forEach((item) => {
        item.stockPrice = item.stockPrice * (1 + (Math.random() * 0.1 - 0.05));
        item.modelDecision =
          item.modelDecision * (1 + (Math.random() * 0.1 - 0.05));
      });

      setTradingData(newData);
      setModelPerformance({
        sharpeRatio: 1.42 + (Math.random() * 0.5 - 0.25),
        totalReturn: 15.7 + (Math.random() * 5 - 2.5),
        maxDrawdown: 3.2 + (Math.random() * 1 - 0.5),
        winRate: 68.5 + (Math.random() * 5 - 2.5),
        profitFactor: 2.3 + (Math.random() * 0.4 - 0.2),
        volatility: 12.4 + (Math.random() * 2 - 1),
        aiInsights:
          "Market sentiment analysis suggests increased volatility in the next trading session. Consider adjusting risk parameters.",
      });
    }, 1000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>PROFIT Trading Interface</h1>
        <p>
          Quantitative Day Trading from Natural Language using Reinforcement
          Learning
        </p>
      </header>
      <main>
        <div className="content-wrapper">
          <TradingChart data={tradingData} />
          <div className="sidebar">
            {/* <ModelControls onRun={handleModelRun} /> */}
            <PerformanceMetrics metrics={modelPerformance} />
          </div>
        </div>
      </main>
    </div>
  );
}
