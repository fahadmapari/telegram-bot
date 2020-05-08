const config = require('./config');

//telegram bot for arbitrage india group

const Telegraf = require('telegraf');
const axios = require('axios');
const bot = new Telegraf(config.token);

let sentmsgXrpbw = false;
let sentmsgBtcbw = false;
let sentmsgEthbw = false;

let sentmsgXrpwb = false;
let sentmsgBtcwb = false;
let sentmsgEthwb = false;

let sentTimeXrpbw;
let sentTimeEthbw;
let sentTimeBtcbw;

let sentTimeXrpwb;
let sentTimeEthwb;
let sentTimeBtcwb;


bot.start((ctx) => ctx.reply("Hey, I'm KundanBot and I am here to help."));

bot.hears('/admin', async (ctx) => {
    
    if(ctx.chat.type !== "private"){
        let admins = await ctx.getChatAdministrators(ctx.chat.id);
    let adminList = [];
    let message = `If you need any help our admins are ready to help
contact anyone of them from below:
`;
    admins.forEach((admin)=>{
       adminList.push("@" + admin.user.username);
    });
    for(let i = 0; i < adminList.length; i++){
        message = message + " " + adminList[i];
    }
    return ctx.reply(message);
    }else{
        return;
    }

});

bot.hears('/admin@KudanBot', async (ctx) => {
    if(ctx.chat.type !== "private"){
        let admins = await ctx.getChatAdministrators(ctx.chat.id);
    let adminList = [];
    let message = `If you need any help our admins are ready to help
contact anyone of them from below:
`;
    admins.forEach((admin)=>{
       adminList.push("@" + admin.user.username);
    });
    for(let i = 0; i < adminList.length; i++){
        message = message + " " + adminList[i];
    }
    return ctx.reply(message);
    }else{
        return;
    }

});

bot.hears("/btc", async (ctx)=>{
  try{
  let data = await axios.get("https://bitbns.com/order/getTickerWithVolume/");
  data = data.data.BTC;
  
  let wdata = await axios.get("https://api.wazirx.com/api/v2/tickers");
  wdata = wdata.data.btcinr;
  
  let idata = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr");
  idata = idata.data.bitcoin.inr;
  
  let zdata = await axios.get('https://www.zebapi.com/pro/v1/market/btc-inr/ticker');
  zdata = zdata.data;

  let cdata = await axios.get('https://api.coindcx.com/exchange/ticker');
  cdata = cdata.data;
  
  for(let i = 0 ; i < cdata.length ; i++){
    if(cdata[i].market === "BTCINR"){
      cdata = cdata[i];
      break;
    }
  }

  let message = `Bitbns
Last Traded Price: ${data.last_traded_price}
Highest Buy Bid: ${data.highest_buy_bid}
Lowest Sell Bid: ${data.lowest_sell_bid}
-------------------------------
wazirx
Last Traded Price: ${wdata.last}
Highest Buy Bid: ${wdata.buy}
Lowest Sell Bid: ${wdata.sell}
-------------------------------
zebpay
Last Traded Price: ${zdata.market}
Highest Buy Bid: ${zdata.sell}
Lowest Sell Bid: ${zdata.buy}
-------------------------------
coindcx
Last Traded Price: ${Number(cdata.last_price).toFixed(2)}
Highest Buy Bid: ${Number(cdata.bid).toFixed(2)}
Lowest Sell Bid: ${Number(cdata.ask).toFixed(2)}
-------------------------------
international
Price: ${idata}
  `; 

  return ctx.reply(message);
}catch(e){
    console.log(e);
  }
});

bot.hears("/xrp", async (ctx)=>{
  try{
  let data = await axios.get("https://bitbns.com/order/getTickerWithVolume/");
  data = data.data.XRP;
  let wdata = await axios.get("https://api.wazirx.com/api/v2/tickers");
  wdata = wdata.data.xrpinr;

  let idata = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=ripple&vs_currencies=inr");
  idata = idata.data.ripple.inr;

  let zdata = await axios.get('https://www.zebapi.com/pro/v1/market/xrp-inr/ticker');
  zdata = zdata.data;

  let cdata = await axios.get('https://api.coindcx.com/exchange/ticker');
  cdata = cdata.data;

  for(let i = 0 ; i < cdata.length ; i++){
    if(cdata[i].market === "XRPINR"){
      cdata = cdata[i];
      break;
    }
  }
  
  let message = `Bitbns
Last Traded Price: ${data.last_traded_price}
Highest Buy Bid: ${data.highest_buy_bid}
Lowest Sell Bid: ${data.lowest_sell_bid}
-------------------------------
wazirx
Last Traded Price: ${wdata.last}
Highest Buy Bid: ${wdata.buy}
Lowest Sell Bid: ${wdata.sell}
-------------------------------
zebpay
Last Traded Price: ${zdata.market}
Highest Buy Bid: ${zdata.sell}
Lowest Sell Bid: ${zdata.buy}
-------------------------------
coindcx
Last Traded Price: ${Number(cdata.last_price).toFixed(2)}
Highest Buy Bid: ${Number(cdata.bid).toFixed(2)}
Lowest Sell Bid: ${Number(cdata.ask).toFixed(2)}
-------------------------------
international
Price: ${idata}
`; 

  return ctx.reply(message);
}catch(e){
    console.log(e);
  }
});


bot.hears("/usdt", async (ctx)=>{
  try{
    let data = await axios.get("https://bitbns.com/order/getTickerWithVolume/");
  data = data.data.USDT;
  let wdata = await axios.get("https://api.wazirx.com/api/v2/tickers");
  wdata = wdata.data.usdtinr;

  let idata = await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=inr");
  idata = idata.data.tether.inr;

  let zdata = await axios.get('https://www.zebapi.com/pro/v1/market/usdt-inr/ticker');
  zdata = zdata.data;

  let cdata = await axios.get('https://api.coindcx.com/exchange/ticker');
  cdata = cdata.data;
    
  for(let i = 0 ; i < cdata.length ; i++){
    if(cdata[i].market === "USDTINR"){
      cdata = cdata[i];
      break;
    }
  }

  let message = `Bitbns
Last Traded Price: ${data.last_traded_price}
Highest Buy Bid: ${data.highest_buy_bid}
Lowest Sell Bid: ${data.lowest_sell_bid}
-------------------------------
wazirx
Last Traded Price: ${wdata.last}
Highest Buy Bid: ${wdata.buy}
Lowest Sell Bid: ${wdata.sell}
-------------------------------
zebpay
Last Traded Price: ${zdata.market}
Highest Buy Bid: ${zdata.sell}
Lowest Sell Bid: ${zdata.buy}
-------------------------------
coindcx
Last Traded Price: ${Number(cdata.last_price).toFixed(2)}
Highest Buy Bid: ${Number(cdata.bid).toFixed(2)}
Lowest Sell Bid: ${Number(cdata.ask).toFixed(2)}
-------------------------------
international
Price: ${idata}
`; 

  return ctx.reply(message); }catch(e){
    console.log(e);
  }
});

bot.hears("/eth", async (ctx)=>{
  try{
    let data = await axios.get("https://bitbns.com/order/getTickerWithVolume/");
  data = data.data.ETH;
  let wdata = await axios.get("https://api.wazirx.com/api/v2/tickers");
  wdata = wdata.data.ethinr;

  let idata = await await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr");
  idata = idata.data.ethereum.inr;

  let zdata = await axios.get('https://www.zebapi.com/pro/v1/market/eth-inr/ticker');
  zdata = zdata.data;

  let cdata = await axios.get('https://api.coindcx.com/exchange/ticker');
  cdata = cdata.data;
  
  for(let i = 0 ; i < cdata.length ; i++){
    if(cdata[i].market === "ETHINR"){
      cdata = cdata[i];
      break;
    }
  }

  let message = `Bitbns
Last Traded Price: ${data.last_traded_price}
Highest Buy Bid: ${data.highest_buy_bid}
Lowest Sell Bid: ${data.lowest_sell_bid}
------------------------------- 
wazirx
Last Traded Price: ${wdata.last}
Highest Buy Bid: ${wdata.buy}
Lowest Sell Bid: ${wdata.sell}
-------------------------------
zebpay
Last Traded Price: ${zdata.market}
Highest Buy Bid: ${zdata.sell}
Lowest Sell Bid: ${zdata.buy}
-------------------------------
coindcx
Last Traded Price: ${Number(cdata.last_price).toFixed(2)}
Highest Buy Bid: ${Number(cdata.bid).toFixed(2)}
Lowest Sell Bid: ${Number(cdata.ask).toFixed(2)}
-------------------------------
international
Price: ${idata}
`; 

  return ctx.reply(message);
  }catch(e){
    console.log(e);
  }
});



bot.hears("/trx", async (ctx)=>{
  try{
    let data = await axios.get("https://bitbns.com/order/getTickerWithVolume/");
  data = data.data.TRX;
  let wdata = await axios.get("https://api.wazirx.com/api/v2/tickers");
  wdata = wdata.data.trxinr;

  let idata = await await axios.get("https://api.coingecko.com/api/v3/simple/price?ids=tron&vs_currencies=inr");
  idata = idata.data.tron.inr;

  let zdata = await axios.get('https://www.zebapi.com/pro/v1/market/trx-inr/ticker');
  zdata = zdata.data;

  let cdata = await axios.get('https://api.coindcx.com/exchange/ticker');
  cdata = cdata.data;
  
  for(let i = 0 ; i < cdata.length ; i++){
    if(cdata[i].market === "TRXINR"){
      cdata = cdata[i];
      break;
    }
  }

  let message = `Bitbns
Last Traded Price: ${data.last_traded_price}
Highest Buy Bid: ${data.highest_buy_bid}
Lowest Sell Bid: ${data.lowest_sell_bid}
------------------------------- 
wazirx
Last Traded Price: ${wdata.last}
Highest Buy Bid: ${wdata.buy}
Lowest Sell Bid: ${wdata.sell}
-------------------------------
zebpay
Last Traded Price: ${zdata.market}
Highest Buy Bid: ${zdata.sell}
Lowest Sell Bid: ${zdata.buy}
-------------------------------
coindcx
Last Traded Price: ${Number(cdata.last_price).toFixed(2)}
Highest Buy Bid: ${Number(cdata.bid).toFixed(2)}
Lowest Sell Bid: ${Number(cdata.ask).toFixed(2)}
-------------------------------
international
Price: ${idata}
`; 

  return ctx.reply(message);
  }catch(e){
    console.log(e);
  }
});



bot.on('new_chat_members', (ctx) => {
    let members = ctx.message.new_chat_members;
    let name = members[0].first_name; 
    
    return ctx.reply(`Hey, ${name} welcome to Arbitrage India.
Here we share all arbitrage opportunity available across all Indian exchanges
we send daily updates from which you can earn money without risks of trading.

note: If you need any help type "/admin" and you will see list of our admins
`);
});

  

let xrpbw = async ()=>{
  let bitbns = await axios.get("https://bitbns.com/order/getTickerWithVolume/");
  bitbns = bitbns.data.XRP.last_traded_price;
  let wrx = await axios.get("https://api.wazirx.com/api/v2/tickers");
  wrx = wrx.data.xrpinr.last;

  let bitfee = 0.0025;
  let wrxfee = 0.004;

let buyAmount = 10000 - (bitfee * 10000);
let buyXrp = buyAmount / bitbns;
  buyXrp = buyXrp - 0.1; 

  //sent to wrx

  let sellAmount = buyXrp * wrx;
  sellAmount = sellAmount - (wrxfee * sellAmount);
  
  let final = ((sellAmount - 10000) / sellAmount) * 100 ;
  
  if(final >= 0.8){
      if(!sentmsgXrpbw){
          sentmsgXrpbw = true;
          sentTimeXrpbw = new Date().getTime();
          bot.telegram.sendMessage('-1001193005640', `Arbitrage Available Bitbns to Wazirx

Buy: xrp/inr (bitbns)
Sell: xrp/inr (wazirx)
          
initial amount: 10000
amount after trade: ${sellAmount}
Profit: ${final}%
          
invest more to earn more
          
all fees included but please check for yourself before trade 
as fees might change.
          `);
      }else{
          let newTime = new Date().getTime();
          if((newTime - sentTimeXrpbw) >= 600000){
              sentmsgXrpbw = false;
              xrpbw();
          }
      }
  }
}




let btcbw = async ()=>{
  let bitbns = await axios.get("https://bitbns.com/order/getTickerWithVolume/");
  bitbns = bitbns.data.BTC.last_traded_price;
  let wrx = await axios.get("https://api.wazirx.com/api/v2/tickers");
  wrx = wrx.data.btcinr.last;

  let bitfee = 0.0025;
  let wrxfee = 0.004;

let buyAmount = 10000 - (bitfee * 10000);
let buyXrp = buyAmount / bitbns;
  buyXrp = buyXrp - 0.0005; 

  //sent to wrx

  let sellAmount = buyXrp * wrx;
  sellAmount = sellAmount - (wrxfee * sellAmount);
  
  let final = ((sellAmount - 10000) / sellAmount) * 100 ;
  
  if(final >= 0.8){
      if(!sentmsgBtcbw){
          sentmsgBtcbw = true;
          sentTimeBtcbw = new Date().getTime();
           bot.telegram.sendMessage('-1001193005640', `Arbitrage Available Bitbns to Wazirx

Buy: btc/inr (bitbns)
Sell: btc/inr (wazirx)
          
initial amount: 10000
amount after trade: ${sellAmount}
Profit: ${final}%
          
invest more to earn more
          
all fees included but please check for yourself before trade 
as fees might change.
`);
      }else{
          let newTime = new Date().getTime();
          if((newTime - sentTimeBtcbw) >= 600000){
              sentmsgBtcbw = false;
              btcbw();
          }
      }
  }
}



let ethbw = async ()=>{
  let bitbns = await axios.get("https://bitbns.com/order/getTickerWithVolume/");
  bitbns = bitbns.data.ETH.last_traded_price;
  let wrx = await axios.get("https://api.wazirx.com/api/v2/tickers");
  wrx = wrx.data.ethinr.last;

  let bitfee = 0.0025;
  let wrxfee = 0.004;

let buyAmount = 10000 - (bitfee * 10000);
let buyXrp = buyAmount / bitbns;
  buyXrp = buyXrp - 0.0072; 

  //sent to wrx

  let sellAmount = buyXrp * wrx;
  sellAmount = sellAmount - (wrxfee * sellAmount);
  
  let final = ((sellAmount - 10000) / sellAmount) * 100 ;
  
  if(final >= 0.8){
      if(!sentmsgEthbw){
          sentmsgEthbw = true;
          sentTimeEthbw = new Date().getTime();
bot.telegram.sendMessage('-1001193005640', `Arbitrage Available Bitbns to Wazirx

Buy: eth/inr (bitbns)
Sell: eth/inr (wazirx)
          
initial amount: 10000
amount after trade: ${sellAmount}
Profit: ${final}%
          
invest more to earn more
          
all fees included but please check for yourself before trade 
as fees might change.
`);
      }else{
          let newTime = new Date().getTime();
          if((newTime - sentTimeEthbw) >= 600000){
              sentmsgEthbw = false;
              ethbw();
          }
      }
  }
}

// end bitbns to wazirx



let xrpwb = async ()=>{
  let bitbns = await axios.get("https://bitbns.com/order/getTickerWithVolume/");
  bitbns = bitbns.data.XRP.last_traded_price;
  let wrx = await axios.get("https://api.wazirx.com/api/v2/tickers");
  wrx = wrx.data.xrpinr.last;

  let bitfee = 0.0025;
  let wrxfee = 0.004;

let buyAmount = 10000 - (wrxfee * 10000);
let buyXrp = buyAmount / wrx;
  buyXrp = buyXrp - 0.25; 

  //sent to bitbns

  let sellAmount = buyXrp * bitbns;
  sellAmount = sellAmount - (bitfee * sellAmount);
  
  let final = ((sellAmount - 10000) / sellAmount) * 100 ;
  
  if(final >= 1){
      if(!sentmsgXrpwb){
          sentmsgXrpwb = true;
          sentTimeXrpwb = new Date().getTime();
bot.telegram.sendMessage('-1001193005640', `Arbitrage Available Wazirx to Bitbns

Buy: xrp/inr (wazirx)
Sell: xrp/inr (bitbns)
          
initial amount: 10000
amount after trade: ${sellAmount}
Profit: ${final}%
          
invest more to earn more
          
all fees included but please check for yourself before trade 
as fees might change.
`);
      }else{
          let newTime = new Date().getTime();
          if((newTime - sentTimeXrpwb) >= 600000){
              sentmsgXrpwb = false;
              xrpwb();
          }
      }
  }
}



let ethwb = async ()=>{
  let bitbns = await axios.get("https://bitbns.com/order/getTickerWithVolume/");
  bitbns = bitbns.data.ETH.last_traded_price;
  let wrx = await axios.get("https://api.wazirx.com/api/v2/tickers");
  wrx = wrx.data.ethinr.last;

  let bitfee = 0.0025;
  let wrxfee = 0.004;

let buyAmount = 10000 - (wrxfee * 10000);
let buyXrp = buyAmount / wrx;
  buyXrp = buyXrp - 0.01; 

  //sent to bitbns

  let sellAmount = buyXrp * bitbns;
  sellAmount = sellAmount - (bitfee * sellAmount);
  
  let final = ((sellAmount - 10000) / sellAmount) * 100 ;
  
  if(final >= 1){
      if(!sentmsgEthwb){
          sentmsgEthwb = true;
          sentTimeEthwb = new Date().getTime();
bot.telegram.sendMessage('-1001193005640', `Arbitrage Available Wazirx to Bitbns

Buy: eth/inr (wazirx)
Sell: eth/inr (bitbns)
          
initial amount: 10000
amount after trade: ${sellAmount}
Profit: ${final}%
          
invest more to earn more
          
all fees included but please check for yourself before trade 
as fees might change.
`);
      }else{
          let newTime = new Date().getTime();
          if((newTime - sentTimeEthwb) >= 600000){
              sentmsgEthwb = false;
              ethwb();
          }
      }
  }
}


let btcwb = async ()=>{
  let bitbns = await axios.get("https://bitbns.com/order/getTickerWithVolume/");
  bitbns = bitbns.data.BTC.last_traded_price;
  let wrx = await axios.get("https://api.wazirx.com/api/v2/tickers");
  wrx = wrx.data.btcinr.last;

  let bitfee = 0.0025;
  let wrxfee = 0.004;

let buyAmount = 10000 - (wrxfee * 10000);
let buyXrp = buyAmount / wrx;
  buyXrp = buyXrp - 0.0005; 

  //sent to bitbns

  let sellAmount = buyXrp * bitbns;
  sellAmount = sellAmount - (bitfee * sellAmount);
  
  let final = ((sellAmount - 10000) / sellAmount) * 100 ;
  
  if(final >= 1){
      if(!sentmsgBtcwb){
          sentmsgBtcwb = true;
          sentTimeBtcwb = new Date().getTime();
bot.telegram.sendMessage('-1001193005640', `Arbitrage Available Wazirx to Bitbns

Buy: btc/inr (wazirx)
Sell: btc/inr (bitbns)
          
initial amount: 10000
amount after trade: ${sellAmount}
Profit: ${final}%
          
invest more to earn more
          
all fees included but please check for yourself before trade 
as fees might change.
`);
      }else{
          let newTime = new Date().getTime();
          if((newTime - sentTimeBtcwb) >= 600000){
              sentmsgBtcwb = false;
              btcwb();
          }
      }
  }
}



setInterval(async ()=>{
  xrpbw();
  btcbw();
  ethbw();
  //w to b
  xrpwb();
  ethwb();
  btcwb();
},180000);

bot.launch();

