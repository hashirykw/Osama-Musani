/* ---------------------------------------------------------------------------
   RA.DATA — Business syllabus, papers, formulas, theories, terms, case files,
   practice bank. Syllabus content is summarised in our own words from
   Cambridge International's published syllabuses:
     O Level Business 7081 — first exams 2027 (replaces Business Studies 7115)
     IGCSE Business 0264 — first exams 2027 (replaces Business Studies 0450)
     AS & A Level Business 9609 — 2026–2028
   --------------------------------------------------------------------------- */
window.RA = window.RA || {};
RA.DATA = (function () {

/* ------------------------------------------------------------------ 7081 (and 0264: same content) */
const OL_SECTIONS = [
  { n: 1, t: 'Understanding business activity', topics: [
    { n: '1.1', t: 'Business activity', pts: [
      'Needs and wants, scarcity, opportunity cost and the economic problem',
      'Specialisation and the division of labour: why it raises output, and its drawbacks',
      'Why businesses exist: combining factors of production and adding value'],
      terms: ['Opportunity cost', 'Specialisation', 'Added value'] },
    { n: '1.2', t: 'Classification of businesses', pts: [
      'Primary, secondary and tertiary sectors, and how the mix changes as a country develops',
      'The public sector and the private sector in a mixed economy'],
      terms: ['Primary sector', 'Tertiary sector', 'Mixed economy'] },
    { n: '1.3', t: 'Enterprise, business growth and size', pts: [
      'What makes an entrepreneur, and what goes into a business plan',
      'Measuring size: employees, revenue, capital employed, market share',
      'Internal growth, and external growth through horizontal, vertical and conglomerate mergers',
      'Why some businesses stay small, and why some fail'],
      terms: ['Entrepreneur', 'Business plan', 'Horizontal merger', 'Vertical merger'] },
    { n: '1.4', t: 'Types of business organisation', pts: [
      'Sole traders, partnerships, private and public limited companies, franchises and joint ventures',
      'Limited and unlimited liability, and why it matters to owners',
      'Public corporations and why governments run some businesses'],
      terms: ['Limited liability', 'Unlimited liability', 'Franchise', 'Joint venture'] },
    { n: '1.5', t: 'Business objectives and stakeholder objectives', pts: [
      'Survival, growth, profit, market share and social objectives, and why they change over time',
      'Internal and external stakeholders and what each wants from the business',
      'Conflicts between stakeholder objectives and how a business might resolve them'],
      terms: ['Stakeholder', 'Social enterprise'] }] },
  { n: 2, t: 'People in business', topics: [
    { n: '2.1', t: 'Human resource management', pts: [
      'Recruitment and selection: job analysis, job description, person specification, interviews',
      'Internal against external recruitment, full-time against part-time',
      'Training: induction, on-the-job and off-the-job',
      'Dismissal, redundancy, workforce planning and the law'],
      terms: ['Recruitment', 'Job description', 'Person specification', 'Induction training'] },
    { n: '2.2', t: 'Organisation and management', pts: [
      'Organisational charts: hierarchy, span of control, chain of command, delegation',
      'The functions of management: planning, organising, coordinating, commanding, controlling',
      'Leadership styles: autocratic, democratic, laissez-faire',
      'Trade unions and what they do for workers'],
      terms: ['Span of control', 'Chain of command', 'Delegation', 'Trade union'] },
    { n: '2.3', t: 'Methods of communication', pts: [
      'Internal and external communication, one-way and two-way',
      'Choosing a method, including digital communication',
      'Barriers to effective communication and how to reduce them'],
      terms: ['Two-way communication', 'Communication barrier'] },
    { n: '2.4', t: 'Motivating employees', pts: [
      'Why motivation matters: productivity, absence, labour turnover',
      'Maslow, Taylor and Herzberg in exam terms',
      'Financial rewards: wages, salary, bonus, commission, profit sharing',
      'Non-financial methods: job rotation, enlargement, enrichment, teamworking, training'],
      terms: ['Motivation', 'Job enrichment', 'Commission', 'Fringe benefits'] }] },
  { n: 3, t: 'Marketing', topics: [
    { n: '3.1', t: 'Marketing, competition and the customer', pts: [
      'The role of marketing: identifying needs, satisfying customers, building loyalty',
      'Why customer spending patterns change, and why competition rises',
      'Mass and niche markets, and how markets are segmented'],
      terms: ['Market segment', 'Niche market', 'Mass market', 'Brand loyalty'] },
    { n: '3.2', t: 'Market research', pts: [
      'Market-orientated against product-orientated businesses',
      'Primary research: surveys, interviews, focus groups, observation; sampling',
      'Secondary research: internal records, government data, the internet; accuracy',
      'Presenting and analysing data in tables, charts and graphs'],
      terms: ['Primary research', 'Secondary research', 'Sample'] },
    { n: '3.3', t: 'Marketing mix', pts: [
      'Product: design, branding, packaging, and the product life cycle with extension strategies',
      'Price: cost-plus, competitive, penetration, skimming, promotional; price elasticity in words',
      'Place: distribution channels and e-commerce',
      'Promotion: aims, advertising, sales promotion, social media and sponsorship; the marketing budget'],
      terms: ['Product life cycle', 'Price skimming', 'Penetration pricing', 'Extension strategy'] , lab: 'mix', cases: ['kitkat', 'billboards'] },
    { n: '3.4', t: 'Marketing strategy', pts: [
      'Choosing a mix that fits the target market and the objective',
      'Legal controls on marketing: misleading promotion, unsafe products',
      'Entering new foreign markets: the problems and the ways in'],
      terms: ['Marketing strategy'], cases: ['kitkat'] }] },
  { n: 4, t: 'Operations management', topics: [
    { n: '4.1', t: 'Production of goods and services', pts: [
      'Job, batch and flow production, and when each fits',
      'Productivity: what it is and how to raise it',
      'Inventory, lean production and just-in-time'],
      terms: ['Productivity', 'Lean production', 'Just-in-time'] },
    { n: '4.2', t: 'Technology and production', pts: [
      'Automation, robotics, computer-aided design and manufacturing',
      'Benefits and drawbacks of new technology for the business and its workers'],
      terms: ['Automation'] },
    { n: '4.3', t: 'Sustainable production', pts: [
      'Reducing waste, energy and resource use, and sourcing sustainably',
      'The costs and benefits of producing sustainably'],
      terms: ['Sustainability'] },
    { n: '4.4', t: 'Costs, scale of production and break-even analysis', pts: [
      'Fixed, variable, total and average costs, and how they behave as output changes',
      'Economies and diseconomies of scale',
      'Break-even charts and break-even output by calculation; margin of safety; limitations'],
      terms: ['Fixed costs', 'Variable costs', 'Break-even point', 'Margin of safety', 'Economies of scale'],
      formula: 'Break-even = fixed costs ÷ (price − variable cost per unit)', lab: 'be' },
    { n: '4.5', t: 'Achieving quality production', pts: [
      'What quality means to a customer, and why it matters to costs and reputation',
      'Quality control, quality assurance and total quality management'],
      terms: ['Quality control', 'Quality assurance', 'TQM'] },
    { n: '4.6', t: 'Location decisions', pts: [
      'Factors in locating a factory, a shop or a service business',
      'Choosing a country to locate in, and the role of government'],
      terms: ['Location'] }] },
  { n: 5, t: 'Financial information and decisions', topics: [
    { n: '5.1', t: 'Business finance: needs and sources', pts: [
      'Why businesses need finance: start-up, working capital, expansion',
      'Internal and external, short-term and long-term sources, including microfinance and crowdfunding',
      'Choosing a source: size, purpose, cost, control, risk'],
      terms: ['Working capital', 'Overdraft', 'Crowdfunding'] },
    { n: '5.2', t: 'Cash-flow forecasting and working capital', pts: [
      'Cash inflows and outflows; why cash is not the same as profit',
      'Building and reading a cash-flow forecast: net cash flow, opening and closing balance',
      'Fixing short-term cash problems'],
      terms: ['Cash flow', 'Cash-flow forecast', 'Net cash flow'], lab: 'cash' },
    { n: '5.3', t: 'Income statements', pts: [
      'Revenue, cost of sales, gross profit, expenses and profit',
      'Why profit matters and how retained profit is used'],
      terms: ['Revenue', 'Gross profit', 'Retained profit'], formula: 'Gross profit = revenue − cost of sales' },
    { n: '5.4', t: 'Statement of financial position', pts: [
      'Non-current and current assets, current and non-current liabilities',
      'Reading a statement of financial position and what it tells stakeholders'],
      terms: ['Assets', 'Liabilities', 'Capital employed'] },
    { n: '5.5', t: 'Analysis of accounts', pts: [
      'Profitability: gross profit margin, profit margin, return on capital employed',
      'Liquidity: current ratio and acid test ratio',
      'Who uses accounts and why, and the limits of the ratios'],
      terms: ['Liquidity', 'Gross profit margin', 'ROCE'], formula: 'Current ratio = current assets ÷ current liabilities', lab: 'ratio' }] },
  { n: 6, t: 'External influences on business activity', topics: [
    { n: '6.1', t: 'Economic issues', pts: [
      'The business cycle: growth, boom, recession, slump, recovery',
      'Government objectives: growth, low unemployment, low inflation, a balance of payments',
      'Fiscal, monetary and supply-side policies, and how each changes business decisions'],
      terms: ['Inflation', 'Recession', 'Fiscal policy', 'Interest rate'] },
    { n: '6.2', t: 'Environmental and ethical issues', pts: [
      'Environmental costs and benefits of business activity, and sustainable development',
      'Ethical decisions, corporate social responsibility, and pressure groups'],
      terms: ['External cost', 'Pressure group', 'CSR'] },
    { n: '6.3', t: 'Business and the international economy', pts: [
      'Globalisation, free trade and protectionism',
      'Multinational companies: benefits and drawbacks for the host country',
      'Exchange rates, appreciation and depreciation, and their effect on exporters and importers'],
      terms: ['Globalisation', 'Multinational company', 'Exchange rate'] }] }
];
const O = { code: '7081', name: 'O Level Business', short: 'O Level', years: 'from 2027', old: '7115', sections: OL_SECTIONS };
const IG = { code: '0264', name: 'IGCSE Business', short: 'IGCSE', years: 'from 2027', old: '0450', sections: OL_SECTIONS };

/* ------------------------------------------------------------------ 9609 */
const A = {
  code: '9609', name: 'AS & A Level Business', short: 'A Level', years: '2026–2028',
  sections: [
  { n: 1, lvl: 'AS', t: 'Business and its environment', topics: [
    { n: '1.1', t: 'Enterprise', pts: ['The nature of business activity, adding value, and the factors of production', 'Entrepreneurs and intrapreneurs, and their role in the economy', 'Social enterprise and the triple bottom line'], terms: ['Intrapreneur', 'Social enterprise'] },
    { n: '1.2', t: 'Business structure', pts: ['Economic sectors, and the public against the private sector', 'Legal structures: sole trader to plc, plus franchises, co-operatives and joint ventures'], terms: ['Limited liability'] },
    { n: '1.3', t: 'Size of business', pts: ['Measuring size, and why small and family businesses matter', 'Internal and external growth, and the impact of mergers and takeovers'], terms: ['Takeover'] },
    { n: '1.4', t: 'Business objectives', pts: ['Mission, corporate objectives and SMART targets', 'Objectives, strategy and tactics, and how they shape decisions', 'Corporate social responsibility and ethics'], terms: ['SMART objectives', 'Mission statement'] },
    { n: '1.5', t: 'Stakeholders in a business', pts: ['Stakeholder roles, rights and responsibilities', 'Conflicting stakeholder aims and stakeholder mapping'], terms: ['Stakeholder'] }] },
  { n: 2, lvl: 'AS', t: 'Human resource management', topics: [
    { n: '2.1', t: 'Human resource management', pts: ['Workforce planning, recruitment and selection', 'Training and development, appraisal', 'Labour turnover, employment contracts, and the morale of the workforce'], terms: ['Labour turnover', 'Appraisal'], formula: 'Labour turnover = leavers ÷ average employees × 100' },
    { n: '2.2', t: 'Motivation', pts: ['Taylor, Mayo, Maslow, Herzberg, McClelland and Vroom', 'Financial and non-financial motivators, and which suits which workforce'], terms: ['Hygiene factors', 'Motivators'] },
    { n: '2.3', t: 'Management', pts: ['The functions and roles of managers', 'Leadership styles, and McGregor’s Theory X and Theory Y'], terms: ['Theory X', 'Theory Y'] }] },
  { n: 3, lvl: 'AS', t: 'Marketing', topics: [
    { n: '3.1', t: 'The nature of marketing', pts: ['Marketing objectives, market size, growth and share', 'Demand, supply and the market', 'Segmentation, targeting and positioning; mass and niche'], terms: ['Market share', 'Positioning'], formula: 'Market share = sales ÷ total market sales × 100' },
    { n: '3.2', t: 'Market research', pts: ['Primary and secondary research', 'Sampling methods and their reliability', 'Analysing results: mean, mode, median, range, correlation'], terms: ['Quota sampling', 'Correlation'] },
    { n: '3.3', t: 'The marketing mix', pts: ['The 4Ps and the extended 7Ps for services', 'Product portfolio, the Boston Matrix and the product life cycle', 'Pricing, promotion and distribution decisions in context'], terms: ['Boston Matrix', 'Price elasticity'], lab: 'mix', cases: ['kitkat', 'billboards'] }] },
  { n: 4, lvl: 'AS', t: 'Operations management', topics: [
    { n: '4.1', t: 'The nature of operations', pts: ['Inputs, transformation process and outputs', 'Efficiency, effectiveness, productivity and sustainability', 'Job, batch, flow and mass customisation'], terms: ['Labour productivity'] },
    { n: '4.2', t: 'Inventory management', pts: ['Why hold inventory, and the costs of holding too much or too little', 'Inventory control charts: buffer, re-order level, lead time', 'Just-in-time'], terms: ['Buffer inventory', 'Lead time'] },
    { n: '4.3', t: 'Capacity utilisation and outsourcing', pts: ['Calculating capacity utilisation', 'Fixing under- and over-utilisation', 'Outsourcing: benefits and risks'], terms: ['Capacity utilisation', 'Outsourcing'], formula: 'Capacity utilisation = output ÷ maximum output × 100' }] },
  { n: 5, lvl: 'AS', t: 'Finance and accounting', topics: [
    { n: '5.1', t: 'Business finance', pts: ['Why businesses need finance', 'Working capital and its management'], terms: ['Working capital'] },
    { n: '5.2', t: 'Sources of finance', pts: ['Internal and external, short- and long-term sources', 'Choosing a source: cost, control, risk, gearing'], terms: ['Venture capital', 'Debt factoring'] },
    { n: '5.3', t: 'Forecasting and managing cash flows', pts: ['Cash-flow forecasts and their uses', 'Ways to improve cash flow, and the risks of each'], terms: ['Cash-flow forecast'], lab: 'cash' },
    { n: '5.4', t: 'Costs', pts: ['Direct, indirect, fixed, variable, marginal costs; contribution', 'Break-even analysis, margin of safety and its limitations', 'Uses of cost information'], terms: ['Contribution', 'Break-even point'], formula: 'Break-even = fixed costs ÷ contribution per unit', lab: 'be' },
    { n: '5.5', t: 'Budgets', pts: ['The purpose of budgets and how they are set', 'Variance analysis: favourable and adverse'], terms: ['Variance', 'Adverse variance'] }] },
  { n: 6, lvl: 'A Level', t: 'Business and its environment', topics: [
    { n: '6.1', t: 'External influences on business activity', pts: ['Political, legal, economic, social, technological and environmental factors', 'Government policy, the business cycle and business decisions'], terms: ['PEST analysis'] },
    { n: '6.2', t: 'Business strategy', pts: ['Strategic management and the role of strategy', 'SWOT, PEST, Ansoff Matrix, Porter’s Five Forces, the Boston Matrix', 'Decision trees, force-field analysis, contingency planning and crisis management'], terms: ['Ansoff Matrix', 'Decision tree', 'Crisis management'], cases: ['kitkat'] }] },
  { n: 7, lvl: 'A Level', t: 'Human resource management', topics: [
    { n: '7.1', t: 'Organisational structure', pts: ['Hierarchy, span of control, delegation, centralisation', 'Functional, product, matrix and flat structures'], terms: ['Matrix structure', 'Decentralisation'] },
    { n: '7.2', t: 'Business communication', pts: ['Communication methods and networks', 'Barriers and their effect on the business'], terms: ['Communication network'] },
    { n: '7.3', t: 'Leadership', pts: ['Leadership theories and styles', 'Emotional intelligence and its four competencies'], terms: ['Emotional intelligence'] },
    { n: '7.4', t: 'Human resource management strategy', pts: ['Hard and soft HRM, flexible working', 'Measuring HR performance', 'Management and workforce relations, collective bargaining'], terms: ['Soft HRM', 'Collective bargaining'] }] },
  { n: 8, lvl: 'A Level', t: 'Marketing', topics: [
    { n: '8.1', t: 'Marketing analysis', pts: ['Price, income and promotional elasticity of demand', 'Sales forecasting: moving averages and trends'], terms: ['Price elasticity of demand', 'Income elasticity'], formula: 'PED = % change in quantity demanded ÷ % change in price', lab: 'ped' },
    { n: '8.2', t: 'Marketing strategy', pts: ['Marketing plans, objectives and budgets', 'International marketing and entering new markets', 'Digital marketing, social media and e-commerce'], terms: ['Digital marketing'], cases: ['kitkat', 'billboards'] }] },
  { n: 9, lvl: 'A Level', t: 'Operations management', topics: [
    { n: '9.1', t: 'Location and scale', pts: ['Location decisions, national and international', 'Economies and diseconomies of scale'], terms: ['Diseconomies of scale'] },
    { n: '9.2', t: 'Quality management', pts: ['Quality control and quality assurance', 'TQM, Kaizen and benchmarking'], terms: ['Kaizen', 'Benchmarking'] },
    { n: '9.3', t: 'Operations strategy', pts: ['Lean production and its techniques', 'Research and development', 'Project management and critical path analysis'], terms: ['Critical path', 'Float time'] }] },
  { n: 10, lvl: 'A Level', t: 'Finance and accounting', topics: [
    { n: '10.1', t: 'Financial statements', pts: ['Income statement and statement of financial position in detail', 'Inventory valuation and depreciation'], terms: ['Depreciation'] },
    { n: '10.2', t: 'Analysis of published accounts', pts: ['Liquidity, efficiency, gearing, profitability and investor ratios', 'The limits of ratio analysis'], terms: ['Gearing', 'Inventory turnover'], formula: 'Gearing = non-current liabilities ÷ capital employed × 100', lab: 'ratio' },
    { n: '10.3', t: 'Investment appraisal', pts: ['Payback, average rate of return and net present value', 'Qualitative factors in investment decisions'], terms: ['Payback period', 'Net present value'], formula: 'ARR = average annual profit ÷ initial investment × 100', lab: 'inv' },
    { n: '10.4', t: 'Finance and accounting strategy', pts: ['Using accounting data in strategic decisions', 'Contribution costing and special-order decisions'], terms: ['Contribution'] }] }]
};

/* ------------------------------------------------------------------ papers */
const PMETA = {
  '7115': { name: 'O Level Business Studies', grades: 'A*–E', papers: {
    1: { n: 'Short Answer and Data Response', min: 90, m: 80, w: '50%', note: 'Four compulsory questions' },
    2: { n: 'Case Study', min: 90, m: 80, w: '50%', note: 'Four questions on a case-study insert' } } },
  '7081': { name: 'O Level Business', grades: 'A*–E', papers: {
    1: { n: 'Short Answer and Data Response', min: 90, m: 80, w: '50%', note: 'Four compulsory questions, four parts each' },
    2: { n: 'Case Study', min: 90, m: 80, w: '50%', note: 'Four questions on a case-study insert' } } },
  '0450': { name: 'IGCSE Business Studies', grades: 'A*–G', papers: {
    1: { n: 'Short Answer and Data Response', min: 90, m: 80, w: '50%', note: 'Four compulsory questions' },
    2: { n: 'Case Study', min: 90, m: 80, w: '50%', note: 'Four questions on a case-study insert' } } },
  '0264': { name: 'IGCSE Business', grades: 'A*–G', papers: {
    1: { n: 'Short Answer and Data Response', min: 90, m: 80, w: '50%', note: 'Four compulsory questions' },
    2: { n: 'Case Study', min: 90, m: 80, w: '50%', note: 'Four questions on a case-study insert' } } },
  '9609': { name: 'AS & A Level Business', grades: 'A*–E', papers: {
    1: { n: 'Business Concepts 1', min: 75, m: 40, w: '40% AS · 20% A Level', note: 'Short answers, then one essay from a choice of two' },
    2: { n: 'Business Concepts 2', min: 90, m: 60, w: '60% AS · 30% A Level', note: 'Two data-response questions' },
    3: { n: 'Business Decision-Making', min: 105, m: 60, w: '30% A Level', note: 'Case study with data; recommend decisions' },
    4: { n: 'Business Strategy', min: 75, m: 40, w: '20% A Level', note: 'Case study on strategic choices' } } }
};

/* Assessment objectives (percent of the whole qualification) */
const AO = {
  '7081': [['AO1', 'Knowledge and understanding', 35], ['AO2', 'Application', 30], ['AO3', 'Analysis', 22], ['AO4', 'Evaluation', 13]],
  '9609': [['AO1', 'Knowledge and understanding', 30], ['AO2', 'Application', 25], ['AO3', 'Analysis', 25], ['AO4', 'Evaluation', 20]]
};

/* ------------------------------------------------------------------ formulas (shown as RATIOS so the shared tools can search them)
   lv: O = O Level / IGCSE, AS / A = 9609. */
const RATIOS = [
  { id: 'tc', g: 'Costs', n: 'Total cost', f: 'TC = fixed costs + variable costs', sym: 'variable costs = VC per unit × output', u: 'Rs', lv: 'O AS' },
  { id: 'ac', g: 'Costs', n: 'Average cost per unit', f: 'AC = total cost ÷ output', sym: '', u: 'Rs per unit', lv: 'O AS' },
  { id: 'cpu', g: 'Costs', n: 'Contribution per unit', f: 'contribution = price − variable cost per unit', sym: 'what each sale adds towards fixed costs', u: 'Rs', lv: 'O AS' },
  { id: 'be', g: 'Costs', n: 'Break-even output', f: 'BE = fixed costs ÷ contribution per unit', sym: 'round up to whole units', u: 'units', lv: 'O AS' },
  { id: 'mos', g: 'Costs', n: 'Margin of safety', f: 'MoS = actual output − break-even output', sym: 'also shown as % of actual output', u: 'units', lv: 'O AS' },
  { id: 'rev', g: 'Income', n: 'Revenue', f: 'revenue = price × quantity sold', sym: '', u: 'Rs', lv: 'O AS' },
  { id: 'gp', g: 'Income', n: 'Gross profit', f: 'gross profit = revenue − cost of sales', sym: '', u: 'Rs', lv: 'O AS' },
  { id: 'np', g: 'Income', n: 'Profit', f: 'profit = gross profit − expenses', sym: '', u: 'Rs', lv: 'O AS' },
  { id: 'gpm', g: 'Ratios', n: 'Gross profit margin', f: 'GPM = gross profit ÷ revenue × 100', sym: '', u: '%', lv: 'O AS' },
  { id: 'pm', g: 'Ratios', n: 'Profit margin', f: 'PM = profit ÷ revenue × 100', sym: '', u: '%', lv: 'O AS' },
  { id: 'roce', g: 'Ratios', n: 'Return on capital employed', f: 'ROCE = operating profit ÷ capital employed × 100', sym: 'capital employed = equity + non-current liabilities', u: '%', lv: 'O A' },
  { id: 'cr', g: 'Ratios', n: 'Current ratio', f: 'current ratio = current assets ÷ current liabilities', sym: 'often read against 1.5 to 2', u: ':1', lv: 'O A' },
  { id: 'at', g: 'Ratios', n: 'Acid test ratio', f: 'acid test = (current assets − inventory) ÷ current liabilities', sym: 'often read against 1', u: ':1', lv: 'O A' },
  { id: 'gear', g: 'Ratios', n: 'Gearing', f: 'gearing = non-current liabilities ÷ capital employed × 100', sym: 'above 50% is usually called high', u: '%', lv: 'A' },
  { id: 'it', g: 'Ratios', n: 'Inventory turnover', f: 'inventory turnover = cost of sales ÷ average inventory', sym: 'times per year', u: 'times', lv: 'A' },
  { id: 'rd', g: 'Ratios', n: 'Trade receivables days', f: 'receivables days = trade receivables ÷ revenue × 365', sym: '', u: 'days', lv: 'A' },
  { id: 'pd', g: 'Ratios', n: 'Trade payables days', f: 'payables days = trade payables ÷ cost of sales × 365', sym: '', u: 'days', lv: 'A' },
  { id: 'dy', g: 'Ratios', n: 'Dividend yield', f: 'dividend yield = dividend per share ÷ share price × 100', sym: '', u: '%', lv: 'A' },
  { id: 'pe', g: 'Ratios', n: 'Price/earnings ratio', f: 'P/E = share price ÷ earnings per share', sym: '', u: '', lv: 'A' },
  { id: 'ms', g: 'Marketing', n: 'Market share', f: 'market share = business sales ÷ total market sales × 100', sym: '', u: '%', lv: 'O AS' },
  { id: 'mg', g: 'Marketing', n: 'Market growth', f: 'growth = (new size − old size) ÷ old size × 100', sym: '', u: '%', lv: 'AS' },
  { id: 'ped', g: 'Marketing', n: 'Price elasticity of demand', f: 'PED = % change in quantity demanded ÷ % change in price', sym: 'elastic if the value is above 1 (ignoring the sign)', u: '', lv: 'A' },
  { id: 'yed', g: 'Marketing', n: 'Income elasticity of demand', f: 'YED = % change in quantity demanded ÷ % change in income', sym: 'negative for inferior goods', u: '', lv: 'A' },
  { id: 'lp', g: 'Operations', n: 'Labour productivity', f: 'productivity = output ÷ number of workers', sym: 'per period', u: 'units per worker', lv: 'O AS' },
  { id: 'cu', g: 'Operations', n: 'Capacity utilisation', f: 'CU = current output ÷ maximum output × 100', sym: '', u: '%', lv: 'AS' },
  { id: 'lt', g: 'People', n: 'Labour turnover', f: 'LT = employees leaving ÷ average employees × 100', sym: 'per year', u: '%', lv: 'AS' },
  { id: 'var', g: 'Finance', n: 'Variance', f: 'variance = actual − budget', sym: 'favourable if it helps profit', u: 'Rs', lv: 'AS' },
  { id: 'pb', g: 'Investment', n: 'Payback period', f: 'payback = years until cumulative net cash flow reaches zero', sym: 'part-year = amount still needed ÷ that year’s net cash × 12 months', u: 'years, months', lv: 'A' },
  { id: 'arr', g: 'Investment', n: 'Average rate of return', f: 'ARR = average annual profit ÷ initial investment × 100', sym: 'average profit = total net cash − cost, ÷ years', u: '%', lv: 'A' },
  { id: 'npv', g: 'Investment', n: 'Net present value', f: 'NPV = sum of discounted net cash flows − initial investment', sym: 'positive NPV: worth more than it costs', u: 'Rs', lv: 'A' }
];

/* ------------------------------------------------------------------ theories and models (shown as "concepts") */
const CONCEPTS = [
  ['Maslow’s hierarchy of needs', 'People are motivated by unmet needs in order: physical, safety, social, esteem, then self-actualisation. A satisfied need no longer motivates.'],
  ['Herzberg’s two-factor theory', 'Hygiene factors (pay, conditions, supervision) cause dissatisfaction if poor but do not motivate. Motivators (achievement, recognition, responsibility) do.'],
  ['Taylor’s scientific management', 'Break work into simple tasks, train workers in the best method, and pay by output (piece rate). Money is the main motivator.'],
  ['Mayo’s human relations', 'Workers respond to attention, teamwork and social needs at work, not only to pay and conditions.'],
  ['McClelland’s needs theory', 'People are driven mainly by a need for achievement, for power, or for affiliation; managers should match the role to the need.'],
  ['Vroom’s expectancy theory', 'Effort depends on expectancy (effort leads to performance), instrumentality (performance leads to reward) and valence (the reward is valued).'],
  ['McGregor’s Theory X and Y', 'Theory X managers assume workers dislike work and need control; Theory Y managers assume workers want responsibility and can self-direct.'],
  ['Product life cycle', 'Introduction, growth, maturity, decline. Extension strategies (new markets, new uses, repackaging, promotion) delay the decline.'],
  ['Boston Matrix', 'Products sorted by market share and market growth: stars, cash cows, question marks and dogs. Cash cows fund the question marks.'],
  ['Ansoff Matrix', 'Four growth strategies by risk: market penetration, product development, market development and diversification (the riskiest).'],
  ['Porter’s Five Forces', 'Industry profitability depends on rivalry, the threat of new entrants, the threat of substitutes, buyer power and supplier power.'],
  ['SWOT analysis', 'Strengths and weaknesses are internal; opportunities and threats are external. It is a starting point for strategy, not a decision.'],
  ['PEST analysis', 'Political, economic, social and technological factors outside the business that shape its strategy.'],
  ['Kaizen', 'Continuous improvement through many small changes suggested by the workforce.'],
  ['Force-field analysis', 'List the forces driving a change against the forces resisting it, weight them, and decide whether and how to act.']
];

/* ------------------------------------------------------------------ key terms */
const TERMS = [
  ['Acid test ratio', 'Current assets minus inventory, divided by current liabilities. A stricter test of liquidity than the current ratio.'],
  ['Added value', 'The difference between the selling price of a product and the cost of the bought-in materials used to make it.'],
  ['Adverse variance', 'A difference from budget that reduces profit: costs higher, or revenue lower, than planned.'],
  ['Appraisal', 'A regular review of an employee’s performance against agreed targets.'],
  ['Automation', 'Using machines and computers to do work that people did before.'],
  ['Benchmarking', 'Comparing a business’s performance and processes with the best in the industry.'],
  ['Brand loyalty', 'When customers keep buying the same brand rather than switching to a rival.'],
  ['Break-even point', 'The level of output at which total revenue equals total cost: no profit and no loss.'],
  ['Buffer inventory', 'The minimum inventory held to cover unexpected demand or late deliveries.'],
  ['Capacity utilisation', 'Current output as a percentage of the maximum possible output.'],
  ['Capital employed', 'The total long-term finance invested in a business: equity plus non-current liabilities.'],
  ['Cash flow', 'The cash inflows and outflows of a business over a period of time.'],
  ['Cash-flow forecast', 'An estimate of a business’s future cash inflows and outflows, month by month.'],
  ['Chain of command', 'The route by which instructions pass down from senior managers through the hierarchy.'],
  ['Collective bargaining', 'Negotiation between employers and a trade union on behalf of a group of workers.'],
  ['Commission', 'Payment based on the number or value of sales made.'],
  ['Contribution', 'Revenue minus variable costs. Contribution per unit is price minus variable cost per unit.'],
  ['Crisis management', 'How a business responds to a sudden event that threatens its reputation, sales or survival.'],
  ['Critical path', 'The sequence of activities in a project that has no float time; any delay to them delays the whole project.'],
  ['Crowdfunding', 'Raising finance from a large number of people, each investing a small amount, usually online.'],
  ['CSR', 'Corporate social responsibility: a business taking account of its effect on society and the environment, beyond the law.'],
  ['Decentralisation', 'Passing decision-making authority down from head office to lower levels or branches.'],
  ['Delegation', 'Passing authority down the hierarchy to a subordinate to carry out a task.'],
  ['Depreciation', 'The fall in the value of a non-current asset over time, shown as an expense.'],
  ['Digital marketing', 'Promoting products through digital channels: social media, search, email, apps and websites.'],
  ['Diseconomies of scale', 'Factors that raise average costs as a business grows too large, such as poor communication.'],
  ['Economies of scale', 'Factors that lower the average cost of production as a business grows.'],
  ['Emotional intelligence', 'A leader’s ability to understand and manage their own emotions and those of others.'],
  ['Entrepreneur', 'A person who organises, operates and takes the risk of a new business venture.'],
  ['Exchange rate', 'The price of one currency in terms of another.'],
  ['Extension strategy', 'A way to lengthen a product’s life cycle before it declines, such as a new market or new packaging.'],
  ['Fiscal policy', 'Government changes to taxation and government spending.'],
  ['Fixed costs', 'Costs that do not change with output in the short run, such as rent.'],
  ['Franchise', 'An agreement that lets one business use another’s name, logo and business model in return for a fee and royalties.'],
  ['Globalisation', 'The increasing freedom of movement of goods, capital and people between countries.'],
  ['Gross profit', 'Revenue minus cost of sales.'],
  ['Hygiene factors', 'In Herzberg’s theory, aspects of work that cause dissatisfaction if missing but do not motivate when present.'],
  ['Induction training', 'Training that introduces a new employee to the business, its people and its procedures.'],
  ['Inflation', 'A general and sustained rise in the price level over time.'],
  ['Interest rate', 'The cost of borrowing money, and the reward for saving it.'],
  ['Intrapreneur', 'An employee who acts like an entrepreneur inside an existing business.'],
  ['Joint venture', 'Two or more businesses sharing the capital, risk and profit of a new venture.'],
  ['Just-in-time', 'Ordering inventory so it arrives just when it is needed, so little or no inventory is held.'],
  ['Kaizen', 'Continuous improvement through small, frequent changes suggested by employees.'],
  ['Labour turnover', 'The percentage of the workforce that leaves in a year.'],
  ['Lead time', 'The time between placing an order with a supplier and the delivery arriving.'],
  ['Lean production', 'Techniques that cut waste of time, materials and money in production.'],
  ['Limited liability', 'Owners can lose only what they invested in the business, not their personal possessions.'],
  ['Liquidity', 'The ability of a business to pay its short-term debts.'],
  ['Margin of safety', 'The amount by which actual output is above the break-even output.'],
  ['Market segment', 'An identifiable sub-group of a market whose consumers share similar characteristics.'],
  ['Market share', 'A business’s sales as a percentage of total sales in its market.'],
  ['Mass market', 'A large market in which standard products are sold to many customers.'],
  ['Mission statement', 'A short statement of a business’s core aims and purpose.'],
  ['Motivation', 'The reasons why people want to work hard and work well.'],
  ['Multinational company', 'A business with operations, not just sales, in more than one country.'],
  ['Net present value', 'Today’s value of an investment’s future net cash flows, minus its cost.'],
  ['Niche market', 'A small, specialised segment of a larger market.'],
  ['Opportunity cost', 'The next best alternative given up when a choice is made.'],
  ['Outsourcing', 'Using another business to carry out part of the production process or a service.'],
  ['Payback period', 'The time it takes for an investment’s net cash inflows to repay its initial cost.'],
  ['Penetration pricing', 'Setting a low price to win market share for a new product.'],
  ['Person specification', 'The qualifications, skills, experience and qualities needed for a job.'],
  ['Positioning', 'How a brand is placed in customers’ minds against its rivals, on price, quality or image.'],
  ['Pressure group', 'An organisation that tries to change the decisions of businesses or governments.'],
  ['Price elasticity of demand', 'How responsive the quantity demanded is to a change in price.'],
  ['Price skimming', 'Setting a high price for a new or unique product, then lowering it later.'],
  ['Primary research', 'Collecting new, first-hand data directly from the market.'],
  ['Product life cycle', 'The stages a product passes through: introduction, growth, maturity and decline.'],
  ['Productivity', 'Output per unit of input, usually output per worker per period.'],
  ['Quality assurance', 'Checking quality at every stage of production so that faults are prevented.'],
  ['Quality control', 'Checking finished products for faults before they reach the customer.'],
  ['Recession', 'A fall in national output (GDP) for two quarters in a row.'],
  ['Recruitment', 'The process from identifying that a job needs filling to the arrival of applications.'],
  ['Retained profit', 'Profit kept in the business after tax and dividends, used to reinvest.'],
  ['Revenue', 'The money received from selling goods and services: price × quantity.'],
  ['Secondary research', 'Using data that has already been collected by someone else.'],
  ['SMART objectives', 'Objectives that are Specific, Measurable, Achievable, Relevant and Time-bound.'],
  ['Social enterprise', 'A business with social or environmental aims that reinvests its profit towards them.'],
  ['Span of control', 'The number of subordinates who report directly to one manager.'],
  ['Specialisation', 'People or businesses concentrating on what they do best.'],
  ['Stakeholder', 'Any person or group with an interest in, or affected by, a business’s activities.'],
  ['Sustainability', 'Producing in a way that does not damage the ability of future generations to meet their needs.'],
  ['Takeover', 'When one business buys enough shares to gain control of another.'],
  ['TQM', 'Total quality management: making every employee responsible for quality.'],
  ['Trade union', 'An organisation of workers that protects and improves their pay and conditions.'],
  ['Unlimited liability', 'Owners are personally responsible for all the debts of the business.'],
  ['Variable costs', 'Costs that change directly with the level of output, such as raw materials.'],
  ['Venture capital', 'Finance from specialist investors for a new or growing business, in return for a share of it.'],
  ['Working capital', 'Current assets minus current liabilities: the money for day-to-day running.']
];

/* ------------------------------------------------------------------ "which formula?" trainer (Lab) */
const ACCOUNTS = ['Break-even output', 'Margin of safety', 'Gross profit margin', 'Profit margin', 'ROCE', 'Current ratio', 'Acid test ratio', 'Gearing', 'Market share', 'Capacity utilisation', 'Labour turnover', 'Labour productivity', 'Price elasticity of demand', 'Payback period', 'Average rate of return', 'Contribution per unit'];
const TX = [
  { q: 'The owner wants to know how many burgers she must sell before she stops making a loss.', a: 'Break-even output', why: 'Fixed costs ÷ contribution per unit gives the output where revenue covers all costs.' },
  { q: 'Sales are 900 units and break-even is 650. How far could sales fall before a loss?', a: 'Margin of safety', why: '900 − 650 = 250 units of safety.' },
  { q: 'A supplier wants to know if the shop can pay its bills next month, without relying on selling stock.', a: 'Acid test ratio', why: 'It removes inventory, the least liquid current asset.' },
  { q: 'Investors ask how well the business turns its long-term finance into profit.', a: 'ROCE', why: 'Return on capital employed compares operating profit with all long-term finance.' },
  { q: 'The bank asks how much of the long-term finance is borrowed.', a: 'Gearing', why: 'Non-current liabilities as a share of capital employed.' },
  { q: 'Each sale brings in Rs 500 and uses Rs 320 of materials. What is left to cover fixed costs?', a: 'Contribution per unit', why: '500 − 320 = Rs 180 per unit.' },
  { q: 'The factory can make 10 000 a month but made 7 000.', a: 'Capacity utilisation', why: '7 000 ÷ 10 000 × 100 = 70%.' },
  { q: 'Twelve of sixty staff left this year. HR wants a measure.', a: 'Labour turnover', why: '12 ÷ 60 × 100 = 20%.' },
  { q: 'A 10% price rise cut sales by 25%. How sensitive is demand?', a: 'Price elasticity of demand', why: '−25 ÷ 10 = −2.5: elastic.' },
  { q: 'The directors want to know how quickly a new machine pays for itself.', a: 'Payback period', why: 'Count years of net cash inflow until the cost is recovered.' },
  { q: 'The directors want the average yearly profit of a project as a % of its cost.', a: 'Average rate of return', why: 'ARR = average annual profit ÷ initial investment × 100.' },
  { q: 'A brand sold Rs 40m in a market worth Rs 200m.', a: 'Market share', why: '40 ÷ 200 × 100 = 20%.' },
  { q: 'Gross profit is Rs 3m on revenue of Rs 10m. How much of each rupee of sales is gross profit?', a: 'Gross profit margin', why: '3 ÷ 10 × 100 = 30%.' },
  { q: 'Ten workers produce 1 200 units a week. Management wants a per-worker figure.', a: 'Labour productivity', why: '1 200 ÷ 10 = 120 units per worker per week.' }
];

/* ------------------------------------------------------------------ quick-check bank (MCQ)
   Written for this site in Cambridge style. Not Cambridge questions. */
const MCQ = [
  { lv: 'O', ref: '1.1', q: 'A student spends her evening revising instead of working a paid shift worth Rs 2 000. What is the opportunity cost of revising?', o: ['Nothing, revising is free', 'The Rs 2 000 she could have earned', 'The cost of her textbooks', 'The marks she will gain'], a: 1, why: 'Opportunity cost is the next best alternative given up: the shift’s pay.' },
  { lv: 'O', ref: '1.1', q: 'Which is an example of adding value?', o: ['A bakery turns Rs 40 of ingredients into a cake sold for Rs 150', 'A shop pays its rent on time', 'A business takes out a bank loan', 'A factory buys more raw materials'], a: 0, why: 'Added value = selling price − cost of bought-in materials = Rs 110.' },
  { lv: 'O', ref: '1.2', q: 'In which sector does a bank operate?', o: ['Primary', 'Secondary', 'Tertiary', 'Public'], a: 2, why: 'Banks provide a service: the tertiary sector.' },
  { lv: 'O', ref: '1.3', q: 'A biscuit maker buys a wheat farm. What type of merger is this?', o: ['Horizontal', 'Backward vertical', 'Forward vertical', 'Conglomerate'], a: 1, why: 'It moves back down the supply chain, towards its raw material.' },
  { lv: 'O', ref: '1.3', q: 'Which measure of size could make a call centre look bigger than a car factory?', o: ['Number of employees', 'Capital employed', 'Value of machinery', 'Output in units'], a: 0, why: 'A call centre is labour-intensive: many staff, little capital. A car factory is capital-intensive.' },
  { lv: 'O', ref: '1.4', q: 'What is the main advantage of limited liability to shareholders?', o: ['They can never lose money', 'They can lose only the amount they invested', 'They do not pay tax', 'They control day-to-day decisions'], a: 1, why: 'Personal possessions are protected; only the investment is at risk.' },
  { lv: 'O', ref: '1.4', q: 'A franchisee pays a royalty to the franchisor. What does the franchisee get in return?', o: ['Unlimited liability', 'The right to use an established brand and business model', 'Guaranteed profit', 'Ownership of the franchisor'], a: 1, why: 'The brand, model and support are what the fee buys.' },
  { lv: 'O', ref: '1.5', q: 'Which stakeholder objective is most likely to conflict with shareholders wanting higher profit?', o: ['Customers wanting lower prices', 'Managers wanting growth', 'Banks wanting the loan repaid', 'Government wanting tax paid'], a: 0, why: 'Lower prices reduce profit margins unless costs fall too.' },
  { lv: 'O', ref: '2.1', q: 'Which document lists the qualifications and qualities needed for a job?', o: ['Job description', 'Person specification', 'Contract of employment', 'Job advertisement'], a: 1, why: 'The job description lists duties; the person specification lists the person needed.' },
  { lv: 'O', ref: '2.2', q: 'A manager has eight people reporting directly to her. This is her…', o: ['Chain of command', 'Hierarchy', 'Span of control', 'Delegation'], a: 2, why: 'Span of control is the number of direct subordinates.' },
  { lv: 'O', ref: '2.2', q: 'Which leadership style suits an emergency where quick decisions are needed?', o: ['Autocratic', 'Democratic', 'Laissez-faire', 'Paternalistic'], a: 0, why: 'One person decides quickly without consultation.' },
  { lv: 'O', ref: '2.4', q: 'According to Herzberg, which is a motivator?', o: ['A pay rise', 'Better working conditions', 'Recognition for achievement', 'A friendly supervisor'], a: 2, why: 'Pay, conditions and supervision are hygiene factors.' },
  { lv: 'O', ref: '2.4', q: 'Giving an employee more varied tasks at the same level of difficulty is…', o: ['Job enrichment', 'Job enlargement', 'Job rotation', 'Delegation'], a: 1, why: 'Enlargement adds tasks of a similar level; enrichment adds responsibility.' },
  { lv: 'O', ref: '3.1', q: 'A brand sells luxury watches only to collectors. What kind of market is this?', o: ['Mass market', 'Niche market', 'Primary market', 'Free market'], a: 1, why: 'A small, specialised segment.' },
  { lv: 'O', ref: '3.2', q: 'Which is primary research?', o: ['Reading a government population report', 'Running a focus group of students', 'Checking last year’s sales records', 'Reading a competitor’s website'], a: 1, why: 'A focus group collects new, first-hand data.' },
  { lv: 'O', ref: '3.3', q: 'A new games console is launched at a high price that falls later. Which pricing method is this?', o: ['Penetration', 'Competitive', 'Skimming', 'Cost-plus'], a: 2, why: 'Skimming charges early adopters more, then lowers the price.' },
  { lv: 'O', ref: '3.3', q: 'Sales are high but growth has stopped and competitors are copying the product. Which stage is it in?', o: ['Introduction', 'Growth', 'Maturity', 'Decline'], a: 2, why: 'Maturity: peak sales, slowing growth, heavy competition.' },
  { lv: 'O', ref: '3.3', q: 'A chocolate brand releases a limited Formula 1 edition of an old bar. This is mainly…', o: ['An extension strategy', 'Penetration pricing', 'Primary research', 'Diversification'], a: 0, why: 'A new version and new promotional hook lengthen the life cycle of an existing product.' },
  { lv: 'O', ref: '4.1', q: 'A tailor makes one wedding suit to a customer’s measurements. Which method is this?', o: ['Job production', 'Batch production', 'Flow production', 'Mass customisation'], a: 0, why: 'One-off products made to order.' },
  { lv: 'O', ref: '4.1', q: 'Which is a disadvantage of just-in-time?', o: ['High storage costs', 'Inventory can go out of date', 'Production stops if a delivery is late', 'Too much working capital tied up'], a: 2, why: 'With no buffer, a late delivery halts production.' },
  { lv: 'O', ref: '4.4', q: 'Fixed costs are Rs 60 000. Price is Rs 500 and variable cost per unit is Rs 300. What is break-even output?', o: ['120 units', '200 units', '300 units', '1 200 units'], a: 2, why: 'Contribution = 500 − 300 = Rs 200. 60 000 ÷ 200 = 300 units.' },
  { lv: 'O', ref: '4.4', q: 'If the price rises and costs stay the same, the break-even point will…', o: ['Rise', 'Fall', 'Stay the same', 'Become zero'], a: 1, why: 'Higher contribution per unit means fewer units are needed to cover fixed costs.' },
  { lv: 'O', ref: '4.4', q: 'Which is an example of a purchasing economy of scale?', o: ['Cheaper loans from banks', 'Bulk-buying discounts from suppliers', 'Hiring specialist managers', 'Spreading advertising over more sales'], a: 1, why: 'Buying in bulk lowers the cost per unit of materials.' },
  { lv: 'O', ref: '4.5', q: 'Checking quality at every stage of production, so faults are prevented, is…', o: ['Quality control', 'Quality assurance', 'Inspection', 'Benchmarking'], a: 1, why: 'Quality control checks finished products; assurance builds quality in.' },
  { lv: 'O', ref: '5.1', q: 'Which is the most suitable source of finance to buy a new delivery van over five years?', o: ['Bank overdraft', 'Trade credit', 'Hire purchase or a bank loan', 'Debt factoring'], a: 2, why: 'A long-life asset suits medium- or long-term finance.' },
  { lv: 'O', ref: '5.2', q: 'Opening balance Rs 20 000, inflows Rs 50 000, outflows Rs 65 000. What is the closing balance?', o: ['Rs −15 000', 'Rs 5 000', 'Rs 35 000', 'Rs 135 000'], a: 1, why: 'Net cash flow = −15 000. Closing = 20 000 − 15 000 = Rs 5 000.' },
  { lv: 'O', ref: '5.2', q: 'Why can a profitable business still fail?', o: ['Its revenue is too high', 'It runs out of cash to pay its debts', 'Its gross profit is positive', 'It has too many customers'], a: 1, why: 'Profit is not cash; customers on credit may pay late while bills fall due now.' },
  { lv: 'O', ref: '5.3', q: 'Revenue Rs 800 000, cost of sales Rs 500 000, expenses Rs 200 000. What is the profit?', o: ['Rs 100 000', 'Rs 300 000', 'Rs 600 000', 'Rs 1 500 000'], a: 0, why: 'Gross profit 300 000 − expenses 200 000 = Rs 100 000.' },
  { lv: 'O', ref: '5.5', q: 'Current assets Rs 90 000, inventory Rs 30 000, current liabilities Rs 60 000. What is the acid test ratio?', o: ['0.5', '1.0', '1.5', '2.0'], a: 1, why: '(90 000 − 30 000) ÷ 60 000 = 1.0.' },
  { lv: 'O', ref: '6.1', q: 'The central bank raises interest rates. What is the most likely effect on a car dealer?', o: ['Higher sales', 'Lower sales as loans cost more', 'Lower costs', 'No effect'], a: 1, why: 'Cars are often bought on credit, so demand falls.' },
  { lv: 'O', ref: '6.3', q: 'The rupee depreciates against the dollar. Who benefits most?', o: ['A Pakistani importer of machinery', 'A Pakistani exporter of textiles', 'A Pakistani family holidaying abroad', 'A business repaying a dollar loan'], a: 1, why: 'Pakistani goods become cheaper for foreign buyers.' },
  { lv: 'AS', ref: '1.4', q: 'Which objective is SMART?', o: ['Grow the business', 'Become the best brand in Karachi', 'Raise market share from 12% to 15% by December 2027', 'Make customers happier'], a: 2, why: 'Specific, measurable, achievable, relevant and time-bound.' },
  { lv: 'AS', ref: '2.1', q: 'A business had 40 staff on average and 6 left. What is labour turnover?', o: ['6%', '15%', '24%', '40%'], a: 1, why: '6 ÷ 40 × 100 = 15%.' },
  { lv: 'AS', ref: '2.2', q: 'In Vroom’s theory, “valence” refers to…', o: ['Belief that effort leads to performance', 'Belief that performance leads to reward', 'How much the reward is valued', 'The level of pay'], a: 2, why: 'Valence is how much the individual values the reward.' },
  { lv: 'AS', ref: '3.1', q: 'A market grew from Rs 50m to Rs 60m. What was the growth rate?', o: ['10%', '16.7%', '20%', '83%'], a: 2, why: '(60 − 50) ÷ 50 × 100 = 20%.' },
  { lv: 'AS', ref: '3.3', q: 'In the Boston Matrix, a product with high market share in a low-growth market is a…', o: ['Star', 'Cash cow', 'Question mark', 'Dog'], a: 1, why: 'Cash cows generate cash that funds other products.' },
  { lv: 'AS', ref: '4.3', q: 'A factory can make 5 000 units but makes 4 000. What is capacity utilisation?', o: ['20%', '75%', '80%', '125%'], a: 2, why: '4 000 ÷ 5 000 × 100 = 80%.' },
  { lv: 'AS', ref: '5.4', q: 'Which cost is semi-variable?', o: ['Rent', 'Raw materials', 'A phone bill with a fixed line rental plus a charge per call', 'Insurance'], a: 2, why: 'It has a fixed part and a part that varies with use.' },
  { lv: 'AS', ref: '5.5', q: 'Budgeted materials Rs 40 000; actual Rs 46 000. The variance is…', o: ['Rs 6 000 favourable', 'Rs 6 000 adverse', 'Rs 86 000 adverse', 'Zero'], a: 1, why: 'Costs above budget reduce profit: adverse.' },
  { lv: 'A', ref: '6.2', q: 'Launching an existing product in a new country is, in the Ansoff Matrix…', o: ['Market penetration', 'Product development', 'Market development', 'Diversification'], a: 2, why: 'Existing product, new market.' },
  { lv: 'A', ref: '8.1', q: 'Price falls by 10% and quantity demanded rises by 5%. What is PED, and what does it mean?', o: ['−0.5: inelastic', '−2: elastic', '−0.5: elastic', '−2: inelastic'], a: 0, why: '5 ÷ −10 = −0.5. Below 1 (ignoring sign), so inelastic: revenue falls.' },
  { lv: 'A', ref: '10.2', q: 'Non-current liabilities Rs 3m, equity Rs 7m. What is the gearing ratio?', o: ['30%', '43%', '70%', '233%'], a: 0, why: 'Capital employed = 10m. 3 ÷ 10 × 100 = 30%: low gearing.' },
  { lv: 'A', ref: '10.3', q: 'A machine costs Rs 500 000 and returns Rs 200 000 a year. What is the payback period?', o: ['2 years', '2 years 6 months', '3 years', '2 years 4 months'], a: 1, why: 'After 2 years, Rs 100 000 is still needed: 100 ÷ 200 × 12 = 6 months.' },
  { lv: 'A', ref: '10.3', q: 'Total net cash inflows over 4 years are Rs 1.2m on a cost of Rs 800 000. What is the ARR?', o: ['12.5%', '25%', '37.5%', '50%'], a: 0, why: 'Total profit 400 000 ÷ 4 = 100 000 a year. 100 000 ÷ 800 000 × 100 = 12.5%.' }
];

/* ------------------------------------------------------------------ case files
   Real campaigns, read for the syllabus. Facts are as reported in the
   sources listed; the questions are written for this site. */
const CASES = [
  { id: 'kitkat', tag: 'Case file · Marketing 2026', brand: 'KitKat', title: '12 tonnes of KitKat were stolen.', hook: 'And the brand turned the theft into a Cannes Grand Prix.',
    beats: [
      ['The crime', '413,793 Formula 1-themed KitKat bars vanished from a truck between Italy and Poland, days before Easter, the biggest sales window of the year for chocolate.'],
      ['The twist', 'Fans suspected an April Fools’ joke. KitKat answered that the theft was real, in a witty tone that gave the media permission to have fun with it. Crisis communications, played in reverse.'],
      ['The tracker', 'An online tracker let people type the 8-digit batch code from the back of a wrapper to check whether their chocolate came from the stolen batch. Not from it? Keep searching and share, so every check spread the story for free.'],
      ['The results', 'Reported daily views rose from 1M to 29M, with 2.2M tracker engagements, 115+ other brands joining in unpaid, and $224M of earned media in 10 days.']],
    stats: [['1M → 29M', 'daily views'], ['2.2M', 'tracker engagements'], ['115+', 'brands joined in, unpaid'], ['$224M', 'earned media in 10 days']],
    source: 'Agency-reported figures. Sources: WPP Media, LBB Online, Campaign.',
    syl: [['O Level / IGCSE', 'Promotion, public relations, social media marketing', '7081 3.3'], ['A Level', 'Crisis management, brand image, risk against reward', '9609 6.2 · 8.2']],
    q: 'Evaluate KitKat’s decision to publicise the theft rather than handle it privately.',
    marks: 'Plan it like a 12-mark evaluation: one benefit, one risk, each applied to KitKat, then a judgement that says what it depended on.' },
  { id: 'billboards', tag: 'Series · Judging the billboard', brand: 'Karachi roadside', title: 'Read a billboard like an examiner.', hook: 'From his car, on Karachi’s roads, Sir Osama takes one billboard at a time and asks what it is really trying to do.',
    beats: [
      ['An EV launch', 'A Deepal S05 billboard: the car, the name, a short list of claims and a call to book. Who is the target segment, and is a billboard the right medium for a high-price product?'],
      ['A “No.1” claim', 'A Bona Papa billboard calls it “Pakistan’s No.1 Diaper Brand”. What does a claim like that need behind it, and which laws on misleading promotion apply?'],
      ['An app in one line', 'A Find My Doctor billboard: “A doctor, just a tap away”. How do you advertise a service people cannot touch, and what should the call to action be?']],
    stats: [],
    source: 'Billboards as seen in the Judging the Billboard series on @econobuz. The questions are written for this site.',
    syl: [['O Level / IGCSE', 'Promotion, target markets, legal controls on marketing', '7081 3.1 · 3.3 · 3.4'], ['AS & A Level', 'Segmentation, positioning, the marketing mix, marketing strategy', '9609 3.1 · 3.3 · 8.2']],
    q: 'Analyse two ways a billboard campaign could increase sales for a new car brand in Karachi.',
    marks: 'Two developed points, each with a chain of reasoning that ends at sales. Use the brand, the city and the product, not general advertising.' }
];

/* ------------------------------------------------------------------ command words (used on courses and home) */
const CW = [
  ['Identify', 'Name or otherwise characterise.', '1–2'],
  ['Define', 'Give the precise meaning.', '2'],
  ['Outline', 'Set out the main points.', '2–4'],
  ['Explain', 'Set out purposes or reasons; make the relationships between things clear, with supporting evidence.', '4–6'],
  ['Analyse', 'Examine in detail to show meaning, identify elements and the relationships between them.', '6–8'],
  ['Calculate', 'Work out from given facts, figures or information.', '2–4'],
  ['Discuss', 'Write about issues or topics in depth, in a structured way.', '8–12'],
  ['Evaluate', 'Judge or calculate the quality, importance, amount or value of something.', '12–20'],
  ['Recommend', 'Make a justified choice and say why, with what it depends on.', '12']
];

/* flat topic index for search, bot and command palette */
const INDEX = [];
[[O, '7081', 'O Level'], [IG, '0264', 'IGCSE'], [A, '9609', null]].forEach(([S, c, lv]) => S.sections.forEach(sec => sec.topics.forEach(t => {
  INDEX.push({ id: c + '-' + t.n, code: c, n: t.n, t: t.t, sec: sec.t, lvl: sec.lvl || lv, pts: t.pts, terms: t.terms || [], lab: t.lab || null });
})));

return { O, IG, A, SYL: { '7081': O, '0264': IG, '9609': A }, PMETA, AO, RATIOS, CONCEPTS, TERMS, ACCOUNTS, TX, MCQ, CASES, CW, INDEX };
})();

/* =========================================================================
   RA core — utilities, sound, theme, smooth scroll, nav, reveals, tilt,
   cursor, toast, modal, command palette, Buzz the help desk.
   ========================================================================= */
(function () {
'use strict';
const RA = window.RA = window.RA || {};
const C = RA.C = window.RA_CONFIG || {};
if (!C.waUrl) C.waUrl = t => C.whatsapp ? 'https://wa.me/' + C.whatsapp + (t ? '?text=' + encodeURIComponent(t) : '') : (C.instagram || 'contact.html');
const D = RA.DATA;
const $ = RA.$ = (s, r) => (r || document).querySelector(s);
const $$ = RA.$$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const root = document.documentElement;
root.classList.add('js');
RA.RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
RA.FINE = matchMedia('(hover:hover) and (pointer:fine)').matches;
RA.esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
RA.store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { } },
  del(k) { try { localStorage.removeItem(k); } catch (e) { } }
};
RA.fmt = (n, dp) => {
  if (n == null || !isFinite(n)) return '—';
  dp = dp == null ? 0 : dp;
  const s = Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: dp, maximumFractionDigits: dp });
  return n < 0 && Math.abs(n) >= Math.pow(10, -dp) / 2 ? '(' + s + ')' : s;
};
RA.num = v => { const n = parseFloat(String(v).replace(/[^0-9.\-]/g, '')); return isFinite(n) ? n : 0; };
RA.clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const Q = RA._q = RA._q || [];
RA.page = fn => Q.push(fn);

/* ---------------------------------------------------------------- sound */
RA.Snd = (function () {
  let ctx = null, master = null, on = RA.store.get('om-sound', true), last = 0;
  function ensure() {
    if (!on) return null;
    if (!ctx) {
      try { ctx = new (window.AudioContext || window.webkitAudioContext)(); master = ctx.createGain(); master.gain.value = 0.2; master.connect(ctx.destination); }
      catch (e) { return null; }
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }
  function tone(f, dur, type, vol, when, slide) {
    const c = ensure(); if (!c) return;
    const t = c.currentTime + (when || 0), o = c.createOscillator(), g = c.createGain();
    o.type = type || 'sine'; o.frequency.setValueAtTime(f, t);
    if (slide) o.frequency.exponentialRampToValueAtTime(f * slide, t + dur);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol || 0.2, t + 0.008); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(master); o.start(t); o.stop(t + dur + 0.03);
  }
  function noise(dur, vol, freq) {
    const c = ensure(); if (!c) return;
    const len = Math.floor(c.sampleRate * dur), buf = c.createBuffer(1, len, c.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const s = c.createBufferSource(), f = c.createBiquadFilter(), g = c.createGain();
    s.buffer = buf; f.type = 'bandpass'; f.frequency.value = freq || 1200; f.Q.value = 0.8; g.gain.value = vol || 0.2;
    s.connect(f); f.connect(g); g.connect(master); s.start();
  }
  const api = {
    get on() { return on; },
    set(v) { on = !!v; RA.store.set('om-sound', on); if (on) api.chime(); },
    unlock() { if (on) ensure(); },
    tick() { const n = performance.now(); if (n - last < 70) return; last = n; tone(2100, 0.035, 'sine', 0.035); },
    click() { tone(880, 0.06, 'triangle', 0.16); },
    soft() { tone(640, 0.09, 'sine', 0.12); },
    open() { tone(480, 0.14, 'sine', 0.14, 0, 1.6); },
    close() { tone(760, 0.12, 'sine', 0.12, 0, 0.6); },
    chime() { tone(880, 0.35, 'sine', 0.16); tone(1318.5, 0.5, 'sine', 0.12, 0.07); },
    coin() { tone(1568, 0.07, 'square', 0.04); tone(2093, 0.3, 'sine', 0.12, 0.06); tone(2637, 0.35, 'sine', 0.06, 0.12); },
    stamp() { noise(0.12, 0.3, 500); tone(96, 0.18, 'sine', 0.35); },
    err() { tone(220, 0.16, 'sawtooth', 0.08); tone(175, 0.22, 'sawtooth', 0.07, 0.09); },
    whoosh() { noise(0.4, 0.14, 900); },
    alarm() { [0, 0.24, 0.48].forEach(w => tone(1046.5, 0.16, 'square', 0.06, w)); }
  };
  return api;
})();
const Snd = RA.Snd;

/* ---------------------------------------------------------------- theme */
RA.theme = function (t) {
  root.dataset.theme = t; RA.store.set('om-theme', t);
  const m = $('meta[name="theme-color"]'); if (m) m.content = t === 'light' ? '#f3efe2' : '#0a0804';
  $$('[data-theme-btn]').forEach(b => b.setAttribute('aria-pressed', String(t === 'light')));
  if (RA.BG) RA.BG.theme(t);
  document.dispatchEvent(new CustomEvent('ra:theme', { detail: t }));
};

/* ---------------------------------------------------------------- smooth scroll */
function smooth() {
  const ST = window.ScrollTrigger;
  if (window.gsap && ST) gsap.registerPlugin(ST);
  if (!RA.RM && window.Lenis) {
    const lenis = RA.lenis = new Lenis({ duration: 1.35, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true, wheelMultiplier: 0.95 });
    if (window.gsap && ST) { lenis.on('scroll', ST.update); gsap.ticker.add(t => lenis.raf(t * 1000)); gsap.ticker.lagSmoothing(400, 33); }
    else { const raf = t => { lenis.raf(t); requestAnimationFrame(raf); }; requestAnimationFrame(raf); }
  }
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]'); if (!a) return;
    const h = a.getAttribute('href'); if (h.length < 2) return;
    const el = document.getElementById(decodeURIComponent(h.slice(1))); if (!el) return;
    e.preventDefault(); RA.go(el); history.replaceState(null, '', h);
  });
}
RA.go = function (target, offset) {
  if (typeof target === 'string') target = $(target);
  if (target == null) return;
  offset = offset == null ? -96 : offset;
  if (RA.lenis) RA.lenis.scrollTo(target, { offset, duration: 1.3 });
  else if (typeof target === 'number') scrollTo({ top: target, behavior: RA.RM ? 'auto' : 'smooth' });
  else scrollTo({ top: target.getBoundingClientRect().top + scrollY + offset, behavior: RA.RM ? 'auto' : 'smooth' });
};
RA.lock = function (on) {
  if (RA.lenis) on ? RA.lenis.stop() : RA.lenis.start();
  document.body.style.overflow = on ? 'hidden' : '';
};

/* ---------------------------------------------------------------- nav + menu */
function nav() {
  const n = $('.nav'); if (!n) return;
  let lastY = scrollY;
  const upd = () => {
    const y = scrollY;
    n.classList.toggle('solid', y > 30);
    const mb = $('.mbar'); if (mb) { const end = y + innerHeight > document.documentElement.scrollHeight - 160; mb.classList.toggle('mb-hide', y > 240 && y > lastY + 2 && !end); if (y < lastY - 2 || end) mb.classList.remove('mb-hide'); }
    if (!root.classList.contains('menu-open')) n.classList.toggle('hide', y > 260 && y > lastY + 2);
    if (y < lastY - 2) n.classList.remove('hide');
    lastY = y;
  };
  addEventListener('scroll', upd, { passive: true }); upd();
  const burger = $('.burger'), menu = $('.menu');
  if (!burger || !menu) return;
  $$('nav a', menu).forEach((a, i) => a.style.transitionDelay = (0.12 + i * 0.045) + 's');
  const set = open => {
    root.classList.toggle('menu-open', open); burger.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-hidden', String(!open)); RA.lock(open); open ? Snd.open() : Snd.close();
    if (open) n.classList.remove('hide');
  };
  burger.addEventListener('click', () => set(!root.classList.contains('menu-open')));
  document.addEventListener('pointerdown', e => { if (root.classList.contains('menu-open') && !e.target.closest('.menu,.burger')) set(false); });
  menu.addEventListener('click', e => { if (e.target.closest('a')) set(false); });
  addEventListener('keydown', e => { if (e.key === 'Escape' && root.classList.contains('menu-open')) set(false); });
}

/* ---------------------------------------------------------------- reveals */
function splitWords(el) {
  if (el.dataset.splitDone) return; el.dataset.splitDone = '1';
  let i = 0;
  const walk = node => {
    Array.from(node.childNodes).forEach(ch => {
      if (ch.nodeType === 3) {
        if (!ch.textContent.trim()) return;
        const frag = document.createDocumentFragment();
        ch.textContent.split(/(\s+)/).forEach(p => {
          if (!p) return;
          if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(' ')); return; }
          const o = document.createElement('span'); o.className = 'slw';
          const w = document.createElement('span'); w.className = 'sw';
          Array.from(p).forEach(c => { const s = document.createElement('span'); s.className = 'sc'; s.style.setProperty('--i', i++); s.textContent = c; w.appendChild(s); });
          o.appendChild(w); frag.appendChild(o);
        });
        ch.replaceWith(frag);
      } else if (ch.nodeType === 1 && ch.tagName !== 'BR' && !ch.hasAttribute('data-nosplit')) walk(ch);
    });
  };
  if (!el.hasAttribute('aria-label') && /^H[1-6]$/.test(el.tagName)) el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
  walk(el);
}
RA.split = splitWords;
RA.reveal = function (scope) {
  $$('.ph', scope).forEach(p => { if (!p.closest('.ldx,.pt') && !p.classList.contains('wp')) p.classList.add('wp'); });
  $$('.hero-fig .portrait', scope).forEach(p => p.classList.add('wp'));
  const els = $$('[data-rv],[data-split],.wp,.hair', scope).filter(e => !e.classList.contains('in'));
  /* text is never split or hidden: headings and paragraphs show the moment the page paints */
  els.forEach(e => { if (e.hasAttribute('data-split')) { e.dataset.splitDone = '1'; e.classList.add('in'); } });
  const vh = innerHeight;
  const later = els.filter(e => { if (e.hasAttribute('data-split')) return false; const r = (e.classList.contains('wp') && e.parentElement ? e.parentElement : e).getBoundingClientRect(); return r.top > vh * 0.98 && !RA.RM; });
  els.forEach(e => { if (!e.hasAttribute('data-split') && later.indexOf(e) < 0) e.classList.add('in'); });
  later.forEach(e => e.classList.add('rv-wait'));
  els.length = 0; later.forEach(e => els.push(e));
  if (RA.RM || !('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
  const io = RA._io || (RA._io = new IntersectionObserver(es => {
    const hit = es.filter(en => en.isIntersecting).map(en => en.target);
    hit.sort((a, b) => { const ra = a.getBoundingClientRect(), rb = b.getBoundingClientRect(); return (ra.top - rb.top) || (ra.left - rb.left); });
    let k = 0;
    hit.forEach(t => {
      if (t.matches('.card[data-rv],.proc-s,[data-rv="scale"]') && !t.style.getPropertyValue('--d')) t.style.setProperty('--d', (Math.min(k++, 6) * 0.09).toFixed(2) + 's');
      t.classList.add('in'); RA._io.unobserve(t);
      if (t.matches('.folio,.eyebrow')) decode(t); else $$('.folio,.eyebrow', t).forEach(decode);
    });
  }, { rootMargin: '0px 0px -7% 0px', threshold: 0.06 }));
  /* a clip-path:inset(100%) photo has zero visible area and Chrome's observer counts that, so watch its parent instead */
  const iow = RA._iow || (RA._iow = new IntersectionObserver(es => es.forEach(en => {
    if (!en.isIntersecting) return; (en.target._wp || []).forEach(w => w.classList.add('in')); en.target._wp = null; RA._iow.unobserve(en.target);
  }), { rootMargin: '0px 0px -7% 0px', threshold: 0 }));
  els.forEach(e => {
    if (e.classList.contains('wp') && e.parentElement) { const h = e.parentElement; (h._wp || (h._wp = [])).push(e); iow.observe(h); }
    else io.observe(e);
  });
  $$('.folio,.eyebrow', scope).forEach(f => { if (!f._dec && !f.closest('[data-rv],.sec-head .meta')) decodeOnView(f); });
  $$('.sec-head .meta', scope).forEach(m => { const f = $('.folio', m); if (f && !f._dec) decodeOnView(f); });
};
/* labels decode like a reading settling */
const GLYPH = 'ABCDEFGHJKLMNPRSTUVWXYZ0123456789#/+=';
function decode(el) {
  if (!el || el._dec) return; el._dec = 1; return;
  const nodes = []; const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT); let n; while ((n = w.nextNode())) if (n.textContent.trim()) nodes.push([n, n.textContent]);
  const total = nodes.reduce((a, x) => a + x[1].length, 0); if (!total) return;
  const t0 = performance.now(), dur = Math.min(1100, 380 + total * 22);
  const step = now => {
    const p = Math.min(1, (now - t0) / dur); let off = 0;
    nodes.forEach(([node, txt]) => {
      let out = '';
      for (let i = 0; i < txt.length; i++) { const c = txt[i], q = (off + i) / total; out += (p >= 1 || q < p * 1.15 - 0.15 || /[\s·—–&.,:;()'’]/.test(c)) ? c : GLYPH[(Math.random() * GLYPH.length) | 0]; }
      node.textContent = out; off += txt.length;
    });
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
function decodeOnView(el) {
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { decode(en.target); io.disconnect(); } }), { threshold: 0.6 });
  io.observe(el);
}
function counters() {
  const els = $$('[data-count]'); if (!els.length) return;
  const run = el => {
    const end = parseFloat(el.dataset.count), dp = (el.dataset.count.split('.')[1] || '').length, dur = 1600, t0 = performance.now();
    const step = t => { const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 4); el.textContent = (end * e).toLocaleString('en-US', { minimumFractionDigits: dp, maximumFractionDigits: dp }); if (p < 1) requestAnimationFrame(step); };
    if (RA.RM) el.textContent = end.toLocaleString('en-US'); else requestAnimationFrame(step);
  };
  const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } }), { threshold: 0.4 });
  els.forEach(e => io.observe(e));
}

/* ---------------------------------------------------------------- tilt, magnetic, cursor */
RA.tilt = function (scope) {
  $$('[data-tilt]', scope).forEach(el => {
    if (el._tilt) return; el._tilt = 1;
    if (!$('.sheen', el) && el.classList.contains('card')) { const s = document.createElement('i'); s.className = 'sheen'; el.prepend(s); }
    if (!RA.FINE || RA.RM) return;
    const max = parseFloat(el.dataset.tilt) || 5;
    let raf = 0;
    el.addEventListener('pointermove', e => {
      const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      el.style.setProperty('--mx', (x * 100).toFixed(1) + '%'); el.style.setProperty('--my', (y * 100).toFixed(1) + '%');
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => { el.style.transform = 'perspective(1100px) rotateX(' + ((0.5 - y) * max).toFixed(2) + 'deg) rotateY(' + ((x - 0.5) * max).toFixed(2) + 'deg) translateZ(0)'; });
    });
    el.addEventListener('pointerleave', () => { cancelAnimationFrame(raf); el.style.transform = ''; });
  });
};
function autoTilt() {
  $$('.card').forEach(c => { if (c.hasAttribute('data-tilt') || c.closest('.vpanel,form,[data-rail],[data-stack]') || $('input,select,textarea,table,canvas', c)) return; c.setAttribute('data-tilt', '3.5'); });
}
function magnetic() {
  if (!RA.FINE || RA.RM) return;
  $$('[data-mag]').forEach(el => {
    el.addEventListener('pointermove', e => { const r = el.getBoundingClientRect(); el.style.transform = 'translate(' + ((e.clientX - r.left - r.width / 2) * 0.22).toFixed(1) + 'px,' + ((e.clientY - r.top - r.height / 2) * 0.3).toFixed(1) + 'px)'; });
    el.addEventListener('pointerleave', () => { el.style.transform = ''; });
  });
}
function cursor() {
  if (!RA.FINE || RA.RM) return;
  const c = $('.cursor'); if (!c) return;
  const dot = $('.c-dot', c), ring = $('.c-ring', c);
  let x = -100, y = -100, rx = -100, ry = -100, shown = false;
  addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse') return; x = e.clientX; y = e.clientY;
    if (!shown) { shown = true; rx = x; ry = y; root.classList.add('has-cursor'); }
    c.classList.toggle('hover', !!e.target.closest('a,button,[role=button],input,select,textarea,label,[data-tilt]'));
  }, { passive: true });
  addEventListener('pointerdown', () => c.classList.add('down')); addEventListener('pointerup', () => c.classList.remove('down'));
  document.addEventListener('mouseleave', () => c.classList.add('gone')); document.addEventListener('mouseenter', () => c.classList.remove('gone'));
  (function f() { rx += (x - rx) * 0.2; ry += (y - ry) * 0.2; dot.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)'; ring.style.transform = 'translate3d(' + rx.toFixed(1) + 'px,' + ry.toFixed(1) + 'px,0)'; requestAnimationFrame(f); })();
}
function uiSounds() {
  addEventListener('pointerdown', () => Snd.unlock(), { once: true });
  if (RA.FINE) document.addEventListener('pointerover', e => {
    const t = e.target.closest('a,button'); if (!t || (e.relatedTarget && t.contains(e.relatedTarget))) return; Snd.tick();
  });
  document.addEventListener('click', e => { if (e.target.closest('a,button:not([data-nosnd])')) Snd.click(); });
}

/* ---------------------------------------------------------------- toast + modal */
RA.toast = function (msg, ms) {
  let box = $('.toasts'); if (!box) { box = document.createElement('div'); box.className = 'toasts'; box.setAttribute('role', 'status'); box.setAttribute('aria-live', 'polite'); document.body.appendChild(box); }
  const t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; box.appendChild(t);
  setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 420); }, ms || 2600);
};
RA.modal = function (html) {
  const m = $('#modal'); if (!m) return;
  $('#modalBody').innerHTML = html; m.classList.add('open'); m.setAttribute('aria-hidden', 'false'); RA.lock(true); Snd.open();
  const f = $('input,select,textarea,button:not(.xbtn)', $('#modalBody')); setTimeout(() => f && f.focus(), 60);
};
RA.closeModal = function () {
  const m = $('#modal'); if (!m || !m.classList.contains('open')) return;
  m.classList.remove('open'); m.setAttribute('aria-hidden', 'true'); RA.lock(false); Snd.close();
  setTimeout(() => { if (!m.classList.contains('open')) { $('#modalBody').innerHTML = ''; const b = $('.modal-box', m); if (b) b.classList.remove('wide'); } }, 420);
};
function modalWire() {
  const m = $('#modal'); if (!m) return;
  m.addEventListener('click', e => { if (e.target.closest('[data-close]')) RA.closeModal(); });
  addEventListener('keydown', e => { if (e.key === 'Escape') RA.closeModal(); });
}

/* ---------------------------------------------------------------- config binding */
function bindConfig() {
  $$('[data-wa]').forEach(a => { a.href = C.waUrl(a.dataset.wa || ''); a.target = '_blank'; a.rel = 'noopener'; });
  $$('[data-cfg]').forEach(el => { const v = C[el.dataset.cfg]; if (v) el.textContent = v; });
  $$('[data-href]').forEach(a => { const v = C[a.dataset.href]; if (v) { a.href = v; a.target = '_blank'; a.rel = 'noopener'; } else a.hidden = true; });
  $$('[data-need]').forEach(el => { if (!C[el.dataset.need]) el.hidden = true; });
  $$('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
}

/* ---------------------------------------------------------------- dock */
function dock() {
  const d = $('.dock'); if (!d) return;
  $$('[data-theme-btn]').forEach(b => { b.setAttribute('aria-pressed', String(root.dataset.theme === 'light')); b.addEventListener('click', () => RA.theme(root.dataset.theme === 'light' ? 'dark' : 'light')); });
  const sb = $('[data-sound-btn]');
  if (sb) {
    const paint = () => { sb.setAttribute('aria-pressed', String(Snd.on)); sb.innerHTML = Snd.on ? ICON.sound : ICON.mute; sb.setAttribute('aria-label', Snd.on ? 'Turn sound off' : 'Turn sound on'); };
    paint(); sb.addEventListener('click', () => { Snd.set(!Snd.on); paint(); RA.toast(Snd.on ? 'Sound on' : 'Sound off', 1400); });
  }
  $$('[data-sound-toggle]').forEach(t => { const p = () => { t.textContent = Snd.on ? 'Sound: on' : 'Sound: off'; t.setAttribute('aria-pressed', String(Snd.on)); }; p(); t.addEventListener('click', () => { Snd.set(!Snd.on); p(); const sb = $('[data-sound-btn]'); if (sb) sb.innerHTML = Snd.on ? ICON.sound : ICON.mute; }); });
  const top = $('[data-top-btn]'), ring = top && $('circle', top);
  if (top) {
    const upd = () => { const h = document.documentElement.scrollHeight - innerHeight, p = h > 0 ? scrollY / h : 0; if (ring) ring.style.setProperty('--off', (100.5 * (1 - p)).toFixed(1)); };
    addEventListener('scroll', upd, { passive: true }); upd();
    top.addEventListener('click', () => RA.go(0, 0));
  }
}
const ICON = RA.ICON = {
  sound: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/></svg>',
  mute: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H3v6h3l5 4z"/><path d="m16 9 5 6M21 9l-5 6"/></svg>',
  arrow: '<svg class="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.8-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.2.1.7-.1 1.3z"/></svg>',
  send: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
};

/* ---------------------------------------------------------------- command palette */
function cmdk() {
  const box = $('#cmdk'); if (!box) return;
  const inp = $('#cmdkIn'), list = $('#cmdkList');
  const PAGES = [['Home', 'index.html', 'Start'], ['Courses', 'courses.html', '7081 · 0264 · 9609 papers'], ['Syllabus tracker', 'syllabus.html', 'Every topic'], ['Case files', 'cases.html', 'Real campaigns'], ['Past papers', 'past-papers.html', 'QP · MS · timer'],
    ['Business Lab', 'lab.html', 'Calculators and practice'], ['Student portal', 'portal.html', 'Your study desk'], ['About Sir Osama', 'about.html', 'Story'], ['Contact & enrol', 'contact.html', 'WhatsApp']];
  const TOOLS = [['be', 'Break-even studio'], ['ratio', 'Ratio analysis'], ['cash', 'Cash-flow forecast'], ['inv', 'Investment appraisal (payback, ARR, NPV)'], ['ped', 'Price elasticity'], ['mix', 'Billboard judge'], ['which', 'Which formula?'], ['quiz', 'Quick-check quiz'], ['flash', 'Key-term flashcards']];
  const items = [];
  PAGES.forEach(p => items.push({ g: 'Pages', i: '→', t: p[0], s: p[2], go: p[1] }));
  TOOLS.forEach(t => items.push({ g: 'Lab tools', i: 'LAB', t: t[1], s: 'lab', go: 'lab.html#' + t[0] }));
  if (D && D.CASES) D.CASES.forEach(c => items.push({ g: 'Case files', i: 'CASE', t: c.title, s: c.brand, go: 'cases.html#' + c.id }));
  if (D) D.INDEX.forEach(t => items.push({ g: 'Syllabus topics', i: t.code, t: t.n + '  ' + t.t, s: t.lvl, go: 'syllabus.html#t-' + t.code + '-' + t.n, k: t.terms.join(' ') + ' ' + t.sec }));
  items.push({ g: 'Actions', i: '♪', t: 'Sound on / off', s: 'sound', fn: () => { const b = $('[data-sound-btn]'); b ? b.click() : Snd.set(!Snd.on); } });
  items.push({ g: 'Actions', i: '⏱', t: 'Time a 9609 Paper 1 (1h 15m)', s: 'timer', go: 'past-papers.html#t-9609-1' });
  items.push({ g: 'Actions', i: '⏱', t: 'Time a 7115 Paper 2 (1h 30m)', s: 'timer', go: 'past-papers.html#t-7115-2' });
  items.push({ g: 'Actions', i: 'WA', t: 'Message Sir Osama on WhatsApp', s: 'enrol', go: C.waUrl('Assalam o Alaikum Sir, I found your website and would like to enrol in Business.'), ext: 1 });
  let shown = [], sel = 0;
  function render() {
    const q = inp.value.trim().toLowerCase(), toks = q.split(/\s+/).filter(Boolean);
    shown = items.filter(it => { const h = (it.t + ' ' + it.s + ' ' + (it.k || '') + ' ' + it.g).toLowerCase(); return toks.every(t => h.includes(t)); });
    if (!q) shown = shown.filter(it => it.g !== 'Syllabus topics').concat(items.filter(it => it.g === 'Syllabus topics').slice(0, 6));
    shown = shown.slice(0, 40); sel = 0;
    let g = '', html = '';
    shown.forEach((it, i) => { if (it.g !== g) { g = it.g; html += '<div class="cmdk-grp">' + RA.esc(g) + '</div>'; } html += '<button type="button" class="cmdk-item" role="option" data-i="' + i + '" aria-selected="' + (i === 0) + '"><i>' + RA.esc(it.i) + '</i><span>' + RA.esc(it.t) + '</span><small>' + RA.esc(it.s) + '</small></button>'; });
    list.innerHTML = html || '<div class="empty" style="margin:8px">Nothing matches “' + RA.esc(q) + '”. Try a topic like “break-even”.</div>';
  }
  function pick(i) { const it = shown[i]; if (!it) return; close(); if (it.fn) return it.fn(); if (it.ext) return window.open(it.go, '_blank', 'noopener'); location.href = it.go; }
  function move(d) { const b = $$('.cmdk-item', list); if (!b.length) return; sel = (sel + d + b.length) % b.length; b.forEach((x, i) => x.setAttribute('aria-selected', String(i === sel))); b[sel].scrollIntoView({ block: 'nearest' }); }
  function open() { box.classList.add('open'); box.setAttribute('aria-hidden', 'false'); inp.value = ''; render(); setTimeout(() => inp.focus(), 30); RA.lock(true); Snd.open(); }
  function close() { if (!box.classList.contains('open')) return; box.classList.remove('open'); box.setAttribute('aria-hidden', 'true'); RA.lock(false); }
  RA.cmdk = open;
  inp.addEventListener('input', render);
  inp.addEventListener('keydown', e => { if (e.key === 'ArrowDown') { e.preventDefault(); move(1); } else if (e.key === 'ArrowUp') { e.preventDefault(); move(-1); } else if (e.key === 'Enter') { e.preventDefault(); pick(sel); } });
  list.addEventListener('click', e => { const b = e.target.closest('.cmdk-item'); if (b) pick(+b.dataset.i); });
  box.addEventListener('click', e => { if (e.target.classList.contains('scrim')) close(); });
  addEventListener('keydown', e => {
    const typing = /INPUT|TEXTAREA|SELECT/.test((document.activeElement || {}).tagName || '');
    if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && !typing)) { e.preventDefault(); box.classList.contains('open') ? close() : open(); }
    else if (e.key === 'Escape') close();
  });
  $$('[data-cmdk]').forEach(b => b.addEventListener('click', open));
}

/* ---------------------------------------------------------------- Buzz, the help desk */
function bot() {
  const fab = $('.fab'), box = $('#bot'); if (!fab || !box) return;
  const log = $('.bot-log', box), form = $('.bot-f', box), inp = $('input', form);
  let level = RA.store.get('om-level', null), greeted = false;
  const wa = q => '<a class="btn btn-xs btn-pri" target="_blank" rel="noopener" href="' + RA.esc(C.waUrl(q)) + '">' + ICON.wa + ' Ask on ' + RA.esc(C.waLabel || 'WhatsApp') + '</a>';
  const lnk = (h, t) => '<a class="btn btn-xs" href="' + h + '">' + RA.esc(t) + '</a>';
  function say(html, who) {
    const m = document.createElement('div'); m.className = 'msg ' + (who || 'b'); m.innerHTML = html; log.appendChild(m);
    log.scrollTop = log.scrollHeight; return m;
  }
  function reply(html) {
    const t = say('<i></i><i></i><i></i>', 'b typing');
    setTimeout(() => { t.remove(); say(html); Snd.soft(); }, RA.RM ? 50 : 380 + Math.random() * 260);
  }
  function lvlName(l) { return { '7081': 'O Level Business', '0264': 'IGCSE Business', '9609-AS': 'AS Business 9609', '9609-A2': 'A2 Business 9609' }[l] || ''; }
  const LVBTN = '<div class="mrow"><button class="chip" data-lv="7081">O Level</button><button class="chip" data-lv="0264">IGCSE</button><button class="chip" data-lv="9609-AS">AS</button><button class="chip" data-lv="9609-A2">A2</button></div>';
  const rules = [
    [/^(hi|hello|hey|salam|assalam|aoa|asalam|slam)\b/, () => 'Wa alaikum assalam. I’m Buzz, the help desk on Sir Osama’s site. Ask me about classes, a syllabus topic, a formula or a past paper.' + (level ? '' : LVBTN)],
    [/(fee|fees|price|cost of class|charges|kitni|how much)/, q => 'Fees depend on your level, the campus and the batch, so Sir Osama’s team quotes them directly' + (level ? '. Mention you are ' + lvlName(level) : '') + '.<div class="mrow">' + wa('Assalam o Alaikum Sir, what is the fee for ' + (lvlName(level) || 'Business') + ' classes?') + '</div>'],
    [/(timing|time table|timetable|schedule|batch|when.*class|class.*when|days)/, q => 'Batches run at EVO Institute in Bahadurabad, Success Institute in North Nazimabad, and online. Ask for the current timetable:<div class="mrow">' + wa('Assalam o Alaikum Sir, what are the class timings for ' + (lvlName(level) || 'Business') + '?') + '</div>'],
    [/(online|on-site|onsite|physical|campus|where|location|address|evo|success|nexgen|titan|axora|centre|center|bahadurabad|nazimabad)/, () => {
      const cs = (C.campuses || []).map(c => '<b>' + RA.esc(c.name) + '</b> — ' + RA.esc(c.note || '')).join('<br>');
      return 'Sir Osama teaches at more than one place, and online.' + (cs ? '<br><br>' + cs : '') + '<div class="mrow">' + lnk('about.html#where', 'Where he teaches') + wa('Assalam o Alaikum Sir, where can I join your Business classes?') + '</div>'; }],
    [/(enrol|enroll|register|admission|join|seat|sign up)/, () => 'Fill in the enrolment form and it opens a ready-written WhatsApp message to Sir Osama.<div class="mrow">' + lnk('contact.html#enrol', 'Enrolment form') + wa('Assalam o Alaikum Sir, I would like to enrol for ' + (lvlName(level) || 'Business') + '.') + '</div>'],
    [/(portal|login|log in|student id|access code|dashboard)/, () => 'The student portal keeps lectures, announcements and marks for enrolled students. This is a preview: sign in with the demo ID shown on the portal page.<div class="mrow">' + lnk('portal.html', 'Open the portal') + '</div>'],
    [/(case|campaign|kitkat|billboard|advert|marketing example)/, () => 'Case files take a real campaign and read it for the syllabus: what happened, the topics it covers, and an exam question to practise.<div class="mrow">' + lnk('cases.html', 'Open the case files') + '</div>'],
    [/(result|40\/40|a\*|grade)/, () => 'Three of his AS students posted 40/40 on 9609 Paper 12 in the June 2026 series. The marks reports are on the home page.<div class="mrow">' + lnk('index.html#results', 'See the results') + '</div>'],
    [/(youtube|video|lecture|watch|reel|instagram)/, () => 'Sir Osama posts as EconoBuz on Instagram and YouTube: case files, the Judging the Billboard series and exam tips. Enrolled students get lectures filed by topic in the portal.<div class="mrow">' + (C.instagram ? '<a class="btn btn-xs" target="_blank" rel="noopener" href="' + RA.esc(C.instagram) + '">@econobuz</a>' : '') + lnk('portal.html', 'Student portal') + '</div>'],
    [/(contact|number|phone|call|whatsapp)/, () => (C.phoneDisplay ? 'WhatsApp or call <b>' + RA.esc(C.phoneDisplay) + '</b>.' : 'Message Sir Osama on WhatsApp.') + '<div class="mrow">' + wa('Assalam o Alaikum Sir') + lnk('contact.html', 'All contacts') + '</div>'],
    [/(thank|thanks|shukria|jazak)/, () => 'Any time. Apply every point to the business in the question.'],
    [/\b(lab|tool|calculator|practice|quiz)\b/, () => 'The Business Lab has a break-even studio, ratio analysis, a cash-flow forecast, investment appraisal, price elasticity, a billboard judge, a which-formula trainer, a quick-check quiz and flashcards.<div class="mrow">' + lnk('lab.html', 'Open the Lab') + '</div>']
  ];
  function paperQ(q) {
    const code = /9609|a ?level|as\b|a2/.test(q) ? '9609' : (/0450|0264|igcse/.test(q) ? '0450' : (/7115|7081|o ?level/.test(q) ? '7115' : null));
    const pm = q.match(/paper\s*([1-4])/); if (!pm || !D) return null;
    const c = code || (level && level.startsWith('9609') ? '9609' : '7115'), p = D.PMETA[c].papers[pm[1]];
    if (!p) return D.PMETA[c].name + ' ' + c + ' has no Paper ' + pm[1] + '.';
    const h = Math.floor(p.min / 60), m = p.min % 60;
    return '<b>' + c + ' Paper ' + pm[1] + ' · ' + p.n + '</b><br>' + (h ? h + ' h ' : '') + (m ? m + ' min' : '') + ' · ' + p.m + ' marks · ' + p.w + '<br><span class="muted">' + RA.esc(p.note) + '</span><div class="mrow">' + lnk('past-papers.html#t-' + c + '-' + pm[1], 'Time one now') + lnk('past-papers.html#p-' + c, 'Past papers') + '</div>';
  }
  function ratioQ(q) {
    if (!D) return null;
    const r = D.RATIOS.find(r => q.includes(r.n.toLowerCase()) || (r.id === 'be' && /break[ -]?even/.test(q)) || (r.id === 'roce' && /\broce\b/.test(q)) || (r.id === 'ped' && /\bped\b|elasticity/.test(q)) || (r.id === 'arr' && /\barr\b/.test(q)) || (r.id === 'npv' && /\bnpv\b/.test(q)) || (r.id === 'at' && /acid/.test(q)));
    if (!r) return null;
    return '<b>' + RA.esc(r.n) + '</b><br><code>' + RA.esc(r.f) + '</code>' + (r.sym ? '<br><span class="muted">' + RA.esc(r.sym) + '</span>' : '') + (r.u ? '<br><span class="muted">Answer in: ' + RA.esc(r.u) + '</span>' : '') + '<br><span class="muted">Level: ' + lvTxt(r.lv) + '</span><div class="mrow">' + lnk('syllabus.html#eqs', 'Formula sheet') + '</div>';
  }
  function lvTxt(lv) { const m = { O: 'O Level · IGCSE', AS: 'AS', A: 'A Level' }; return lv.split(' ').map(x => m[x]).join(' · '); }
  function termQ(q) {
    if (!D) return null;
    const s = q.replace(/^(what is|what are|what's|define|meaning of|explain)\s+(an?\s+|the\s+)?/, '').replace(/[?.!]/g, '').trim();
    if (s.length < 3) return null;
    const all = D.CONCEPTS.map(c => [c[0], c[1], 'theory']).concat(D.TERMS.map(t => [t[0], t[1], 'term']));
    const hit = all.find(t => t[0].toLowerCase() === s) || all.find(t => t[0].toLowerCase().startsWith(s)) || all.find(t => s.includes(t[0].toLowerCase().split(/[’']/)[0]) && t[0].length > 4);
    return hit ? '<b>' + RA.esc(hit[0]) + '</b>' + (hit[2] === 'theory' ? ' <span class="tag" style="height:20px">theory</span>' : '') + '<br>' + RA.esc(hit[1]) + '<div class="mrow">' + lnk('lab.html#flash', 'Flashcards') + '</div>' : null;
  }
  function topicQ(q) {
    if (!D) return null;
    const toks = q.toLowerCase().replace(/[^a-z0-9.\s]/g, ' ').split(/\s+/).filter(t => t.length > 3 && !/(what|about|topic|syllabus|explain|which|level|business|there|with|have|does|teach)/.test(t));
    if (!toks.length) return null;
    let best = null, bs = 0;
    D.INDEX.forEach(t => { const h = (t.t + ' ' + t.terms.join(' ') + ' ' + t.pts.join(' ')).toLowerCase(); let s = 0; toks.forEach(k => { if (t.t.toLowerCase().includes(k)) s += 3; else if (h.includes(k)) s += 1; }); if (level && t.code === level.slice(0, 4)) s += 0.5; if (s > bs) { bs = s; best = t; } });
    if (!best || bs < 3) return null;
    return '<b>' + best.code + ' · ' + best.n + ' ' + RA.esc(best.t) + '</b><br>' + best.pts.slice(0, 3).map(p => '• ' + RA.esc(p)).join('<br>') + '<div class="mrow">' + lnk('syllabus.html#t-' + best.code + '-' + best.n, 'Open in syllabus') + (best.lab ? lnk('lab.html#' + best.lab, 'Try it in the Lab') : '') + '</div>';
  }
  function answer(raw) {
    const q = raw.toLowerCase().trim();
    if (/^(7081|7115|o ?level)$/.test(q)) { level = '7081'; RA.store.set('om-level', level); }
    if (/^(0264|0450|igcse)$/.test(q)) { level = '0264'; RA.store.set('om-level', level); }
    if (/^(9609|as|as level)$/.test(q)) { level = '9609-AS'; RA.store.set('om-level', level); }
    const p = paperQ(q); if (p) return p;
    const r = ratioQ(q); if (r) return r;
    for (const [re, fn] of rules) if (re.test(q)) return fn(q);
    if (/^(what|define|meaning|explain)/.test(q)) { const t = termQ(q); if (t) return t; }
    const tp = topicQ(q); if (tp) return tp;
    const t2 = termQ(q); if (t2) return t2;
    if (/7115|7081/.test(q)) return '<b>O Level Business</b>: Paper 1 Short Answer and Data Response and Paper 2 Case Study, each 1 h 30 min, 80 marks and 50%. 7081 replaces 7115 from 2027.<div class="mrow">' + lnk('courses.html#c7081', 'Course details') + '</div>';
    if (/0450|0264/.test(q)) return '<b>IGCSE Business</b>: the same two papers as O Level, graded A* to G. 0264 replaces 0450 from 2027.<div class="mrow">' + lnk('courses.html#c0264', 'Course details') + '</div>';
    if (/9609/.test(q)) return '<b>AS & A Level Business 9609</b>: AS is Papers 1 and 2; the full A Level adds Paper 3 (Business Decision-Making) and Paper 4 (Business Strategy).<div class="mrow">' + lnk('courses.html#c9609', 'Course details') + '</div>';
    return 'I don’t have a confident answer for that one. Sir Osama will:<div class="mrow">' + wa(raw) + '</div>';
  }
  function open() {
    box.classList.add('open'); box.setAttribute('aria-hidden', 'false'); fab.setAttribute('aria-expanded', 'true'); Snd.open();
    if (!greeted) { greeted = true; reply('Assalam o Alaikum. I’m Buzz, the help desk on Sir Osama’s site.' + (level ? ' You’re set as <b>' + lvlName(level) + '</b>.' : ' Which level are you?' + LVBTN)); }
    setTimeout(() => inp.focus(), 80);
  }
  function close() { box.classList.remove('open'); box.setAttribute('aria-hidden', 'true'); fab.setAttribute('aria-expanded', 'false'); Snd.close(); }
  RA.bot = { open, ask: q => { open(); setTimeout(() => { say(RA.esc(q), 'u'); reply(answer(q)); }, 200); } };
  fab.addEventListener('click', () => box.classList.contains('open') ? close() : open());
  $$('[data-ask]').forEach(b => b.addEventListener('click', () => fab.click()));
  $('.xbtn', box).addEventListener('click', close);
  addEventListener('keydown', e => { if (e.key === 'Escape' && box.classList.contains('open')) close(); });
  form.addEventListener('submit', e => { e.preventDefault(); const v = inp.value.trim(); if (!v) return; inp.value = ''; say(RA.esc(v), 'u'); reply(answer(v)); });
  box.addEventListener('click', e => {
    const lv = e.target.closest('[data-lv]');
    if (lv) { level = lv.dataset.lv; RA.store.set('om-level', level); say(RA.esc(lv.textContent), 'u'); reply('Noted: <b>' + lvlName(level) + '</b>. Ask me about fees, timings, a topic, a formula or a paper.'); return; }
    const c = e.target.closest('.bot-chips .chip'); if (c) { const q = c.dataset.q || c.textContent; say(RA.esc(q), 'u'); reply(answer(q)); }
  });
}

/* ---------------------------------------------------------------- rails: horizontal galleries */
const CHEV = d => '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="' + (d < 0 ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7') + '"/></svg>';
function setVW() { root.style.setProperty('--vw', root.clientWidth + 'px'); }
setVW(); addEventListener('resize', setVW);
RA.rails = function (scope) {
  $$('[data-rail]', scope).forEach(track => {
    if (track._rail) { track._rail(); return; }
    const mode = track.dataset.rail;
    track.classList.add('rail');
    const ctl = document.createElement('div');
    ctl.className = 'rail-ctl' + (/^[mtc]$/.test(mode) ? ' rail-ctl-' + mode : '');
    ctl.innerHTML = '<span class="rail-n"><b>01</b> / <i>01</i></span><span class="rail-bar" aria-hidden="true"><i></i></span><span class="rail-btns">' +
      '<button type="button" class="rail-b" data-d="-1" aria-label="Previous">' + CHEV(-1) + '</button><button type="button" class="rail-b" data-d="1" aria-label="Next">' + CHEV(1) + '</button></span>';
    (track.dataset.railAfter ? $(track.dataset.railAfter) || track : track).after(ctl);
    const n = $('.rail-n b', ctl), tot = $('.rail-n i', ctl), bar = $('.rail-bar i', ctl), prev = $('[data-d="-1"]', ctl), next = $('[data-d="1"]', ctl);
    const items = () => Array.from(track.children).filter(c => c.offsetParent !== null || c.getClientRects().length);
    let raf = 0;
    const upd = () => {
      raf = 0;
      const pl = getComputedStyle(track).paddingLeft; if (track.style.scrollPaddingInline !== pl) track.style.scrollPaddingInline = pl;
      const sw = track.scrollWidth, cw = track.clientWidth, max = sw - cw, x = track.scrollLeft;
      const scrolls = getComputedStyle(track).overflowX !== 'visible' && max > 4;
      ctl.style.display = scrolls ? '' : 'none';
      if (!scrolls) return;
      const its = items(); const pad = parseFloat(getComputedStyle(track).paddingLeft) || 0;
      let idx = 0; its.forEach((it, i) => { if (it.offsetLeft - pad <= x + 8) idx = i; });
      if (x >= max - 4) idx = its.length - 1;
      n.textContent = String(idx + 1).padStart(2, '0'); tot.textContent = String(its.length).padStart(2, '0');
      const tw = Math.max(.08, cw / sw); bar.style.setProperty('--tw', tw.toFixed(3)); bar.style.setProperty('--tx', ((x / max) * (1 / tw - 1)).toFixed(3));
      prev.disabled = x <= 4; next.disabled = x >= max - 4;
    };
    const q = () => { if (!raf) raf = requestAnimationFrame(upd); };
    track._rail = q;
    track.addEventListener('scroll', q, { passive: true }); addEventListener('resize', q);
    if ('MutationObserver' in window) new MutationObserver(q).observe(track, { childList: true });
    ctl.addEventListener('click', e => {
      const b = e.target.closest('.rail-b'); if (!b) return;
      const its = items(), first = its[0], second = its[1];
      const step = first ? (second ? second.offsetLeft - first.offsetLeft : first.offsetWidth) : track.clientWidth * .8;
      const per = Math.max(1, Math.floor((track.clientWidth - 20) / step));
      track.scrollBy({ left: +b.dataset.d * step * per, behavior: RA.RM ? 'auto' : 'smooth' }); Snd.soft();
    });
    /* drag with a mouse */
    let down = false, sx = 0, sl = 0, moved = 0;
    track.addEventListener('pointerdown', e => {
      if (e.pointerType !== 'mouse' || e.button !== 0 || e.target.closest('input,select,textarea,button,summary')) return;
      down = true; moved = 0; sx = e.clientX; sl = track.scrollLeft;
    });
    addEventListener('pointermove', e => {
      if (!down) return; const dx = e.clientX - sx;
      if (!moved && Math.abs(dx) > 6) { moved = 1; track.classList.add('dragging'); }
      if (moved) { track.scrollLeft = sl - dx; e.preventDefault(); }
    });
    addEventListener('pointerup', () => {
      if (!down) return; down = false;
      if (moved) {
        const its = items(), x = track.scrollLeft, pad = parseFloat(getComputedStyle(track).paddingLeft) || 0;
        let best = 0, bd = 1e9; its.forEach(it => { const d = Math.abs(it.offsetLeft - pad - x); if (d < bd) { bd = d; best = it.offsetLeft - pad; } });
        track.classList.remove('dragging'); track.scrollTo({ left: best, behavior: 'smooth' });
        const stop = ev => { ev.preventDefault(); ev.stopPropagation(); };
        track.addEventListener('click', stop, { capture: true, once: true }); setTimeout(() => track.removeEventListener('click', stop, true), 50);
      }
    });
    upd(); setTimeout(upd, 400);
  });
};

/* ---------------------------------------------------------------- button light + photo parallax */
function finish() {
  /* button finish: inner sheen layer and click ripple */
  const dress = b => { if (b.firstElementChild && b.firstElementChild.classList.contains('btn-sheen')) return; const s = document.createElement('span'); s.className = 'btn-sheen'; s.setAttribute('aria-hidden', 'true'); b.prepend(s); };
  $$('.btn').forEach(dress);
  if ('MutationObserver' in window) new MutationObserver(ms => ms.forEach(m => {
    const t = m.target; if (t.nodeType === 1 && t.classList.contains('btn')) dress(t);
    m.addedNodes.forEach(n => { if (n.nodeType !== 1) return; if (n.classList.contains('btn')) dress(n); if (n.firstElementChild) $$('.btn', n).forEach(dress); });
  })).observe(document.body, { childList: true, subtree: true });
  if (!RA.RM) document.addEventListener('pointerdown', e => {
    const b = e.target.closest && e.target.closest('.btn'); if (!b || b.disabled) return;
    const r = b.getBoundingClientRect(), s = document.createElement('span');
    s.className = 'rip'; s.style.setProperty('--rx', (e.clientX - r.left) + 'px'); s.style.setProperty('--ry', (e.clientY - r.top) + 'px');
    b.appendChild(s); setTimeout(() => s.remove(), 950);
  });
  /* cards: the lit edge follows the cursor */
  if (RA.FINE && !RA.RM) document.addEventListener('pointermove', e => {
    const c = e.target.closest && e.target.closest('.card'); if (!c || c._tilt) return;
    const r = c.getBoundingClientRect(); c.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%'); c.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
  }, { passive: true });
  $$('a.btn:not(.btn-ghost):not(.btn-sm):not(.btn-xs):not(.btn-block)').forEach(a => {
    if ($('svg', a) || !a.textContent.trim()) return;
    a.insertAdjacentHTML('beforeend', a.hasAttribute('data-wa') ? ICON.wa.replace('<svg ', '<svg class="ic" ') : ICON.arrow);
  });
  if (RA.FINE && !RA.RM) document.addEventListener('pointermove', e => {
    const b = e.target.closest && e.target.closest('.btn,.rail-b'); if (!b) return;
    const r = b.getBoundingClientRect(); b.style.setProperty('--bx', (e.clientX - r.left).toFixed(0) + 'px'); b.style.setProperty('--by', (e.clientY - r.top).toFixed(0) + 'px');
  }, { passive: true });
  if (window.gsap && window.ScrollTrigger && !RA.RM) {
    $$('.ph[data-par] > img').forEach(img => {
      gsap.fromTo(img, { yPercent: -5 }, { yPercent: 5, ease: 'none', scrollTrigger: { trigger: img.parentNode, start: 'top bottom', end: 'bottom top', scrub: true } });
    });
  }
  $$('.ph > img').forEach(img => { if (img.complete && !img.naturalWidth && img.getAttribute('src')) img.closest('.ph').classList.add('ph-x'); });
  $$('.credo-plate img').forEach(img => { if (img.complete && !img.naturalWidth) img.parentNode.classList.add('nologo'); });
}

/* ---------------------------------------------------------------- preloader: YAWAR rises, fills with light from below, then the camera dives through the A */
function loader() {
  const on = root.classList.contains('ld-on');
  const parts = $$('.ldx-fill,.ldx-ink,.ldx-m');
  const kill = () => { parts.forEach(p => p.remove()); root.classList.remove('ld-on'); };
  try { sessionStorage.setItem('om-seen', '1'); } catch (e) { }
  if (!on || RA.RM || !window.gsap) { kill(); return Promise.resolve(); }
  RA.lock(true); scrollTo(0, 0);
  const fill = $('.ldx-fill'), ink = $('.ldx-ink'), gold = $('.ldx-gold'), N = $('#ldN');
  const L = $$('.ldx-ink .ldx-w i'), sub = $('.ldx-ink .ldx-s span'), metas = $$('.ldx-m');
  gsap.set(L, { yPercent: 118 }); gsap.set(sub, { yPercent: 120 }); gsap.set(metas, { autoAlpha: 0, y: 10 });
  gsap.set(['.nav', '.fab', '.dock', '.mbar'], { autoAlpha: 0 });
  const st = { lv: 0, ps: 1.32 };
  const paint = () => { gold.style.setProperty('--lv', st.lv.toFixed(2)); fill.style.setProperty('--lv', st.lv.toFixed(2)); gold.style.setProperty('--ps', st.ps.toFixed(3)); N.textContent = String(Math.round(st.lv)).padStart(3, '0'); };
  const fonts = Promise.race([document.fonts && document.fonts.load ? document.fonts.load('400 100px "Anton"') : Promise.resolve(), new Promise(r => setTimeout(r, 250))]);
  const frames = new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
  if (window.gsap) gsap.ticker.lagSmoothing(400, 33);
  return Promise.all([fonts, frames]).then(() => new Promise(res => {
    const E = 'expo.out';
    gsap.timeline({ onComplete: kill })
      .to(metas, { autoAlpha: 1, y: 0, duration: .4, ease: E, stagger: .03 }, 0)
      .to(L, { yPercent: 0, duration: .5, ease: E, stagger: .035 }, 0)
      .to(sub, { yPercent: 0, duration: .45, ease: E }, .15)
      .to(st, { lv: 100, duration: .65, ease: 'power2.inOut', onUpdate: paint }, .08)
      .to(st, { ps: 1.06, duration: .9, ease: 'power1.inOut', onUpdate: paint }, 0)
      .add(() => {
        const I = $('.ldx-ink .ldx-i').getBoundingClientRect();
        const o = (I.left + I.width / 2) + 'px ' + (I.top + I.height * .5) + 'px';
        gsap.set([ink, fill], { transformOrigin: o });
      }, .75)
      .to(metas, { autoAlpha: 0, y: -8, duration: .2, ease: 'power2.in' }, .75)
      .to([ink, fill], { scale: 60, duration: .55, ease: 'expo.in' }, .78)
      .to(fill, { opacity: 0, duration: .25, ease: 'power2.in' }, .98)
      .add(() => { RA.lock(false); res(); }, 1.02)
      .to(['.nav', '.fab', '.dock', '.mbar'], { autoAlpha: 1, duration: .5, ease: 'power2.out', clearProps: 'opacity,visibility' }, 1.05)
      .set(ink, { autoAlpha: 0 }, 1.35);
  }));
}

/* ---------------------------------------------------------------- page curtain: the next page's name rises and fills, then lifts */
const PAGES = { 'index.html': ['Home', 'f.01'], '': ['Home', 'f.01'], 'courses.html': ['Courses', 'f.02'], 'syllabus.html': ['Syllabus', 'f.03'], 'past-papers.html': ['Past papers', 'f.04'], 'lab.html': ['The Lab', 'f.05'], 'portal.html': ['Portal', 'f.06'], 'about.html': ['About', 'f.07'], 'contact.html': ['Contact', 'f.08'], 'admin.html': ['Admin', 'f.09'] };
function ptWord(label, folio) {
  const pt = $('.pt'); if (!pt) return;
  $('.pt-f', pt).textContent = (folio || '') + ' — Sir Osama Musani';
  const w = $('.pt-w', pt); w.textContent = label; delete w.dataset.splitDone; splitWords(w);
}
function curtain() {
  /* Page changes use the browser's own cross-document view transition (see site.css),
     so there is no cover, no blank frame and no added delay. */
  root.classList.remove('pt-on');
  try { sessionStorage.removeItem('om-pt'); } catch (e) { }
  return Promise.resolve();
}

/* ---------------------------------------------------------------- motion details */
function motion() {
  const G = window.gsap, ST = window.ScrollTrigger;
  /* scroll progress line */
  const sp = $('.sprog');
  if (sp) { let q = 0; const u = () => { q = 0; const h = document.documentElement.scrollHeight - innerHeight; sp.style.setProperty('--sp', h > 0 ? (scrollY / h).toFixed(4) : 0); }; addEventListener('scroll', () => { if (!q) q = requestAnimationFrame(u); }, { passive: true }); u(); }
  /* footer wordmark: fit to width, fill from the bottom as the page ends */
  const fm = $('.foot-mark');
  if (fm) {
    const o = $('.fm-o', fm);
    const fit = () => { fm.style.setProperty('--fms', '100px'); const w = o.scrollWidth, cs = getComputedStyle(fm.parentNode), W = fm.parentNode.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight); if (w && W) fm.style.setProperty('--fms', Math.min(260, 100 * W / w * 0.99).toFixed(1) + 'px'); };
    fit(); addEventListener('resize', fit); if (document.fonts) { document.fonts.ready.then(fit); document.fonts.addEventListener && document.fonts.addEventListener('loadingdone', fit); } setTimeout(fit, 1500); if ('ResizeObserver' in window) new ResizeObserver(fit).observe(fm.parentNode);
    if (!RA.RM) {
      let q = 0; const u = () => { q = 0; const r = fm.getBoundingClientRect(), h = innerHeight, max = document.documentElement.scrollHeight - h, start = Math.min(r.top + scrollY - h, max - 1); const p = Math.max(0, Math.min(1, (scrollY - start) / Math.max(1, max - start))); fm.style.setProperty('--fl', (p * p * (3 - 2 * p)).toFixed(3)); };
      addEventListener('scroll', () => { if (!q) q = requestAnimationFrame(u); }, { passive: true }); u();
    } else fm.style.setProperty('--fl', 1);
  }
  /* touch screens: photos switch to colour as they cross the middle of the screen (VERZISH) */
  if (!RA.FINE && 'IntersectionObserver' in window) {
    const lv = new IntersectionObserver(es => es.forEach(en => en.target.classList.toggle('is-live', en.isIntersecting)), { rootMargin: '-38% 0px -38% 0px' });
    $$('.ph').forEach(p => lv.observe(p));
  }
  if (RA.RM || !G || !ST) return;
  /* heroes lift away as you scroll */
  const hero = $('.hero');
  if (hero) {
    G.timeline({ scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true } })
      .to('.hero-copy', { yPercent: -14, opacity: .2, ease: 'none' }, 0)
      .to('.hero-fig', { yPercent: 10, scale: .95, ease: 'none' }, 0);
  }
  $$('.phero').forEach(ph => {
    const g = $('.phero-g', ph) || $('.wrap', ph); if (!g) return;
    const kids = Array.from(g.children);
    G.timeline({ scrollTrigger: { trigger: ph, start: 'top top', end: 'bottom top', scrub: true } })
      .to(kids[0], { yPercent: -12, opacity: .25, ease: 'none' }, 0)
      .to(kids.slice(1), { yPercent: 9, ease: 'none' }, 0);
  });
  /* the tape speeds up with the scroll */
  const tapes = $$('.tape-in').map(t => t.getAnimations ? t.getAnimations()[0] : null).filter(Boolean);
  if (tapes.length) {
    let v = 1, last = scrollY, lt = performance.now();
    addEventListener('scroll', () => { const now = performance.now(), dv = Math.abs(scrollY - last) / Math.max(16, now - lt) * 16; last = scrollY; lt = now; v = Math.max(v, 1 + Math.min(dv / 6, 7)); }, { passive: true });
    G.ticker.add(() => { v += (1 - v) * 0.05; tapes.forEach(a => a.playbackRate = v); });
  }
  /* VERZISH sticky stack: each card pins under the nav; the ones beneath shrink back and dim as the next arrives */
  $$('[data-stack]').forEach(st => {
    const kids = Array.from(st.children);
    kids.forEach((k, i) => k.style.setProperty('--si', i));
    kids.forEach((k, i) => {
      if (i === kids.length - 1) return;
      const nxt = kids[i + 1];
      G.fromTo(k, { scale: 1, '--dim': 0 }, { scale: 0.9 + Math.min(i, 5) * 0.008, '--dim': .58, ease: 'none', immediateRender: false,
        scrollTrigger: { trigger: nxt, start: 'top bottom', end: () => 'top ' + (parseFloat(getComputedStyle(nxt).top) || 100) + 'px', scrub: true, invalidateOnRefresh: true } });
    });
  });
  /* rails glide in from the right */
  $$('[data-rail]').forEach(r => G.from(r, { x: 80, opacity: 0, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: r, start: 'top 88%', once: true } }));
  /* big section numbers drift */
}

/* ---------------------------------------------------------------- boot */
RA.boot = function () {
  bindConfig(); smooth(); nav(); modalWire(); dock(); cmdk(); bot(); cursor(); magnetic(); uiSounds(); counters();
  const L = Promise.all([loader(), curtain()]);
  const bg3d = () => { try { if (RA.BG) RA.BG.init(); } catch (e) { console.warn('[RA] 3D background off:', e); } };
  const want3d = !RA.RM && !(navigator.connection && navigator.connection.saveData) && document.getElementById('bg3d');
  if (want3d) L.then(() => {
    const go = () => { if (window.THREE) return bg3d(); const sc = document.createElement('script'); sc.src = window.RA_THREE || 'assets/vendor/three.min.js'; sc.async = true; sc.onload = bg3d; document.head.appendChild(sc); };
    const idle = window.requestIdleCallback || (f => setTimeout(f, 200));
    requestAnimationFrame(() => idle(go, { timeout: 300 }));
  }); else document.documentElement.classList.add('no3d');
  Q.forEach(fn => { try { fn(); } catch (e) { console.error(e); } });
  autoTilt(); RA.tilt(); RA.rails(); finish(); motion(); L.then(() => RA.reveal());
  if (window.ScrollTrigger) {
    const r = () => ScrollTrigger.refresh();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(r);
    addEventListener('load', r, { once: true });
  }
};
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', RA.boot); else RA.boot();
})();

/* =========================================================================
   RA.BG — interactive 3D particle field (three.js r128)
   One cloud of points that morphs between business forms as you scroll:
   a growth chart, a break-even chart, coin stacks, a market-share pie,
   a globe, a 40/40 score and the OM monogram.
   Points part around the cursor; colours follow the theme.
   ========================================================================= */
(function () {
'use strict';
const RA = window.RA = window.RA || {};
const BG = RA.BG = { ready: false };
let THREE, renderer, scene, camera, group, geo, mat, N = 0, cur = 'cloud', canvas;
let aA, aB, rA, rB, seed, mixT = 1, mixFrom = 0, mixStart = 0, mixDur = 1600;
const pos = { x: 0, y: 0, s: 1, rx: 0, ry: 0, a: 1 }, tgt = { x: 0, y: 0, s: 1, rx: 0, ry: 0, a: 1 };
let spin = 0, spinV = 0, autoSpin = 0, ptr = { x: 0, y: 0, tx: 0, ty: 0 }, scr = null, mouse3 = null, mouseOn = 0, mouseOnT = 0, pulse = 0;
const cache = {};
const MOB = () => innerWidth < 760;

const PAL = {
  dark: [[0.80, 0.74, 0.62], [1.00, 0.70, 0.12], [1.00, 0.84, 0.30], [0.98, 0.95, 0.88]],
  light: [[0.15, 0.30, 0.55], [0.10, 0.32, 0.72], [0.70, 0.30, 0.10], [0.12, 0.16, 0.28]]
};

/* ------------------------------------------------------------ shape kit */
function kit(n) {
  const P = new Float32Array(n * 3), R = new Float32Array(n); let i = 0;
  const g = () => (Math.random() + Math.random() + Math.random() - 1.5) / 1.5;
  const K = {
    P, R, get i() { return i; }, left() { return n - i; },
    push(x, y, z, r) { if (i >= n) return; P[i * 3] = x; P[i * 3 + 1] = y; P[i * 3 + 2] = z; R[i] = r; i++; },
    line(x1, y1, x2, y2, c, th, r, zj) { for (let k = 0; k < c; k++) { const t = Math.random(); K.push(x1 + (x2 - x1) * t + g() * th, y1 + (y2 - y1) * t + g() * th, g() * (zj == null ? th * 2 : zj), r); } },
    line3(a, b, c, th, r) { for (let k = 0; k < c; k++) { const t = Math.random(); K.push(a[0] + (b[0] - a[0]) * t + g() * th, a[1] + (b[1] - a[1]) * t + g() * th, a[2] + (b[2] - a[2]) * t + g() * th, r); } },
    dots(x1, y1, x2, y2, c, gap, r) { for (let k = 0; k < c; k++) { let t = Math.random(); t = Math.round(t / gap) * gap; K.push(x1 + (x2 - x1) * t + g() * 0.012, y1 + (y2 - y1) * t + g() * 0.012, g() * 0.03, r); } },
    circle(cx, cy, cz, rad, c, th, r, tilt) { for (let k = 0; k < c; k++) { const a = Math.random() * Math.PI * 2, rr = rad + g() * th; const y = Math.sin(a) * rr, z = 0; K.push(cx + Math.cos(a) * rr, cy + y * Math.cos(tilt || 0), cz + y * Math.sin(tilt || 0) + g() * th, r); } },
    ball(cx, cy, cz, rad, c, r) { for (let k = 0; k < c; k++) { const u = Math.random() * 2 - 1, a = Math.random() * Math.PI * 2, s = Math.sqrt(1 - u * u), rr = rad * Math.cbrt(Math.random()); K.push(cx + s * Math.cos(a) * rr, cy + u * rr, cz + s * Math.sin(a) * rr, r); } },
    dust(c, rad, r) { for (let k = 0; k < c; k++) { const u = Math.random() * 2 - 1, a = Math.random() * Math.PI * 2, s = Math.sqrt(1 - u * u), rr = rad * (0.45 + 0.55 * Math.random()); K.push(s * Math.cos(a) * rr * 1.5, u * rr * 0.8, s * Math.sin(a) * rr - 2, r == null ? 3 : r); } },
    text(str, cx, cy, w, c, r, font) {
      const pts = sampleText(str, font || 'italic 600 220px Cormorant, "Cormorant Garamond", Georgia, serif');
      if (!pts.length) return;
      const sc = w / pts.w;
      for (let k = 0; k < c; k++) { const p = pts[(Math.random() * pts.length) | 0]; K.push(cx + (p[0] - pts.w / 2) * sc + g() * 0.01, cy - (p[1] - pts.h / 2) * sc + g() * 0.01, g() * 0.06, r); }
    },
    rot(x, y, z) { // rotate everything pushed so far
      const cx = Math.cos(x), sx = Math.sin(x), cy = Math.cos(y), sy = Math.sin(y), cz = Math.cos(z || 0), sz = Math.sin(z || 0);
      for (let k = 0; k < i; k++) {
        let px = P[k * 3], py = P[k * 3 + 1], pz = P[k * 3 + 2], t;
        t = py * cx - pz * sx; pz = py * sx + pz * cx; py = t;
        t = px * cy + pz * sy; pz = -px * sy + pz * cy; px = t;
        t = px * cz - py * sz; py = px * sz + py * cz; px = t;
        P[k * 3] = px; P[k * 3 + 1] = py; P[k * 3 + 2] = pz;
      }
    },
    fill(rad) { K.dust(n - i, rad || 7); return K; }
  };
  return K;
}
const textCache = {};
function sampleText(str, font) {
  const key = str + '|' + font; if (textCache[key]) return textCache[key];
  const c = document.createElement('canvas'), x = c.getContext('2d');
  x.font = font; const m = x.measureText(str); const w = Math.ceil(m.width) + 40, h = 300;
  c.width = w; c.height = h; x.font = font; x.textBaseline = 'middle'; x.fillStyle = '#fff'; x.fillText(str, 20, h / 2);
  const d = x.getImageData(0, 0, w, h).data, pts = []; const st = 3;
  let minY = h, maxY = 0;
  for (let yy = 0; yy < h; yy += st) for (let xx = 0; xx < w; xx += st) if (d[(yy * w + xx) * 4 + 3] > 140) { pts.push([xx, yy]); if (yy < minY) minY = yy; if (yy > maxY) maxY = yy; }
  pts.w = w; pts.h = (minY + maxY); // centre on the ink, not the box
  textCache[key] = pts; return pts;
}

const SHAPES = {
  cloud(n) { const K = kit(n); K.dust(n, 7.5, 3); for (let k = 0; k < n; k++) K.R[k] = Math.random() < 0.6 ? 0 : (Math.random() < 0.7 ? 1 : 3); return K; },
  atom(n) {
    const K = kit(n), f = v => Math.round(n * v);
    K.ball(0, 0, 0, 0.55, f(0.1), 2);
    for (let k = 0; k < f(0.04); k++) { const a = Math.random() * 6.283, b = Math.acos(2 * Math.random() - 1); K.push(Math.sin(b) * Math.cos(a) * 0.62, Math.cos(b) * 0.62, Math.sin(b) * Math.sin(a) * 0.62, 3); }
    [[0, 0], [1.05, 0.0], [-1.05, 0.0]].forEach(([rz], j) => {
      const tilt = 1.25, c = f(0.16), R1 = 3.1, R2 = 1.15;
      for (let k = 0; k < c; k++) { const a = Math.random() * 6.283; let x = Math.cos(a) * R1, y = Math.sin(a) * R2, z = (Math.random() - 0.5) * 0.04;
        const t = y * Math.cos(tilt) - z * Math.sin(tilt); z = y * Math.sin(tilt) + z * Math.cos(tilt); y = t;
        const ang = j * 2.094; const xr = x * Math.cos(ang) - y * Math.sin(ang), yr = x * Math.sin(ang) + y * Math.cos(ang);
        K.push(xr, yr, z, 0); }
      const a0 = 0.8 + j * 2.1; let x = Math.cos(a0) * R1, y = Math.sin(a0) * R2, z = 0; const t = y * Math.cos(tilt); z = y * Math.sin(tilt); y = t;
      const ang = j * 2.094; K.ball(x * Math.cos(ang) - y * Math.sin(ang), x * Math.sin(ang) + y * Math.cos(ang), z, 0.17, f(0.025), 1);
    });
    K.rot(0.25, 0.4, 0); return K.fill(7);
  },
  wave(n) {
    const K = kit(n), f = v => Math.round(n * v), c = f(0.72);
    for (let k = 0; k < c; k++) { const x = (Math.random() * 2 - 1) * 6.2, z = (Math.random() * 2 - 1) * 3.4;
      const r1 = Math.hypot(x + 2.2, z), r2 = Math.hypot(x - 2.2, z);
      const y = 0.32 * (Math.sin(r1 * 2.2) + Math.sin(r2 * 2.2));
      K.push(x, y, z, Math.abs(y) > 0.48 ? 1 : (Math.random() < 0.08 ? 3 : 0)); }
    K.ball(-2.2, 0.3, 0, 0.12, f(0.01), 2); K.ball(2.2, 0.3, 0, 0.12, f(0.01), 2);
    K.rot(-0.62, 0.18, 0); for (let k = 0; k < K.i; k++) K.P[k * 3 + 1] -= 0.5;
    return K.fill(8);
  },
  field(n) {
    const K = kit(n), f = v => Math.round(n * v);
    for (let k = 0; k < f(0.12); k++) { const x = (Math.random() * 2 - 1) * 1.4, y = (Math.random() * 2 - 1) * 0.32, z = (Math.random() * 2 - 1) * 0.32; K.push(x, y, z, x > 0 ? 2 : 1); }
    const ks = [0.9, 1.5, 2.3, 3.4, 5.0], planes = 6, per = f(0.6) / (ks.length * planes);
    for (let p = 0; p < planes; p++) { const phi = p * Math.PI / planes;
      ks.forEach(kk => { for (let j = 0; j < per; j++) { const th = 0.12 + Math.random() * (Math.PI - 0.24), r = kk * Math.sin(th) * Math.sin(th);
        const x = r * Math.cos(th) * 1.25, rr = r * Math.sin(th); K.push(x, rr * Math.cos(phi), rr * Math.sin(phi), kk > 3 ? 3 : 0); } }); }
    K.rot(0.2, 0.5, 0.0); return K.fill(7);
  },
  lens(n) {
    const K = kit(n), f = v => Math.round(n * v), H = 2.4;
    for (let k = 0; k < f(0.16); k++) { const y = (Math.random() * 2 - 1) * H, w = 0.42 * (1 - (y / H) * (y / H)); const s = Math.random() < 0.5 ? -1 : 1; K.push(s * w + (Math.random() - 0.5) * 0.02, y, (Math.random() - 0.5) * 0.5, 3); }
    K.line(-6, 0, 6, 0, f(0.05), 0.006, 3, 0.01);
    const F = 2.6;
    [-1.8, -1.2, -0.6, 0.6, 1.2, 1.8].forEach((y, j) => { K.line(-6, y, 0, y, f(0.05), 0.01, 0, 0.02); K.line(0, y, F + (F - 0) * 0.9, -y * 0.9, f(0.05), 0.01, 1, 0.02); });
    K.ball(F, 0, 0, 0.14, f(0.02), 2); K.ball(-F, 0, 0, 0.08, f(0.008), 2);
    K.rot(0.1, -0.42, 0); return K.fill(7);
  },
  orbit(n) {
    const K = kit(n), f = v => Math.round(n * v);
    K.ball(0, 0, 0, 0.7, f(0.12), 2);
    [1.6, 2.5, 3.5, 4.6].forEach((R, j) => { K.circle(0, 0, 0, R, f(0.11), 0.012, 0, Math.PI / 2); const a = j * 1.7 + 0.6; K.ball(Math.cos(a) * R, 0, Math.sin(a) * R, 0.12 + j * 0.04, f(0.018), 1); });
    K.rot(0.42, 0, 0.18); return K.fill(7);
  },
  prism(n) {
    const K = kit(n), f = v => Math.round(n * v), A = [0, 1.9], B = [-1.8, -1.3], C = [1.8, -1.3];
    K.line(A[0], A[1], B[0], B[1], f(0.07), 0.012, 3, 0.3); K.line(A[0], A[1], C[0], C[1], f(0.07), 0.012, 3, 0.3); K.line(B[0], B[1], C[0], C[1], f(0.07), 0.012, 3, 0.3);
    K.line(-6.2, -0.2, -0.95, 0.3, f(0.09), 0.012, 0, 0.02);
    K.line(-0.95, 0.3, 1.05, 0.0, f(0.04), 0.03, 0, 0.04);
    for (let j = 0; j < 7; j++) { const ey = -0.6 - j * 0.32; K.line(1.05, 0.0, 6.0, ey, f(0.045), 0.02, j < 2 ? 2 : (j < 5 ? 1 : 0), 0.04); }
    K.rot(0.06, -0.3, 0); return K.fill(7);
  },
  spring(n) {
    const K = kit(n), f = v => Math.round(n * v), c = f(0.6), turns = 9, L = 6.4, R = 0.85;
    for (let k = 0; k < c; k++) { const t = Math.random(), a = t * turns * 6.283; K.push(-L / 2 + t * L, Math.cos(a) * R, Math.sin(a) * R, Math.random() < 0.1 ? 1 : 0); }
    K.line(-L / 2 - 0.8, -1.4, -L / 2 - 0.8, 1.4, f(0.04), 0.03, 3, 0.4);
    K.ball(L / 2 + 0.75, 0, 0, 0.6, f(0.08), 2);
    K.rot(0.2, -0.5, 0.95); return K.fill(7);
  },
  eq(n) { const K = kit(n), f = v => Math.round(n * v); K.text('E = mc²', 0, 0.1, 7.6, f(0.74), 0); for (let k = 0; k < K.i; k++) { const x = K.P[k * 3]; K.R[k] = x < -2.0 ? 1 : (x > 1.4 ? 2 : 0); } K.line(-4, -1.55, 4, -1.55, f(0.03), 0.01, 0, 0.02); return K.fill(7); },
  bars(n) {
    const K = kit(n), f = v => Math.round(n * v), c = f(0.6);
    for (let k = 0; k < c; k++) { const x = (Math.random() * 2 - 1) * 4.2, y = Math.exp(-((x + 4.2) / 2.2)) * 3.6 - 1.8; K.push(x, y + (Math.random() - 0.5) * 0.03, (Math.random() - 0.5) * 0.08, 1); }
    K.line(-4.4, -2.0, 4.4, -2.0, f(0.05), 0.01, 3, 0.05); K.line(-4.4, -2.0, -4.4, 2.2, f(0.05), 0.01, 3, 0.05);
    for (let j = 1; j <= 4; j++) { const x = -4.2 + j * 2.2 * 0.693, y = 3.6 / Math.pow(2, j) - 1.8; K.dots(x, -2.0, x, y, f(0.012), 0.08, 2); }
    K.rot(0.18, -0.4, 0); return K.fill(7);
  },
  /* ---- Business forms */
  chart(n) {
    const K = kit(n), f = v => Math.round(n * v), H = [0.9, 1.4, 1.2, 2.0, 2.5, 3.3, 4.1];
    H.forEach((h, j) => { const x0 = -4 + j * 1.2, w = 0.72, c = f(0.075);
      for (let k = 0; k < c; k++) { const edge = Math.random() < 0.55, u = Math.random(), v = Math.random(); let x, y;
        if (edge) { const e = (Math.random() * 4) | 0; x = e < 2 ? x0 + (e ? w : 0) : x0 + u * w; y = e < 2 ? -2.2 + v * h : -2.2 + (e === 2 ? 0 : h); } else { x = x0 + u * w; y = -2.2 + v * h; }
        K.push(x, y, (Math.random() - 0.5) * 0.5, j === H.length - 1 ? 2 : (edge ? 1 : 0)); } });
    K.line(-4.2, -1.2, 4.4, 2.5, f(0.07), 0.02, 3, 0.05);
    K.line(-4.4, -2.25, 4.6, -2.25, f(0.04), 0.008, 3, 0.04);
    K.rot(0.12, -0.45, 0); return K.fill(7);
  },
  be(n) {
    const K = kit(n), f = v => Math.round(n * v);
    K.line(-4.4, -2.4, 4.6, -2.4, f(0.05), 0.008, 3, 0.03); K.line(-4.4, -2.4, -4.4, 2.8, f(0.05), 0.008, 3, 0.03);
    K.line(-4.4, -0.9, 4.4, -0.9, f(0.08), 0.01, 0, 0.03);            // fixed costs
    K.line(-4.4, -0.9, 4.4, 2.0, f(0.14), 0.012, 1, 0.03);            // total costs
    K.line(-4.4, -2.4, 4.4, 2.8, f(0.14), 0.012, 2, 0.03);            // revenue
    const bx = -4.4 + 8.8 * (1.5 / 2.3), by = -0.9 + 2.9 * (1.5 / 2.3) * 1;
    K.ball(bx, by, 0, 0.16, f(0.03), 2); K.dots(bx, -2.4, bx, by, f(0.02), 0.07, 3);
    K.rot(0.1, -0.4, 0); return K.fill(7);
  },
  coin(n) {
    const K = kit(n), f = v => Math.round(n * v);
    [[-2.2, 5], [0, 8], [2.2, 3]].forEach(([cx, cnt], s) => { for (let j = 0; j < cnt; j++) { const y = -2.2 + j * 0.42; K.circle(cx, y, 0, 0.95, f(0.022), 0.01, j === cnt - 1 ? 2 : (s === 1 ? 1 : 0), Math.PI / 2 - 0.15); } });
    K.ball(0, 2.1, 0, 0.25, f(0.02), 2);
    K.rot(0.25, 0.3, 0); return K.fill(7);
  },
  pie(n) {
    const K = kit(n), f = v => Math.round(n * v), c = f(0.62), segs = [0.34, 0.26, 0.18, 0.13, 0.09];
    for (let k = 0; k < c; k++) { const a = Math.random() * 6.283, r = 1.3 + Math.random() * 1.6; let acc = 0, si = 0; const fr = a / 6.283; for (; si < segs.length; si++) { acc += segs[si]; if (fr < acc) break; }
      const pop = si === 0 ? 0.35 : 0, mid = (acc - segs[Math.min(si, segs.length - 1)] / 2) * 6.283;
      K.push(Math.cos(a) * r + Math.cos(mid) * pop, Math.sin(a) * r + Math.sin(mid) * pop, (Math.random() - 0.5) * (si === 0 ? 0.5 : 0.25), si === 0 ? 2 : (si % 2 ? 1 : 0)); }
    K.rot(0.55, 0.2, 0.2); return K.fill(7);
  },
  score(n) { const K = kit(n), f = v => Math.round(n * v); K.text('40/40', 0, 0.1, 7.8, f(0.7), 0, '400 220px Anton, Impact, sans-serif'); for (let k = 0; k < K.i; k++) { const x = K.P[k * 3]; K.R[k] = x < -0.5 ? 2 : (x > 0.6 ? 1 : 3); } K.line(-4, -1.6, 4, -1.6, f(0.04), 0.01, 3, 0.02); K.rot(0.1, -0.25, 0); return K.fill(8); },
  om(n) { const K = kit(n), f = v => Math.round(n * v); K.text('OM', 0, 0.1, 5.6, f(0.66), 0, '400 220px Anton, Impact, sans-serif'); for (let k = 0; k < K.i; k++) { const x = K.P[k * 3]; K.R[k] = x < -0.2 ? 0 : 2; } K.rot(0.12, -0.3, 0); return K.fill(8); },
  sphere(n) {
    const K = kit(n), f = v => Math.round(n * v), c = f(0.7), R = 3.0, ga = Math.PI * (3 - Math.sqrt(5));
    for (let k = 0; k < c; k++) { const y = 1 - (k / (c - 1)) * 2, r = Math.sqrt(1 - y * y), t = ga * k; const lat = Math.abs(Math.round(y * 6) / 6 - y) < 0.012; K.push(Math.cos(t) * r * R, y * R, Math.sin(t) * r * R, lat ? 0 : (Math.random() < 0.12 ? 1 : 3)); }
    for (let k = 0; k < f(0.06); k++) { const a = Math.random() * Math.PI * 2; K.push(Math.cos(a) * 3.9, (Math.random() - 0.5) * 0.04, Math.sin(a) * 3.9, 0); }
    K.rot(0.35, 0, 0.3); return K.fill(7);
  },
  grid(n) {
    const K = kit(n), f = v => Math.round(n * v), cols = 9, rows = 7;
    for (let c = 0; c <= cols; c++) { const x = -4 + c * (8 / cols); K.line(x, -2.8, x, 2.8, f(0.36 / (cols + 1)), 0.008, c === 1 ? 2 : 1, 0.02); }
    for (let r = 0; r <= rows; r++) { const y = -2.8 + r * (5.6 / rows); K.line(-4, y, 4, y, f(0.36 / (rows + 1)), 0.008, r === rows ? 0 : 1, 0.02); }
    for (let k = 0; k < f(0.12); k++) { const x = -4 + Math.random() * 8, y = 1.6 * Math.sin(x * 1.1); K.push(x, y + (Math.random() - 0.5) * 0.05, 0.05, 2); }
    K.rot(-0.6, 0.35, 0.05); return K.fill(7);
  }
};
function getShape(k) {
  if (!cache[k]) { const K = (SHAPES[k] || SHAPES.cloud)(N); cache[k] = { P: K.P, R: K.R }; }
  return cache[k];
}

/* ------------------------------------------------------------ shaders */
const VS = `
attribute vec3 aA; attribute vec3 aB; attribute float aRA; attribute float aRB; attribute float aSeed;
uniform float uT, uMix, uSize, uPR, uMR, uPulse, uScatter, uAlpha, uMOn;
uniform vec3 uMouse; uniform vec3 uC0; uniform vec3 uC1; uniform vec3 uC2; uniform vec3 uC3;
varying vec3 vCol; varying float vA;
vec3 pal(float r){ return r < .5 ? uC0 : (r < 1.5 ? uC1 : (r < 2.5 ? uC2 : uC3)); }
float ease(float t){ return t < .5 ? 4.*t*t*t : 1. - pow(-2.*t + 2., 3.) / 2.; }
void main(){
  float m = ease(clamp(uMix * 1.45 - aSeed * .45, 0., 1.));
  vec3 p = mix(aA, aB, m);
  float tr = sin(m * 3.14159);
  p += vec3(sin(aSeed * 41. + uT * .9), cos(aSeed * 33. + uT * .7), sin(aSeed * 27. + uT * .8)) * tr * uScatter;
  p += vec3(sin(uT * .6 + aSeed * 6.28), cos(uT * .5 + aSeed * 5.1), sin(uT * .4 + aSeed * 3.7)) * .022;
  vec2 dm = p.xy - uMouse.xy; float dist = length(dm);
  float f = smoothstep(uMR, 0., dist) * uMOn;
  p.xy += normalize(dm + vec2(1e-4)) * f * .62; p.z += f * .9;
  p *= 1. + uPulse * (.12 + .08 * sin(aSeed * 20.));
  vec4 mv = modelViewMatrix * vec4(p, 1.);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = uSize * (.5 + aSeed * .95) * (1. + f * 1.4) * uPR * (10. / -mv.z);
  vCol = mix(pal(aRA), pal(aRB), m) + f * .22;
  float tw = .8 + .2 * sin(uT * 1.6 + aSeed * 31.);
  float dustA = (mix(aRA, aRB, m) > 2.5) ? .55 : 1.;
  vA = uAlpha * tw * dustA;
}`;
const FS = `
varying vec3 vCol; varying float vA;
void main(){ vec2 c = gl_PointCoord - .5; float r = length(c); if (r > .5) discard; float a = pow(smoothstep(.5, 0., r), 1.25); gl_FragColor = vec4(vCol, a * vA); }`;

/* ------------------------------------------------------------ setup */
BG.init = function () {
  canvas = document.getElementById('bg3d');
  THREE = window.THREE;
  if (!canvas || !THREE) { document.documentElement.classList.add('no3d'); return; }
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'high-performance' });
  } catch (e) { document.documentElement.classList.add('no3d'); return; }
  const mob = MOB();
  N = mob ? 6500 : (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4 ? 9000 : 15000);
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, mob ? 1.5 : 1.6));
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 0.1, 100); camera.position.z = 10;
  group = new THREE.Group(); scene.add(group);
  geo = new THREE.BufferGeometry();
  const start = getShape('cloud');
  aA = new Float32Array(start.P); aB = new Float32Array(start.P); rA = new Float32Array(start.R); rB = new Float32Array(start.R);
  seed = new Float32Array(N); for (let i = 0; i < N; i++) seed[i] = Math.random();
  geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(N * 3), 3));
  geo.setAttribute('aA', new THREE.BufferAttribute(aA, 3)); geo.setAttribute('aB', new THREE.BufferAttribute(aB, 3));
  geo.setAttribute('aRA', new THREE.BufferAttribute(rA, 1)); geo.setAttribute('aRB', new THREE.BufferAttribute(rB, 1));
  geo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
  geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 50);
  mat = new THREE.ShaderMaterial({
    vertexShader: VS, fragmentShader: FS, transparent: true, depthWrite: false, depthTest: false,
    uniforms: {
      uT: { value: 0 }, uMix: { value: 1 }, uSize: { value: mob ? 3.0 : 3.0 }, uPR: { value: renderer.getPixelRatio() }, uMR: { value: 1.25 },
      uPulse: { value: 0 }, uScatter: { value: 0.9 }, uAlpha: { value: 0.9 }, uMOn: { value: 0 },
      uMouse: { value: new THREE.Vector3(99, 99, 0) },
      uC0: { value: new THREE.Vector3() }, uC1: { value: new THREE.Vector3() }, uC2: { value: new THREE.Vector3() }, uC3: { value: new THREE.Vector3() }
    }
  });
  const pts = new THREE.Points(geo, mat); pts.frustumCulled = false; group.add(pts);
  BG.theme(document.documentElement.dataset.theme || 'dark');
  resize(); addEventListener('resize', resize);
  addEventListener('pointermove', e => { ptr.tx = e.clientX / innerWidth * 2 - 1; ptr.ty = e.clientY / innerHeight * 2 - 1; mouseOnT = e.pointerType === 'mouse' ? 1 : 0.6; scr = [e.clientX, e.clientY]; }, { passive: true });
  document.addEventListener('mouseleave', () => { mouseOnT = 0; });
  addEventListener('touchend', () => { mouseOnT = 0; }, { passive: true });
  let lastY = scrollY; addEventListener('scroll', () => { spinV += (scrollY - lastY) * 0.00018; lastY = scrollY; }, { passive: true });
  BG.ready = true;
  watchSections();
  loop();
  requestAnimationFrame(() => document.documentElement.classList.add('bg-on'));
};
const ray = { v: null, dir: null };
function setMouse(cx, cy) {
  if (!camera) return;
  const v = new THREE.Vector3(cx / innerWidth * 2 - 1, -(cy / innerHeight) * 2 + 1, 0.5).unproject(camera);
  const dir = v.sub(camera.position).normalize(), t = -camera.position.z / dir.z;
  const w = camera.position.clone().add(dir.multiplyScalar(t));
  group.updateMatrixWorld(); mouse3 = group.worldToLocal(w);
}
function resize() {
  if (!renderer) return;
  renderer.setSize(innerWidth, innerHeight, false); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  if (mat) mat.uniforms.uPR.value = renderer.getPixelRatio();
  if (BG._last) place(BG._last.opt);
}
BG.theme = function (t) {
  if (!mat) return;
  const P = PAL[t === 'light' ? 'light' : 'dark'];
  ['uC0', 'uC1', 'uC2', 'uC3'].forEach((u, i) => mat.uniforms[u].value.set(P[i][0], P[i][1], P[i][2]));
  mat.blending = t === 'light' ? THREE.NormalBlending : THREE.AdditiveBlending;
  mat.uniforms.uSize.value = 3.0 * (t === 'light' ? 0.9 : 1);
  BG._alphaBase = t === 'light' ? 0.7 : 1.0;
  mat.needsUpdate = true;
};

/* ------------------------------------------------------------ morph */
function place(o) {
  o = o || {};
  const halfH = Math.tan(camera.fov * Math.PI / 360) * camera.position.z, halfW = halfH * camera.aspect, mob = MOB();
  const fit = Math.min(1, halfW / 4.6);
  tgt.x = (mob ? (o.mx || 0) : (o.x || 0)) * halfW;
  { const hw = 3.4 * (o.s || 1) * (mob ? (o.ms || 0.72) : fit), room = halfW - hw * 0.92; if (room > 0 && Math.abs(tgt.x) > room) tgt.x = Math.sign(tgt.x) * room; }
  tgt.y = (mob ? (o.my != null ? o.my : (o.y || 0)) : (o.y || 0)) * halfH;
  tgt.s = (o.s || 1) * (mob ? (o.ms || 0.72) : fit);
  tgt.rx = o.rx || 0; tgt.ry = o.ry || 0; tgt.a = (o.a == null ? 1 : o.a) * (mob ? (o.ma == null ? .4 : o.ma) : 1); if (mob) tgt.a = Math.min(tgt.a, .22);
  autoSpin = o.spin || 0;
}
BG.morph = function (key, opt) {
  if (MOB() && !(opt && opt._hero) && key !== 'cloud') { key = 'cloud'; opt = { a: .55 }; }
  if (!BG.ready) { BG._pending = [key, opt]; return; }
  BG._last = { key, opt }; place(opt);
  if (key === cur) return;
  const now = performance.now(), m = mat.uniforms.uMix.value;
  // freeze the current in-between state into A
  for (let i = 0; i < N; i++) {
    const mm = easeJS(RA.clamp(m * 1.45 - seed[i] * 0.45, 0, 1));
    aA[i * 3] += (aB[i * 3] - aA[i * 3]) * mm; aA[i * 3 + 1] += (aB[i * 3 + 1] - aA[i * 3 + 1]) * mm; aA[i * 3 + 2] += (aB[i * 3 + 2] - aA[i * 3 + 2]) * mm;
    rA[i] = mm > 0.5 ? rB[i] : rA[i];
  }
  const s = getShape(key); aB.set(s.P); rB.set(s.R);
  ['aA', 'aB', 'aRA', 'aRB'].forEach(a => geo.attributes[a].needsUpdate = true);
  mat.uniforms.uMix.value = 0; mixStart = now; mixDur = RA.RM ? 1 : (opt && opt.dur) || 1700; cur = key;
};
function easeJS(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
BG.pulse = function () { pulse = 1; };
BG.current = () => cur;

/* sections with data-shape morph the cloud when they reach the middle of the screen */
function watchSections() {
  const els = RA.$$('[data-shape]'); if (!els.length) return;
  const opt = el => { const o = {}; ['x', 'y', 's', 'mx', 'my', 'ms', 'a', 'ma', 'spin', 'rx', 'ry'].forEach(k => { const v = el.getAttribute('data-shape-' + k); if (v != null) o[k] = parseFloat(v); }); return o; };
  const go = el => { const o = opt(el); if (el === els[0]) o._hero = 1; BG.morph(el.dataset.shape, o); };
  const fontsOk = document.fonts && document.fonts.ready ? Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 1400))]) : Promise.resolve();
  fontsOk.then(() => {
    if (!('IntersectionObserver' in window)) { go(els[0]); return; }
    const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) go(en.target); }), { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
    els.forEach(e => io.observe(e));
    setTimeout(() => { if (!BG._last) go(els[0]); }, 200);
  });
}

/* ------------------------------------------------------------ loop */
let t0 = performance.now(), frames = 0, slow = 0, last = t0;
function loop() {
  requestAnimationFrame(loop);
  if (document.hidden) return;
  const now = performance.now(), raw = (now - last) / 1000, dt = Math.min(0.05, raw); last = now;
  const u = mat.uniforms; u.uT.value = (now - t0) / 1000;
  if (u.uMix.value < 1) u.uMix.value = Math.min(1, (now - mixStart) / mixDur);
  // adaptive quality
  if (frames < 120) { frames++; if (dt > 0.03) slow++; if (frames === 120 && slow > 50) { geo.setDrawRange(0, Math.floor(N * 0.55)); u.uSize.value *= 1.15; } }
  const k = RA.RM ? 1 : 1 - Math.pow(0.002, Math.min(0.5, raw));
  pos.x += (tgt.x - pos.x) * k; pos.y += (tgt.y - pos.y) * k; pos.s += (tgt.s - pos.s) * k; pos.a += (tgt.a - pos.a) * k;
  pos.rx += (tgt.rx - pos.rx) * k; pos.ry += (tgt.ry - pos.ry) * k;
  ptr.x += (ptr.tx - ptr.x) * k * 0.6; ptr.y += (ptr.ty - ptr.y) * k * 0.6;
  spinV *= Math.pow(0.04, dt); spin += spinV + autoSpin * dt;
  group.position.set(pos.x, pos.y, 0); group.scale.setScalar(pos.s);
  group.rotation.set(pos.rx + ptr.y * 0.12, pos.ry + ptr.x * 0.18 + spin, 0);
  mouseOn += (mouseOnT - mouseOn) * k; u.uMOn.value = mouseOn;
  if (scr && mouseOn > 0.01) { setMouse(scr[0], scr[1]); if (mouse3) u.uMouse.value.copy(mouse3); }
  pulse *= Math.pow(0.02, dt); u.uPulse.value = pulse;
  u.uAlpha.value = (BG._alphaBase || 0.9) * pos.a;
  renderer.render(scene, camera);
}
})();

