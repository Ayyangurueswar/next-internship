import { API_URL } from "@/config/index";

export async function getItems(){
    const items = await fetch(`${API_URL}/api/data`, {
      method: 'GET',
    });
    const data = await items.json();
    return data;
  }
  
export async function getRelatedDeals(){
    const extraData = await fetch(`${API_URL}/api/relateDeals`, {
      method: 'GET',
    });
    const relatedData = await extraData.json();
    return relatedData;
  }

  export async function getPlans(){
    const res = await fetch(`${API_URL}/api/plans`);
    const plans = await res.json();
    return plans;
  }