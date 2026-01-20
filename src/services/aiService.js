// AI & Smart Features Service

export const classifyComplaint = (title, description, department) => {
  // NLP-based complaint classification
  const keywords = {
    water: ['water', 'supply', 'pressure', 'leakage', 'contaminated', 'tank', 'valve'],
    electricity: ['power', 'outage', 'voltage', 'transformer', 'pole', 'light', 'meter'],
    roads: ['pothole', 'damage', 'signal', 'breaker', 'roadblock', 'pavement'],
    sanitation: ['garbage', 'pickup', 'drainage', 'sewage', 'toilet', 'cleaning'],
    telecom: ['internet', 'speed', 'cable', 'network', 'service', 'signal'],
    health: ['hospital', 'medicine', 'staff', 'ambulance', 'bed', 'hygiene'],
    police: ['noise', 'illegal', 'traffic', 'safety', 'nuisance', 'harassment'],
    education: ['school', 'teacher', 'exam', 'hostel', 'facility', 'curriculum']
  };

  const text = (title + ' ' + description).toLowerCase();
  let bestMatch = department;

  for (const [dept, words] of Object.entries(keywords)) {
    const matches = words.filter(w => text.includes(w)).length;
    if (matches > 0) {
      bestMatch = dept;
    }
  }

  return bestMatch;
};

export const predictPriority = (description) => {
  // Priority prediction based on keywords
  const criticalKeywords = ['emergency', 'danger', 'urgent', 'life-threatening', 'critical', 'severe risk'];
  const highKeywords = ['broken', 'failed', 'damage', 'severe', 'widespread', 'major'];
  const mediumKeywords = ['issue', 'problem', 'not working', 'slow', 'intermittent'];

  const text = description.toLowerCase();

  if (criticalKeywords.some(kw => text.includes(kw))) {
    return { priority: 'Critical', confidence: 0.95 };
  } else if (highKeywords.some(kw => text.includes(kw))) {
    return { priority: 'High', confidence: 0.85 };
  } else if (mediumKeywords.some(kw => text.includes(kw))) {
    return { priority: 'Medium', confidence: 0.7 };
  }

  return { priority: 'Low', confidence: 0.6 };
};

export const detectDuplicates = (title, complaints = []) => {
  // Duplicate complaint detection using similarity
  const titleWords = title.toLowerCase().split(' ');
  const similarComplaints = complaints.filter(complaint => {
    const complaintWords = complaint.title.toLowerCase().split(' ');
    const common = titleWords.filter(word => complaintWords.includes(word)).length;
    return common >= titleWords.length * 0.6;
  });

  return {
    isDuplicate: similarComplaints.length > 0,
    similarComplaints: similarComplaints.slice(0, 3),
    confidence: similarComplaints.length > 0 ? 0.8 : 0
  };
};

export const extractLocation = (address) => {
  // Extract location components for assignment
  const locationRegex = /^(.+?),\s*(.+?),\s*(.+)$/;
  const match = address.match(locationRegex);

  if (match) {
    return {
      street: match[1].trim(),
      area: match[2].trim(),
      city: match[3].trim()
    };
  }

  return {
    street: address,
    area: 'Unknown',
    city: 'Unknown'
  };
};

export const autoAssignOfficer = (department, location, officers = []) => {
  // Intelligent officer assignment based on department and location
  const departmentOfficers = officers.filter(o => o.department === department);

  if (departmentOfficers.length === 0) {
    return null;
  }

  // Assign to officer with least assignments
  return departmentOfficers.reduce((prev, current) => {
    return (prev.complaintsAssigned || 0) < (current.complaintsAssigned || 0) ? prev : current;
  });
};

export const generateSLABreach = (createdDate, priority) => {
  // Calculate SLA compliance
  const slaMap = {
    'Critical': 1,
    'High': 3,
    'Medium': 7,
    'Low': 15
  };

  const slaDays = slaMap[priority] || 7;
  const today = new Date();
  const created = new Date(createdDate);
  const daysElapsed = Math.floor((today - created) / (1000 * 60 * 60 * 24));
  const daysRemaining = slaDays - daysElapsed;

  return {
    slaDays,
    daysElapsed,
    daysRemaining,
    isBreach: daysRemaining < 0,
    percentageElapsed: Math.floor((daysElapsed / slaDays) * 100)
  };
};

export const generateHotspotAnalysis = (complaints = []) => {
  // Predictive hotspot analysis for complaint frequency
  const locationCounts = {};

  complaints.forEach(complaint => {
    const location = complaint.location || 'Unknown';
    locationCounts[location] = (locationCounts[location] || 0) + 1;
  });

  const hotspots = Object.entries(locationCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([location, count]) => ({
      location,
      count,
      riskLevel: count > 5 ? 'High' : count > 2 ? 'Medium' : 'Low'
    }));

  return hotspots;
};

export const chatbotResponse = (userMessage) => {
  // Chatbot for complaint registration assistance
  const message = userMessage.toLowerCase();

  const responses = {
    greeting: 'Hello! I can help you register a complaint or track an existing one. What would you like to do?',
    water: 'Water supply issue? I can help you with no water supply, low pressure, leakage, contaminated water, or tank issues.',
    electricity: 'Electricity problem? I assist with power outages, voltage issues, transformer failure, or streetlight problems.',
    status: 'You can check your complaint status by providing your complaint ID or phone number.',
    track: 'To track your complaint, please provide your complaint ID (format: SCMS-XXXXXX).',
    default: 'I can help you register a new complaint or track an existing one. Please tell me more about your issue.'
  };

  if (message.includes('water') || message.includes('supply')) {
    return responses.water;
  } else if (message.includes('electric') || message.includes('power')) {
    return responses.electricity;
  } else if (message.includes('status') || message.includes('track')) {
    return responses.track;
  } else if (message.includes('hello') || message.includes('hi')) {
    return responses.greeting;
  }

  return responses.default;
};

export default {
  classifyComplaint,
  predictPriority,
  detectDuplicates,
  extractLocation,
  autoAssignOfficer,
  generateSLABreach,
  generateHotspotAnalysis,
  chatbotResponse
};
