'use client';

import React from 'react';
import { ResponsiveContainer, AreaChart, Area } from 'recharts';
import { motion } from 'framer-motion';

const StatWidget = ({ title, value, change, sparklineData, icon: Icon, unit = '' }) => {
  const isPositive = change && change.startsWith('▼'); // Assuming ▼ is for decrease (positive change) and ▲ for increase (negative change)

  return (
    <motion.div 
      className="hud-bg hud-border p-4 rounded-lg flex flex-col justify-between"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-start">
        <span className="font-mono text-sm text-brand-gray">{title}</span>
        {Icon && <Icon className="w-5 h-5 text-brand-gray" />}
      </div>
      <div className="my-2">
        <p className="text-3xl font-bold text-brand-light-gray">{value}<span className="text-xl">{unit}</span></p>
        {change && (
            <p className={`text-sm font-mono ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                {change}
            </p>
        )}
      </div>
      <div className="h-12 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={sparklineData}>
            <defs>
              <linearGradient id="sparklineColor" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#66F4E1" stopOpacity={0.4}/>
                <stop offset="95%" stopColor="#66F4E1" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="value" stroke="#66F4E1" strokeWidth={2} fill="url(#sparklineColor)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default StatWidget;
