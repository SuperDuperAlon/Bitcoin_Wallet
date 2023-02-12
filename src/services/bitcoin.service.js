"use strict";

import axios from "axios";
import { storageService } from "./storage.service.js";

const RATES_DB = "rates_db";
const MARKET_PRICE_DB = "market_price_db";
const AVG_BLOCK_SIZE_DB = "avg_block_size_db";

export const bitcoinService = {
  getRate,
  getMarketPriceHistory,
  getAvgBlockSize,
};
async function loadRates() {
  const res = await axios({
    method: "get",
    url: "https://blockchain.info/ticker",
    params: {},
  });
  return storageService.saveToStorage(RATES_DB, res.data);
}

function getRate() {
  let rates = storageService.loadFromStorage(RATES_DB);
  if (!rates) rates = loadRates();
  return rates;
}

async function loadMarketPriceHistory() {
  const res = await axios({
    method: "get",
    url: "https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true",
    params: {},
  });
  return storageService.saveToStorage(MARKET_PRICE_DB, res.data);
}

async function loadBlockSize() {
  const res = await axios({
    method: "get",
    url: "https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true",
    params: {},
  });
  return storageService.saveToStorage(AVG_BLOCK_SIZE_DB, res.data);
}

async function getMarketPriceHistory() {
  let marketPrice = storageService.loadFromStorage(MARKET_PRICE_DB);
  if (!marketPrice) marketPrice = loadMarketPriceHistory();
  console.log(marketPrice);
  return marketPrice;
}

async function getAvgBlockSize() {
  let avgBlockSize = storageService.loadFromStorage(AVG_BLOCK_SIZE_DB);
  if (!avgBlockSize) avgBlockSize = loadBlockSize();
  return avgBlockSize;
}
