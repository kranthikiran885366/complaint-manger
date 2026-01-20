export const COMPLAINT_TYPES = {
  1: { // Water Supply
    name: 'Water Supply',
    types: [
      'No water supply',
      'Low water pressure',
      'Pipeline leakage',
      'Contaminated water',
      'Overflowing tanks',
      'Broken valves',
      'Water bill issue',
      'Connection problem'
    ]
  },
  2: { // Electricity
    name: 'Electricity',
    types: [
      'Power outage',
      'Voltage fluctuation',
      'Transformer failure',
      'Broken poles',
      'Streetlight not working',
      'Meter issues',
      'Illegal connection',
      'Billing problem'
    ]
  },
  3: { // Roads & Transport
    name: 'Roads & Transport',
    types: [
      'Potholes',
      'Road damage',
      'Signal malfunction',
      'Speed breaker issues',
      'Unauthorized roadblocks',
      'Poor road condition',
      'Marking faded',
      'Drainage issue'
    ]
  },
  4: { // Sanitation
    name: 'Sanitation',
    types: [
      'Garbage overflow',
      'Missed garbage pickup',
      'Drainage blockage',
      'Open sewage',
      'Public toilet issues',
      'Street cleaning neglect',
      'Waste disposal problem',
      'Pest infestation'
    ]
  },
  5: { // Internet & Telecom
    name: 'Internet & Telecom',
    types: [
      'No internet',
      'Slow speed',
      'Cable damage',
      'Network outage',
      'Service disruption',
      'Billing issue',
      'Connection problem',
      'Signal weakness'
    ]
  },
  6: { // Health
    name: 'Health',
    types: [
      'Hospital cleanliness',
      'Medicine unavailability',
      'Staff behavior',
      'Emergency response delay',
      'Ambulance issues',
      'Bed unavailability',
      'Equipment failure',
      'Hygiene concern'
    ]
  },
  7: { // Police & Public Safety
    name: 'Police & Public Safety',
    types: [
      'Noise complaints',
      'Illegal activities',
      'Traffic violations',
      'Street safety',
      'Public nuisance',
      'Suspicious activity',
      'Harassment',
      'Lost property'
    ]
  },
  8: { // Education
    name: 'Education',
    types: [
      'School infrastructure',
      'Teacher absenteeism',
      'Exam issues',
      'Hostel complaints',
      'Staff behavior',
      'Facility problems',
      'Curriculum concern',
      'Admission issue'
    ]
  }
};

export const getSLA = (priority) => {
  const slaMap = {
    'Low': 15,
    'Medium': 7,
    'High': 3,
    'Critical': 1
  };
  return slaMap[priority] || 7;
};

export default {
  COMPLAINT_TYPES,
  getSLA
};
