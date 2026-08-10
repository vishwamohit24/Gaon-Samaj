import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useLanguage } from '../context/LanguageContext';
import { Award, Users, GraduationCap, Heart, Sprout, MapPin, Sparkles, Filter, ChevronRight, Share2, Calendar } from 'lucide-react';

export interface GrowthMetric {
  year: number;
  students: number;
  women: number;
  trees: number;
  healthcare: number;
  villages: number;
}

const HISTORICAL_GROWTH: GrowthMetric[] = [
  { year: 2019, students: 1200, women: 850, trees: 3000, healthcare: 2100, villages: 18 },
  { year: 2020, students: 2800, women: 1900, trees: 8500, healthcare: 4500, villages: 35 },
  { year: 2021, students: 5400, women: 3800, trees: 16000, healthcare: 9200, villages: 62 },
  { year: 2022, students: 9100, women: 6500, trees: 25000, healthcare: 15800, villages: 94 },
  { year: 2023, students: 12800, women: 9200, trees: 34000, healthcare: 21500, villages: 125 },
  { year: 2024, students: 15900, women: 11800, trees: 41500, healthcare: 27200, villages: 158 },
  { year: 2025, students: 18500, women: 14200, trees: 48000, healthcare: 32000, villages: 185 },
];

interface SectorShare {
  label: string;
  labelHi: string;
  value: number;
  color: string;
  count: string;
}

const SECTOR_DISTRIBUTION: SectorShare[] = [
  { label: 'Quality Rural Education', labelHi: 'ग्रामीण शिक्षा एवं साक्षरता', value: 38, color: '#064e3b', count: '18,500 Students' },
  { label: 'Women Artisans & SHGs', labelHi: 'महिला सशक्तिकरण व हस्तशिल्प', value: 28, color: '#ea580c', count: '14,200 Women' },
  { label: 'Environment & Trees', labelHi: 'पर्यावरण व वृक्षारोपण', value: 18, color: '#166534', count: '48,000 Trees' },
  { label: 'Health Camps & Care', labelHi: 'स्वास्थ्य शिविर व प्राथमिक सेवा', value: 11, color: '#f97316', count: '32,000 Patients' },
  { label: 'Startup Incubation', labelHi: 'ग्रामीण लघु उद्योग व इंक्यूबेशन', value: 5, color: '#047857', count: '200+ Grants' },
];

interface DistrictReach {
  district: string;
  districtHi: string;
  beneficiaries: number;
  highlight: string;
  highlightHi: string;
  color: string;
}

const DISTRICT_DATA: DistrictReach[] = [
  { district: 'Patna', districtHi: 'पटना', beneficiaries: 18500, highlight: 'Youth & Digital Hubs', highlightHi: 'डिजिटल साक्षरता केंद्र', color: '#064e3b' },
  { district: 'Madhubani', districtHi: 'मधुबनी', beneficiaries: 16200, highlight: 'Artisan Cooperatives', highlightHi: 'मधुबनी कला क्लस्टर', color: '#ea580c' },
  { district: 'Gaya', districtHi: 'गया', beneficiaries: 14100, highlight: 'Afforestation & Water', highlightHi: 'वृक्षारोपण अभियान', color: '#14532d' },
  { district: 'Muzaffarpur', districtHi: 'मुजफ्फरपुर', beneficiaries: 12800, highlight: 'Smart Village Schools', highlightHi: 'स्मार्ट गांव पाठशाला', color: '#f97316' },
  { district: 'Nalanda', districtHi: 'नालंदा', beneficiaries: 10500, highlight: 'Rural Eco-Tourism', highlightHi: 'ग्रामीण होमस्टे पर्यटन', color: '#166534' },
  { district: 'Bhagalpur', districtHi: 'भागलपुर', beneficiaries: 9200, highlight: 'Silk Weavers Guild', highlightHi: 'रेशम बुनाई प्रोत्साहन', color: '#c2410c' },
  { district: 'W. Champaran', districtHi: 'पश्चिम चंपारण', beneficiaries: 8400, highlight: 'Organic Farming', highlightHi: 'जैविक कृषि क्लस्टर', color: '#047857' },
  { district: 'Saharsa', districtHi: 'सहरसा', beneficiaries: 7100, highlight: 'Flood Relief & Health', highlightHi: 'बाढ़ राहत व स्वास्थ्य वैन', color: '#fb923c' },
];

interface ImpactMilestoneCard {
  id: string;
  year: number;
  title: string;
  titleHi: string;
  category: string;
  categoryHi: string;
  description: string;
  descriptionHi: string;
  metric: string;
  metricHi: string;
  imageUrl: string;
}

const IMPACT_GALLERY_CARDS: ImpactMilestoneCard[] = [
  {
    id: 'm1',
    year: 2024,
    title: '18,500 Children Educated Across Rural Bihar',
    titleHi: 'बिहार भर में 18,500 बच्चों को मुफ्त गुणवत्तापूर्ण शिक्षा',
    category: 'Education',
    categoryHi: 'शिक्षा',
    description: 'Operating 85 evening smart classrooms with tablets, libraries, and remedial coaching for first-generation learners.',
    descriptionHi: 'प्रथम पीढ़ी के बाल शिक्षार्थियों के लिए 85 सांध्य स्मार्ट कक्षाओं, डिजिटल टैबलेट व पुस्तकों का संचालन।',
    metric: '85 Smart Classrooms',
    metricHi: '85 स्मार्ट कक्षाएं',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'm2',
    year: 2024,
    title: '14,200 Women Artisans Financial Independence',
    titleHi: '14,200 ग्रामीण महिलाओं को मधुबनी कला से स्थायी रोजगार',
    category: 'Women Rights',
    categoryHi: 'महिला अधिकार',
    description: 'Empowered women through self-help groups and direct export of Madhubani art to national and international markets.',
    descriptionHi: 'स्वयं सहायता समूहों व मधुबनी चित्रकला के माध्यम से ग्रामीण महिलाओं को सीधा बैंक भुगतान व आजीविका।',
    metric: '₹2.4 Cr Paid Wages',
    metricHi: '₹2.4 करोड़ कुल मजदूरी',
    imageUrl: 'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'm3',
    year: 2023,
    title: '48,000 Tree Saplings Planted & Protected',
    titleHi: '48,000 फलदार व छायादार पौधों का सघन रोपण',
    category: 'Environment',
    categoryHi: 'पर्यावरण',
    description: 'Green drive across Gaya, Aurangabad, and Saran with 120 rainwater harvesting pits installed in rural schools.',
    descriptionHi: 'गया व औरंगाबाद के 120 गांवों में वर्षा जल संचयन तथा हरित ग्राम अभियानों का क्रियान्वयन।',
    metric: '120 Green Villages',
    metricHi: '120 हरित ग्राम',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'm4',
    year: 2023,
    title: '32,000 Free Rural Health Checkups & Medicine',
    titleHi: '32,000 से अधिक ग्रामीणों को नि:शुल्क चिकित्सीय परामर्श',
    category: 'Healthcare',
    categoryHi: 'स्वास्थ्य सेवा',
    description: 'Mobile health clinics offering blood screening, maternal care, eye checkups, and free medicine distribution.',
    descriptionHi: 'सुदूर क्षेत्रों में मोबाइल मेडिकल वैन द्वारा स्वास्थ्य परीक्षण, दवा वितरण व मातृ स्वास्थ्य सुरक्षा।',
    metric: '45 Health Camps',
    metricHi: '45 नि:शुल्क शिविर',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
  },
];

interface ImpactGalleryProps {
  onOpenDonate?: () => void;
}

export const ImpactGallery: React.FC<ImpactGalleryProps> = ({ onOpenDonate }) => {
  const { t, isHindi } = useLanguage();
  const [activeMetric, setActiveMetric] = useState<'students' | 'women' | 'trees' | 'healthcare'>('students');
  const [selectedYearFilter, setSelectedYearFilter] = useState<number | 'all'>('all');
  
  const lineChartRef = useRef<SVGSVGElement | null>(null);
  const donutChartRef = useRef<SVGSVGElement | null>(null);
  const barChartRef = useRef<SVGSVGElement | null>(null);

  // D3 Chart 1: Interactive Growth Multi-Line & Area Chart
  useEffect(() => {
    if (!lineChartRef.current) return;

    const svg = d3.select(lineChartRef.current);
    svg.selectAll('*').remove();

    const width = lineChartRef.current.clientWidth || 600;
    const height = 340;
    const margin = { top: 30, right: 30, bottom: 40, left: 55 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = svg
      .attr('viewBox', `0 0 ${width} ${height}`)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // X Scale
    const xScale = d3
      .scalePoint<number>()
      .domain(HISTORICAL_GROWTH.map((d) => d.year))
      .range([0, innerWidth])
      .padding(0.2);

    // Y Scale
    const maxY = d3.max(HISTORICAL_GROWTH, (d) => d[activeMetric]) || 20000;
    const yScale = d3
      .scaleLinear()
      .domain([0, maxY * 1.1])
      .nice()
      .range([innerHeight, 0]);

    // Color theme based on active metric
    const isPrimaryGreen = activeMetric === 'students' || activeMetric === 'trees';
    const mainColor = isPrimaryGreen ? '#064e3b' : '#ea580c';
    const accentColor = isPrimaryGreen ? '#ea580c' : '#064e3b';
    const gradientId = `growth-gradient-${activeMetric}`;

    // Gradient definition
    const defs = svg.append('defs');
    const linearGradient = defs
      .append('linearGradient')
      .attr('id', gradientId)
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%');

    linearGradient
      .append('stop')
      .attr('offset', '0%')
      .attr('stop-color', mainColor)
      .attr('stop-opacity', 0.45);

    linearGradient
      .append('stop')
      .attr('offset', '100%')
      .attr('stop-color', mainColor)
      .attr('stop-opacity', 0.02);

    // Grid lines
    g.append('g')
      .attr('class', 'grid-lines')
      .call(
        d3
          .axisLeft(yScale)
          .ticks(5)
          .tickSize(-innerWidth)
          .tickFormat(() => '')
      )
      .selectAll('line')
      .attr('stroke', '#e2e8f0')
      .attr('stroke-dasharray', '3,3');

    // Axes
    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3
      .axisLeft(yScale)
      .ticks(5)
      .tickFormat((d) => `${d3.format(',')(d as number)}`);

    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(xAxis)
      .selectAll('text')
      .attr('fill', '#1e293b')
      .style('font-family', "'Open Sauce Sans', 'Open Sans', sans-serif")
      .style('font-weight', '600')
      .style('font-size', '12px');

    g.append('g')
      .call(yAxis)
      .selectAll('text')
      .attr('fill', '#1e293b')
      .style('font-family', "'Open Sauce Sans', 'Open Sans', sans-serif")
      .style('font-weight', '600')
      .style('font-size', '11px');

    // Remove domain axis lines for modern look
    g.selectAll('.domain').attr('stroke', '#cbd5e1').attr('stroke-width', 1.5);

    // Area Generator
    const areaGenerator = d3
      .area<GrowthMetric>()
      .x((d) => xScale(d.year) || 0)
      .y0(innerHeight)
      .y1((d) => yScale(d[activeMetric]))
      .curve(d3.curveMonotoneX);

    // Line Generator
    const lineGenerator = d3
      .line<GrowthMetric>()
      .x((d) => xScale(d.year) || 0)
      .y((d) => yScale(d[activeMetric]))
      .curve(d3.curveMonotoneX);

    // Render Area
    g.append('path')
      .datum(HISTORICAL_GROWTH)
      .attr('fill', `url(#${gradientId})`)
      .attr('d', areaGenerator);

    // Render Line
    const path = g
      .append('path')
      .datum(HISTORICAL_GROWTH)
      .attr('fill', 'none')
      .attr('stroke', mainColor)
      .attr('stroke-width', 3.5)
      .attr('d', lineGenerator);

    // Path Animation
    const totalLength = path.node()?.getTotalLength() || 0;
    path
      .attr('stroke-dasharray', `${totalLength} ${totalLength}`)
      .attr('stroke-dashoffset', totalLength)
      .transition()
      .duration(1200)
      .ease(d3.easeCubicOut)
      .attr('stroke-dashoffset', 0);

    // Secondary Line (Students vs Women comparison)
    if (activeMetric === 'students' || activeMetric === 'women') {
      const secondaryMetric = activeMetric === 'students' ? 'women' : 'students';
      const secondaryLine = d3
        .line<GrowthMetric>()
        .x((d) => xScale(d.year) || 0)
        .y((d) => yScale(d[secondaryMetric]))
        .curve(d3.curveMonotoneX);

      g.append('path')
        .datum(HISTORICAL_GROWTH)
        .attr('fill', 'none')
        .attr('stroke', accentColor)
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '4,4')
        .attr('opacity', 0.8)
        .attr('d', secondaryLine);
    }

    // Dots & Interactive Tooltips
    const tooltip = d3
      .select('body')
      .selectAll('#d3-impact-tooltip')
      .data([0])
      .join('div')
      .attr('id', 'd3-impact-tooltip')
      .style('position', 'absolute')
      .style('visibility', 'hidden')
      .style('background-color', '#064e3b')
      .style('color', '#ffffff')
      .style('padding', '8px 12px')
      .style('border-radius', '8px')
      .style('font-family', "'Open Sauce Sans', 'Open Sans', sans-serif")
      .style('font-weight', '600')
      .style('font-size', '12px')
      .style('box-shadow', '0 10px 15px -3px rgba(0,0,0,0.3)')
      .style('border', '2px solid #ea580c')
      .style('pointer-events', 'none')
      .style('z-index', '9999');

    g.selectAll('.data-dot')
      .data(HISTORICAL_GROWTH)
      .enter()
      .append('circle')
      .attr('class', 'data-dot')
      .attr('cx', (d) => xScale(d.year) || 0)
      .attr('cy', (d) => yScale(d[activeMetric]))
      .attr('r', 6)
      .attr('fill', '#ffffff')
      .attr('stroke', mainColor)
      .attr('stroke-width', 3)
      .style('cursor', 'pointer')
      .on('mouseover', function (event, d) {
        d3.select(this)
          .transition()
          .duration(150)
          .attr('r', 9)
          .attr('fill', mainColor)
          .attr('stroke', '#ffffff');

        const val = d[activeMetric].toLocaleString('en-IN');
        const metricName =
          activeMetric === 'students'
            ? isHindi ? 'शिक्षित छात्र' : 'Students Educated'
            : activeMetric === 'women'
            ? isHindi ? 'सशक्त महिलाएं' : 'Women Empowered'
            : activeMetric === 'trees'
            ? isHindi ? 'वृक्षारोपण' : 'Trees Planted'
            : isHindi ? 'स्वास्थ्य लाभार्थी' : 'Health Care Beneficiaries';

        tooltip
          .html(
            `<div style="font-family:'Alex Brush', cursive; font-size:20px; color:#f97316;">${d.year} ${isHindi ? 'वार्षिक उपलब्धि' : 'Milestone'}</div>
             <div style="font-size:13px; font-weight:bold;">${metricName}: <span style="color:#fde047;">${val}</span></div>
             <div style="font-size:10px; opacity:0.8;">${d.villages} ${isHindi ? 'गांव शामिल' : 'Villages Covered'}</div>`
          )
          .style('visibility', 'visible');
      })
      .on('mousemove', function (event) {
        tooltip
          .style('top', `${event.pageY - 65}px`)
          .style('left', `${event.pageX + 12}px`);
      })
      .on('mouseout', function () {
        d3.select(this)
          .transition()
          .duration(150)
          .attr('r', 6)
          .attr('fill', '#ffffff')
          .attr('stroke', mainColor);

        tooltip.style('visibility', 'hidden');
      });

  }, [activeMetric, isHindi]);

  // D3 Chart 2: Donut Chart for Sector Distribution
  useEffect(() => {
    if (!donutChartRef.current) return;

    const svg = d3.select(donutChartRef.current);
    svg.selectAll('*').remove();

    const width = donutChartRef.current.clientWidth || 320;
    const height = 300;
    const radius = Math.min(width, height) / 2 - 15;

    const g = svg
      .attr('viewBox', `0 0 ${width} ${height}`)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const pie = d3
      .pie<SectorShare>()
      .value((d) => d.value)
      .sort(null);

    const arc = d3
      .arc<d3.PieArcDatum<SectorShare>>()
      .innerRadius(radius * 0.52)
      .outerRadius(radius * 0.9);

    const hoverArc = d3
      .arc<d3.PieArcDatum<SectorShare>>()
      .innerRadius(radius * 0.5)
      .outerRadius(radius * 0.98);

    const arcs = g
      .selectAll('.arc')
      .data(pie(SECTOR_DISTRIBUTION))
      .enter()
      .append('g')
      .attr('class', 'arc');

    const tooltip = d3
      .select('body')
      .selectAll('#d3-donut-tooltip')
      .data([0])
      .join('div')
      .attr('id', 'd3-donut-tooltip')
      .style('position', 'absolute')
      .style('visibility', 'hidden')
      .style('background-color', '#1e293b')
      .style('color', '#ffffff')
      .style('padding', '6px 12px')
      .style('border-radius', '8px')
      .style('font-family', "'Open Sauce Sans', 'Open Sans', sans-serif")
      .style('font-weight', '600')
      .style('font-size', '12px')
      .style('border', '2px solid #ea580c')
      .style('z-index', '9999');

    arcs
      .append('path')
      .attr('d', arc)
      .attr('fill', (d) => d.data.color)
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 2.5)
      .style('cursor', 'pointer')
      .on('mouseover', function (event, d) {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('d', hoverArc);

        tooltip
          .html(
            `<strong style="color:#fb923c">${isHindi ? d.data.labelHi : d.data.label}</strong>: ${d.data.value}% (${d.data.count})`
          )
          .style('visibility', 'visible');
      })
      .on('mousemove', (event) => {
        tooltip
          .style('top', `${event.pageY - 40}px`)
          .style('left', `${event.pageX + 10}px`);
      })
      .on('mouseout', function () {
        d3.select(this)
          .transition()
          .duration(200)
          .attr('d', arc);

        tooltip.style('visibility', 'hidden');
      });

    // Center Label
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '-0.2em')
      .style('font-family', "'Alex Brush', cursive")
      .style('font-size', '28px')
      .style('fill', '#064e3b')
      .text('100%');

    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '1.2em')
      .style('font-family', "'Open Sauce Sans', 'Open Sans', sans-serif")
      .style('font-weight', '600')
      .style('font-size', '11px')
      .style('fill', '#ea580c')
      .text(isHindi ? 'समुदाय केंद्रित प्रभाव' : 'Community Reach');

  }, [isHindi]);

  // D3 Chart 3: Horizontal Bar Chart for District Reach
  useEffect(() => {
    if (!barChartRef.current) return;

    const svg = d3.select(barChartRef.current);
    svg.selectAll('*').remove();

    const width = barChartRef.current.clientWidth || 550;
    const height = 300;
    const margin = { top: 20, right: 60, bottom: 20, left: 100 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const g = svg
      .attr('viewBox', `0 0 ${width} ${height}`)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const yScale = d3
      .scaleBand<string>()
      .domain(DISTRICT_DATA.map((d) => (isHindi ? d.districtHi : d.district)))
      .range([0, innerHeight])
      .padding(0.25);

    const maxBeneficiaries = d3.max(DISTRICT_DATA, (d) => d.beneficiaries) || 20000;
    const xScale = d3
      .scaleLinear()
      .domain([0, maxBeneficiaries])
      .range([0, innerWidth]);

    // Y Axis
    g.append('g')
      .call(d3.axisLeft(yScale))
      .selectAll('text')
      .attr('fill', '#064e3b')
      .style('font-family', "'Open Sauce Sans', 'Open Sans', sans-serif")
      .style('font-weight', '600')
      .style('font-size', '12px');

    g.selectAll('.domain, .tick line').remove();

    // Bars
    g.selectAll('.district-bar')
      .data(DISTRICT_DATA)
      .enter()
      .append('rect')
      .attr('class', 'district-bar')
      .attr('y', (d) => yScale(isHindi ? d.districtHi : d.district) || 0)
      .attr('x', 0)
      .attr('height', yScale.bandwidth())
      .attr('width', 0)
      .attr('fill', (d) => d.color)
      .attr('rx', 5)
      .style('cursor', 'pointer')
      .transition()
      .duration(900)
      .delay((d, i) => i * 80)
      .attr('width', (d) => xScale(d.beneficiaries));

    // Value Labels
    g.selectAll('.bar-label')
      .data(DISTRICT_DATA)
      .enter()
      .append('text')
      .attr('class', 'bar-label')
      .attr('y', (d) => (yScale(isHindi ? d.districtHi : d.district) || 0) + yScale.bandwidth() / 2 + 4)
      .attr('x', (d) => xScale(d.beneficiaries) + 8)
      .attr('fill', '#ea580c')
      .style('font-family', "'Open Sauce Sans', 'Open Sans', sans-serif")
      .style('font-weight', '600')
      .style('font-size', '11px')
      .text((d) => d.beneficiaries.toLocaleString('en-IN'));

  }, [isHindi]);

  const filteredCards = selectedYearFilter === 'all'
    ? IMPACT_GALLERY_CARDS
    : IMPACT_GALLERY_CARDS.filter((c) => c.year === selectedYearFilter);

  return (
    <div className="bg-white rounded-3xl border-4 border-[#064e3b] shadow-2xl p-6 sm:p-10 space-y-12 relative overflow-hidden">
      
      {/* Decorative Top Accent Bar */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-[#064e3b] via-[#ea580c] to-[#064e3b]"></div>

      {/* HEADER SECTION */}
      <div className="text-center space-y-3 pt-2">
        <div className="inline-flex items-center gap-2 bg-[#064e3b]/10 text-[#064e3b] px-4 py-1.5 rounded-full border-2 border-[#064e3b] font-comic text-xs">
          <Sparkles className="w-4 h-4 text-[#ea580c]" />
          <span>{isHindi ? 'डी3 डेटा आधारित गांव समाज रिपोर्ट' : 'D3 Interactive Community Metrics'}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-bhavuka font-black text-[#064e3b] leading-tight">
          {isHindi ? 'प्रभाव गैलरी: बिहार विकास गाथा' : 'IMPACT GALLERY & GROWTH METRICS'}
        </h2>

        <p className="max-w-2xl mx-auto font-comic text-sm text-[#064e3b] leading-relaxed">
          {isHindi
            ? 'वर्ष 2019 से 2025 तक शिक्षा, महिला सशक्तिकरण, वृक्षारोपण और स्वास्थ्य देखभाल में दर्ज की गई ऐतिहासिक प्रगति का डेटा दृश्य।'
            : 'Explore D3-driven analytics depicting grassroots transformations in students educated, women empowered, and villages transformed across Bihar.'}
        </p>
      </div>

      {/* TOP METRIC HIGHLIGHT CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        
        <div className="bg-[#064e3b] text-white p-5 rounded-2xl border-2 border-[#ea580c] shadow-md flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <GraduationCap className="w-8 h-8 text-[#f97316]" />
            <span className="font-comic text-[10px] bg-[#ea580c] px-2 py-0.5 rounded text-white">2019-2025</span>
          </div>
          <div>
            <div className="font-comic text-2xl sm:text-3xl font-bold text-[#fdba74]">18,500+</div>
            <div className="font-bhavuka text-sm text-white mt-0.5">
              {isHindi ? 'शिक्षित ग्रामीण छात्र' : 'Students Educated'}
            </div>
          </div>
        </div>

        <div className="bg-[#ea580c] text-white p-5 rounded-2xl border-2 border-[#064e3b] shadow-md flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <Users className="w-8 h-8 text-[#fdba74]" />
            <span className="font-comic text-[10px] bg-[#064e3b] px-2 py-0.5 rounded text-white">2019-2025</span>
          </div>
          <div>
            <div className="font-comic text-2xl sm:text-3xl font-bold text-white">14,200+</div>
            <div className="font-bhavuka text-sm text-white mt-0.5">
              {isHindi ? 'सशक्त महिलाएं' : 'Women Empowered'}
            </div>
          </div>
        </div>

        <div className="bg-[#064e3b] text-white p-5 rounded-2xl border-2 border-[#ea580c] shadow-md flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <Sprout className="w-8 h-8 text-[#f97316]" />
            <span className="font-comic text-[10px] bg-[#ea580c] px-2 py-0.5 rounded text-white">2019-2025</span>
          </div>
          <div>
            <div className="font-comic text-2xl sm:text-3xl font-bold text-[#fdba74]">48,000+</div>
            <div className="font-bhavuka text-sm text-white mt-0.5">
              {isHindi ? 'वृक्षारोपण एवं संरक्षण' : 'Trees Planted'}
            </div>
          </div>
        </div>

        <div className="bg-[#ea580c] text-white p-5 rounded-2xl border-2 border-[#064e3b] shadow-md flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <Heart className="w-8 h-8 text-[#fdba74]" />
            <span className="font-comic text-[10px] bg-[#064e3b] px-2 py-0.5 rounded text-white">2019-2025</span>
          </div>
          <div>
            <div className="font-comic text-2xl sm:text-3xl font-bold text-white">32,000+</div>
            <div className="font-bhavuka text-sm text-white mt-0.5">
              {isHindi ? 'स्वास्थ्य शिविर लाभ' : 'Health Beneficiaries'}
            </div>
          </div>
        </div>

      </div>

      {/* SECTION 1: D3 HISTORICAL GROWTH CHART */}
      <div className="bg-[#fcfbf7] border-3 border-[#064e3b] rounded-2xl p-5 sm:p-7 shadow-sm space-y-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b-2 border-[#064e3b]/20 pb-4">
          <div>
            <h3 className="text-2xl font-bhavuka font-bold text-[#064e3b]">
              {isHindi ? 'वर्षवार विकास रुझान (D3 ग्राफ)' : 'Multi-Year Growth Trajectory (D3)'}
            </h3>
            <p className="font-comic text-xs text-[#ea580c] font-bold">
              {isHindi ? 'बिंदुओं पर माउस ले जाकर सटीक आंकड़े देखें' : 'Hover over data nodes for detailed year-on-year metrics'}
            </p>
          </div>

          {/* Metric Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveMetric('students')}
              className={`px-3 py-1.5 rounded-lg font-comic text-xs transition-all border-2 ${
                activeMetric === 'students'
                  ? 'bg-[#064e3b] text-white border-[#064e3b] shadow-sm'
                  : 'bg-white text-[#064e3b] border-[#064e3b] hover:bg-[#064e3b]/10'
              }`}
            >
              🎓 {isHindi ? 'छात्र शिक्षा' : 'Students Educated'}
            </button>
            <button
              onClick={() => setActiveMetric('women')}
              className={`px-3 py-1.5 rounded-lg font-comic text-xs transition-all border-2 ${
                activeMetric === 'women'
                  ? 'bg-[#ea580c] text-white border-[#ea580c] shadow-sm'
                  : 'bg-white text-[#ea580c] border-[#ea580c] hover:bg-[#ea580c]/10'
              }`}
            >
              👩 {isHindi ? 'महिला सशक्तिकरण' : 'Women Empowered'}
            </button>
            <button
              onClick={() => setActiveMetric('trees')}
              className={`px-3 py-1.5 rounded-lg font-comic text-xs transition-all border-2 ${
                activeMetric === 'trees'
                  ? 'bg-[#064e3b] text-white border-[#064e3b] shadow-sm'
                  : 'bg-white text-[#064e3b] border-[#064e3b] hover:bg-[#064e3b]/10'
              }`}
            >
              🌱 {isHindi ? 'वृक्षारोपण' : 'Trees Planted'}
            </button>
            <button
              onClick={() => setActiveMetric('healthcare')}
              className={`px-3 py-1.5 rounded-lg font-comic text-xs transition-all border-2 ${
                activeMetric === 'healthcare'
                  ? 'bg-[#ea580c] text-white border-[#ea580c] shadow-sm'
                  : 'bg-white text-[#ea580c] border-[#ea580c] hover:bg-[#ea580c]/10'
              }`}
            >
              🏥 {isHindi ? 'स्वास्थ्य सेवा' : 'Healthcare'}
            </button>
          </div>
        </div>

        {/* D3 Line/Area SVG Container */}
        <div className="w-full overflow-x-auto">
          <svg ref={lineChartRef} className="w-full min-w-[500px] h-[340px]" />
        </div>

        <div className="flex flex-wrap justify-between items-center gap-2 text-xs font-comic text-[#064e3b] bg-white p-3 rounded-xl border border-[#064e3b]/30">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#064e3b] inline-block"></span>
            <span>{isHindi ? 'मुख्य चयनित श्रेणी' : 'Primary Metric Stream'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-0.5 border-t-2 border-dashed border-[#ea580c] inline-block"></span>
            <span>{isHindi ? 'समानांतर तुलनात्मक श्रेणी' : 'Comparative Benchmark Stream'}</span>
          </div>
          <div className="text-[#ea580c] font-bold">
            {isHindi ? 'कुल शामिल गांव: 185' : 'Total Villages Covered: 185'}
          </div>
        </div>

      </div>

      {/* SECTION 2: DONUT CHART & DISTRICT REACH (2 COLUMNS) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* DONUT CHART (D3) */}
        <div className="lg:col-span-5 bg-[#fcfbf7] border-3 border-[#ea580c] rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <h3 className="text-2xl font-bhavuka font-bold text-[#ea580c]">
              {isHindi ? 'क्षेत्रवार आवंटन (D3 पाई चार्ट)' : 'Sectoral Allocation (D3 Donut)'}
            </h3>
            <p className="font-comic text-xs text-[#064e3b] font-bold mt-1">
              {isHindi ? 'गांव समाज के विभिन्न कार्यक्रमों में संसाधनों का वितरण' : 'Resource and effort distribution across program focus verticals'}
            </p>
          </div>

          <div className="w-full flex justify-center py-2">
            <svg ref={donutChartRef} className="w-full max-w-[320px] h-[300px]" />
          </div>

          {/* Legend Grid */}
          <div className="space-y-2 pt-2 border-t border-[#ea580c]/20">
            {SECTOR_DISTRIBUTION.map((s, idx) => (
              <div key={idx} className="flex justify-between items-center text-xs font-comic">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-md" style={{ backgroundColor: s.color }}></span>
                  <span className="text-[#064e3b]">{isHindi ? s.labelHi : s.label}</span>
                </div>
                <span className="text-[#ea580c] font-bold">{s.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* DISTRICT REACH BAR CHART (D3) */}
        <div className="lg:col-span-7 bg-[#fcfbf7] border-3 border-[#064e3b] rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-4">
          <div>
            <h3 className="text-2xl font-bhavuka font-bold text-[#064e3b]">
              {isHindi ? 'बिहार जिलेवार पहुंचे (D3 बार चार्ट)' : 'Bihar District Reach (D3 Bars)'}
            </h3>
            <p className="font-comic text-xs text-[#ea580c] font-bold mt-1">
              {isHindi ? 'प्रमुख 8 जिलों में लाभान्वित नागरिकों की संख्या' : 'Direct beneficiaries reached across key operating districts'}
            </p>
          </div>

          <div className="w-full overflow-x-auto py-2">
            <svg ref={barChartRef} className="w-full min-w-[480px] h-[300px]" />
          </div>

          <div className="bg-white p-3 rounded-xl border border-[#064e3b]/30 text-xs font-comic text-[#064e3b] flex justify-between items-center">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#ea580c]" />
              {isHindi ? 'सभी 38 जिलों में विस्तार जारी' : 'Expanding across all 38 Bihar districts'}
            </span>
            <span className="text-[#ea580c] font-bold">100,000+ Total Reached</span>
          </div>
        </div>

      </div>

      {/* SECTION 3: MILESTONES PHOTO GALLERY */}
      <div className="space-y-6 pt-4">
        
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h3 className="text-3xl font-bhavuka font-black text-[#064e3b]">
              {isHindi ? 'चित्रमय क्षेत्र उपलब्धियां' : 'FIELD MILESTONE PHOTO GALLERY'}
            </h3>
            <p className="font-comic text-xs text-[#ea580c] font-bold mt-1">
              {isHindi ? 'जमीनी स्तर पर बदलाव की वास्तविक झलकियां' : 'Visual records of impact on the ground across Bihar'}
            </p>
          </div>

          {/* Year Filter Buttons */}
          <div className="flex items-center gap-2 bg-[#fcfbf7] p-1.5 rounded-xl border-2 border-[#064e3b]">
            <Filter className="w-4 h-4 text-[#ea580c] ml-1" />
            <button
              onClick={() => setSelectedYearFilter('all')}
              className={`px-3 py-1 rounded-lg font-comic text-xs font-bold transition-all ${
                selectedYearFilter === 'all'
                  ? 'bg-[#ea580c] text-white'
                  : 'text-[#064e3b] hover:bg-[#064e3b]/10'
              }`}
            >
              {isHindi ? 'सभी वर्ष' : 'All Years'}
            </button>
            <button
              onClick={() => setSelectedYearFilter(2024)}
              className={`px-3 py-1 rounded-lg font-comic text-xs font-bold transition-all ${
                selectedYearFilter === 2024
                  ? 'bg-[#ea580c] text-white'
                  : 'text-[#064e3b] hover:bg-[#064e3b]/10'
              }`}
            >
              2024
            </button>
            <button
              onClick={() => setSelectedYearFilter(2023)}
              className={`px-3 py-1 rounded-lg font-comic text-xs font-bold transition-all ${
                selectedYearFilter === 2023
                  ? 'bg-[#ea580c] text-white'
                  : 'text-[#064e3b] hover:bg-[#064e3b]/10'
              }`}
            >
              2023
            </button>
          </div>
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="bg-[#fcfbf7] rounded-2xl border-3 border-[#064e3b] overflow-hidden shadow-lg hover:border-[#ea580c] transition-all flex flex-col justify-between"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={isHindi ? card.titleHi : card.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#064e3b] text-white font-comic text-xs px-3 py-1 rounded-full border border-[#ea580c]">
                  {card.year} • {isHindi ? card.categoryHi : card.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-[#ea580c] text-white font-comic text-xs font-bold px-3 py-1 rounded-lg shadow-md">
                  {isHindi ? card.metricHi : card.metric}
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-xl font-bhavuka font-bold text-[#064e3b] leading-tight">
                    {isHindi ? card.titleHi : card.title}
                  </h4>
                  <p className="font-comic text-xs text-[#064e3b]/90 leading-relaxed mt-2">
                    {isHindi ? card.descriptionHi : card.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#064e3b]/20 flex justify-between items-center">
                  <span className="font-comic text-[11px] text-[#ea580c] font-bold flex items-center gap-1">
                    <Award className="w-3.5 h-3.5" />
                    {isHindi ? 'सत्यापित जमीनी रिपोर्ट' : 'Verified Field Impact'}
                  </span>
                  
                  {onOpenDonate && (
                    <button
                      onClick={onOpenDonate}
                      className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-comic font-bold text-xs px-4 py-2 rounded-xl transition-colors shadow-xs flex items-center gap-1"
                    >
                      <span>{isHindi ? 'सहयोग दें' : 'Support Cause'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* CTA BANNER */}
      <div className="bg-[#064e3b] text-white rounded-2xl p-6 sm:p-8 border-3 border-[#ea580c] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center sm:text-left">
          <h3 className="text-2xl sm:text-3xl font-bhavuka font-black text-[#fdba74]">
            {isHindi ? 'हमारे अगले प्रभाव लक्ष्य का हिस्सा बनें' : 'Be Part of Our Next Impact Milestone'}
          </h3>
          <p className="font-comic text-xs sm:text-sm text-white/90">
            {isHindi
              ? 'आपका योगदान बिहार के गांवों में एक छात्र की शिक्षा या महिला को आजीविका प्रदान कर सकता है।'
              : 'Your support directly funds rural school classrooms, Madhubani artisan kits, and mobile health clinics in Bihar.'}
          </p>
        </div>

        {onOpenDonate && (
          <button
            onClick={onOpenDonate}
            className="bg-[#ea580c] hover:bg-[#c2410c] text-white font-comic text-sm font-black px-6 py-3.5 rounded-xl transition-transform hover:scale-105 shadow-md flex items-center gap-2 whitespace-nowrap"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>{isHindi ? 'दान करें (80G छूट)' : 'Donate Now (80G Tax Free)'}</span>
          </button>
        )}
      </div>

    </div>
  );
};
