import React, { useState, useEffect, useRef } from 'react';
import { 
  QuestionItem, 
  Mode, 
  UserAnswerState,
  HighlightItem
} from '../types';
import { 
  QUESTIONS, 
  TIP_STRIP_PART1, 
  TIP_STRIP_PART2, 
  REVIEW_QUESTIONS,
  ACTION_PLAN_TFNG,
  ACTION_PLAN_TABLE,
  STRATEGY_EXTRACTS,
  ERROR_ANALYSIS_ITEMS,
  ERROR_ANALYSIS_REASONS,
  checkAnswerCorrectness 
} from '../data/ieltsData';
import { 
  Lightbulb, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  ExternalLink, 
  Flag,
  BookOpen,
  Plus,
  Languages,
  CheckSquare,
  Highlighter as HighlighterIcon,
  AlertTriangle,
  FileCheck,
  Target,
  ArrowRight,
  Table
} from 'lucide-react';
import { TableCompletionView } from './TableCompletionView';

interface QuestionsViewProps {
  mode: Mode;
  userAnswers: UserAnswerState;
  onAnswerChange: (questionId: number, answer: string) => void;
  onJumpToParagraph: (paragraphId: number) => void;
  flaggedQuestions: Set<number>;
  onToggleFlag: (questionId: number) => void;
  isSubmitted: boolean;
  onGoToConsolidation?: () => void;
  highlighterColor?: 'yellow' | 'green' | 'cyan' | 'pink' | 'eraser' | null;
  highlights?: HighlightItem[];
  onAddHighlight?: (highlight: HighlightItem) => void;
  onRemoveHighlight?: (id: string) => void;
  onAddNoteSnippet?: (text: string) => void;
}

export const QuestionsView: React.FC<QuestionsViewProps> = ({
  mode,
  userAnswers,
  onAnswerChange,
  onJumpToParagraph,
  flaggedQuestions,
  onToggleFlag,
  isSubmitted,
  onGoToConsolidation,
  highlighterColor = null,
  highlights = [],
  onAddHighlight,
  onRemoveHighlight,
  onAddNoteSnippet,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Practice mode state: which questions have their explanation open or checked
  const [checkedQuestions, setCheckedQuestions] = useState<{ [key: number]: boolean }>({});
  const [openExplanations, setOpenExplanations] = useState<{ [key: number]: boolean }>({});
  const [openTips, setOpenTips] = useState<{ [key: number]: boolean }>({});
  const [openAdvices, setOpenAdvices] = useState<{ [key: number]: boolean }>({});

  // Language display mode: 'bilingual' (English + Vietnamese), 'vi' (Vietnamese priority), 'en' (English only)
  const [explanationLanguage, setExplanationLanguage] = useState<'bilingual' | 'vi' | 'en'>('bilingual');
  
  // Floating selection menu state for questions
  const [floatingMenu, setFloatingMenu] = useState<{
    visible: boolean;
    x: number;
    y: number;
    text: string;
    questionId: number;
  } | null>(null);

  // When test is not submitted and answers are empty (retake / reset), clear checked states
  useEffect(() => {
    if (!isSubmitted && Object.keys(userAnswers).length === 0) {
      setCheckedQuestions({});
      setOpenExplanations({});
    }
  }, [isSubmitted, userAnswers]);

  // Section collapse states
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isStrategyExtractsOpen, setIsStrategyExtractsOpen] = useState(false);
  const [isErrorAnalysisOpen, setIsErrorAnalysisOpen] = useState(false);
  const [isActionPlanTfngOpen, setIsActionPlanTfngOpen] = useState(false);
  const [isActionPlanTableOpen, setIsActionPlanTableOpen] = useState(false);
  const [isTipStrip1Open, setIsTipStrip1Open] = useState(true);
  const [isTipStrip2Open, setIsTipStrip2Open] = useState(true);

  // Interactive state for Strategy Extracts (Extracts A-F)
  const [extractUserAnswers, setExtractUserAnswers] = useState<{ [id: string]: string }>({});
  const [extractRevealed, setExtractRevealed] = useState<{ [id: string]: boolean }>({});

  // Interactive state for Error Analysis
  const [errorAnalysisMatches, setErrorAnalysisMatches] = useState<{ [id: number]: string }>({});
  const [errorAnalysisRevealed, setErrorAnalysisRevealed] = useState<{ [id: number]: boolean }>({});

  // Active question filter tab (all, part1: 1-6 T/F/NG, part2: 7-13 Table Completion)
  const [activeFilter, setActiveFilter] = useState<'all' | 'part1' | 'part2'>('all');

  // Handle text selection inside question cards
  const handleMouseUp = () => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !selection.toString().trim()) {
      setFloatingMenu(null);
      return;
    }

    const text = selection.toString().trim();
    if (!text || text.length < 2) {
      setFloatingMenu(null);
      return;
    }

    let node: Node | null = selection.anchorNode;
    let qId: number | null = null;

    while (node && !qId) {
      if (node instanceof HTMLElement) {
        const attr = node.getAttribute('data-question-id');
        if (attr) qId = parseInt(attr, 10);
      }
      node = node.parentNode;
    }

    if (!qId) {
      const range = selection.getRangeAt(0);
      let container: HTMLElement | null = range.commonAncestorContainer as HTMLElement;
      if (container.nodeType === Node.TEXT_NODE) {
        container = container.parentElement;
      }
      const attr = container?.closest('[data-question-id]')?.getAttribute('data-question-id');
      if (attr) qId = parseInt(attr, 10);
    }

    if (!qId) return;

    if (highlighterColor && highlighterColor !== 'eraser' && onAddHighlight) {
      onAddHighlight({
        id: 'hl-q-' + Date.now(),
        text,
        color: highlighterColor,
        paragraphId: 9990 + qId,
      });
      setFloatingMenu(null);
      return;
    }

    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (containerRect) {
      setFloatingMenu({
        visible: true,
        x: rect.left - containerRect.left + rect.width / 2,
        y: rect.top - containerRect.top - 42,
        text,
        questionId: qId,
      });
    }
  };

  const applyColorFromPopup = (color: 'yellow' | 'green' | 'cyan' | 'pink') => {
    if (floatingMenu && onAddHighlight) {
      onAddHighlight({
        id: 'hl-q-' + Date.now(),
        text: floatingMenu.text,
        color,
        paragraphId: 9990 + floatingMenu.questionId,
      });
    }
    setFloatingMenu(null);
  };

  const copySnippetToNotes = () => {
    if (floatingMenu && onAddNoteSnippet) {
      onAddNoteSnippet(`[Q${floatingMenu.questionId}] "${floatingMenu.text}"`);
    }
    setFloatingMenu(null);
  };

  const toggleExplanation = (questionId: number) => {
    setOpenExplanations((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const toggleTip = (questionId: number) => {
    setOpenTips((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const toggleAdvice = (questionId: number) => {
    setOpenAdvices((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const handleCheckQuestion = (questionId: number) => {
    setCheckedQuestions((prev) => ({
      ...prev,
      [questionId]: true,
    }));
    setOpenExplanations((prev) => ({
      ...prev,
      [questionId]: true,
    }));
  };

  const part1Questions = QUESTIONS.filter((q) => q.questionNumber >= 1 && q.questionNumber <= 6);
  const part2Questions = QUESTIONS.filter((q) => q.questionNumber >= 7 && q.questionNumber <= 13);

  // Helper to render highlighted text
  const renderHighlightedText = (text: string, questionId?: number) => {
    const qHighs = questionId
      ? highlights.filter((h) => h.paragraphId === 9990 + questionId)
      : [];

    if (!qHighs.length) return <>{text}</>;

    let segments: { text: string; highlight?: HighlightItem }[] = [{ text }];

    qHighs.forEach((hl) => {
      const nextSegments: { text: string; highlight?: HighlightItem }[] = [];
      const hlText = hl.text.trim();
      if (!hlText) return;

      segments.forEach((seg) => {
        if (seg.highlight) {
          nextSegments.push(seg);
          return;
        }

        const idx = seg.text.toLowerCase().indexOf(hlText.toLowerCase());
        if (idx === -1) {
          nextSegments.push(seg);
        } else {
          const before = seg.text.substring(0, idx);
          const matched = seg.text.substring(idx, idx + hlText.length);
          const after = seg.text.substring(idx + hlText.length);

          if (before) nextSegments.push({ text: before });
          nextSegments.push({ text: matched, highlight: hl });
          if (after) nextSegments.push({ text: after });
        }
      });

      segments = nextSegments;
    });

    return (
      <>
        {segments.map((s, idx) => {
          if (s.highlight) {
            const colorClass =
              s.highlight.color === 'yellow'
                ? 'bg-amber-200/90 text-slate-900'
                : s.highlight.color === 'green'
                ? 'bg-emerald-200/90 text-slate-900'
                : s.highlight.color === 'cyan'
                ? 'bg-sky-200/90 text-slate-900'
                : 'bg-pink-200/90 text-slate-900';

            return (
              <span
                key={idx}
                className={`${colorClass} px-0.5 rounded cursor-pointer transition-all hover:ring-1 hover:ring-slate-400`}
                title="Click to remove highlight"
                onClick={(e) => {
                  e.stopPropagation();
                  if (s.highlight && onRemoveHighlight) onRemoveHighlight(s.highlight.id);
                }}
              >
                {s.text}
              </span>
            );
          }
          return <span key={idx}>{s.text}</span>;
        })}
      </>
    );
  };

  return (
    <div
      ref={containerRef}
      onMouseUp={handleMouseUp}
      className="relative flex-1 bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden flex flex-col"
      style={{ minHeight: '580px', maxHeight: 'calc(100vh - 170px)' }}
    >
      {/* Top Header Section */}
      <div className="p-4 border-b border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3 shrink-0">
        <div className="flex items-center space-x-2">
          <h2 className="font-bold text-slate-800 text-sm tracking-tight flex items-center gap-1.5">
            <span>Questions 1–13</span>
          </h2>
          <span className="hidden sm:inline-block text-[10px] text-slate-500 font-medium bg-slate-200/70 px-1.5 py-0.5 rounded">
            Interactive Exam Sheet
          </span>
        </div>

        <div className="flex items-center space-x-3">
          {/* Language preference for explanations & tips (Practice or Post-submission) */}
          {(mode === 'practice' || isSubmitted) && (
            <div className="flex items-center bg-white border border-slate-200 rounded-lg p-0.5 shadow-2xs text-[11px]">
              <span className="px-1.5 text-slate-400 flex items-center gap-1 font-medium">
                <Languages className="w-3 h-3 text-blue-600" />
                <span className="hidden md:inline">Language:</span>
              </span>
              <button
                id="lang-bilingual-btn"
                onClick={() => setExplanationLanguage('bilingual')}
                className={`px-2 py-0.5 rounded font-semibold transition-all cursor-pointer ${
                  explanationLanguage === 'bilingual'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Song ngữ (Bilingual English & Vietnamese)"
              >
                Song ngữ
              </button>
              <button
                id="lang-vi-btn"
                onClick={() => setExplanationLanguage('vi')}
                className={`px-2 py-0.5 rounded font-semibold transition-all cursor-pointer ${
                  explanationLanguage === 'vi'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="Tiếng Việt (Vietnamese focus)"
              >
                Tiếng Việt
              </button>
              <button
                id="lang-en-btn"
                onClick={() => setExplanationLanguage('en')}
                className={`px-2 py-0.5 rounded font-semibold transition-all cursor-pointer ${
                  explanationLanguage === 'en'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
                title="English only"
              >
                English
              </button>
            </div>
          )}

          {/* Quick link to consolidation view if provided (Practice or Post-submission) */}
          {(mode === 'practice' || isSubmitted) && onGoToConsolidation && (
            <button
              id="goto-consolidation-top-btn"
              onClick={onGoToConsolidation}
              className="text-xs text-indigo-700 hover:text-indigo-900 font-semibold flex items-center gap-1 hover:underline cursor-pointer"
            >
              <span>Vocabulary & Skills</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* Floating popup for selection in Question cards */}
      {floatingMenu && floatingMenu.visible && (
        <div
          className="absolute z-50 bg-slate-900 text-white rounded-lg shadow-xl px-2 py-1.5 flex items-center space-x-1.5 -translate-x-1/2 animate-in fade-in zoom-in-95 duration-100"
          style={{ left: floatingMenu.x, top: floatingMenu.y }}
        >
          <span className="text-[10px] text-slate-400 font-semibold px-1 flex items-center gap-1">
            <HighlighterIcon className="w-3 h-3 text-amber-400" />
            <span>Mark:</span>
          </span>
          <button
            id="popup-q-hl-yellow"
            onClick={() => applyColorFromPopup('yellow')}
            className="w-5 h-5 rounded hover:scale-110 transition-transform cursor-pointer"
            style={{ backgroundColor: '#fef08a' }}
            title="Yellow"
          />
          <button
            id="popup-q-hl-green"
            onClick={() => applyColorFromPopup('green')}
            className="w-5 h-5 rounded hover:scale-110 transition-transform cursor-pointer"
            style={{ backgroundColor: '#bbf7d0' }}
            title="Green"
          />
          <button
            id="popup-q-hl-cyan"
            onClick={() => applyColorFromPopup('cyan')}
            className="w-5 h-5 rounded hover:scale-110 transition-transform cursor-pointer"
            style={{ backgroundColor: '#bae6fd' }}
            title="Cyan"
          />
          <button
            id="popup-q-hl-pink"
            onClick={() => applyColorFromPopup('pink')}
            className="w-5 h-5 rounded hover:scale-110 transition-transform cursor-pointer"
            style={{ backgroundColor: '#fbcfe8' }}
            title="Pink"
          />

          <div className="h-4 w-px bg-slate-700 mx-1" />

          {onAddNoteSnippet && (
            <button
              id="popup-q-copy-note"
              onClick={copySnippetToNotes}
              className="flex items-center space-x-1 text-[11px] text-amber-300 hover:text-amber-200 px-1.5 py-0.5 rounded hover:bg-slate-800 transition-colors cursor-pointer"
              title="Add question excerpt to Notes"
            >
              <Plus className="w-3 h-3" />
              <span>Note</span>
            </button>
          )}
        </div>
      )}

      {/* Navigator, Filters and Quick Jump */}
      <div className="px-4 sm:px-6 pt-3 pb-2 border-b border-slate-200 bg-white shrink-0">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              id="filter-all-btn"
              onClick={() => setActiveFilter('all')}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All (1–13)
            </button>
            <button
              id="filter-part1-btn"
              onClick={() => setActiveFilter('part1')}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'part1'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
              }`}
            >
              Part 1: T/F/NG (1–6)
            </button>
            <button
              id="filter-part2-btn"
              onClick={() => setActiveFilter('part2')}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                activeFilter === 'part2'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
              }`}
            >
              Part 2: Table Completion (7–13)
            </button>
          </div>
        </div>

        {/* Quick Jump Bar */}
        <div className="flex items-center space-x-1 sm:space-x-1.5 overflow-x-auto pb-1 scrollbar-none">
          {QUESTIONS.map((q) => {
            const hasAnswer = Boolean(userAnswers[q.id]?.trim());
            const isFlagged = flaggedQuestions.has(q.id);
            const isChecked = checkedQuestions[q.id] || (isSubmitted && mode === 'test');
            const isCorrect = isChecked ? checkAnswerCorrectness(q, userAnswers[q.id] || '') : false;

            let badgeColor = 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200';
            if (isChecked) {
              badgeColor = isCorrect
                ? 'bg-emerald-600 text-white border-emerald-700'
                : 'bg-rose-600 text-white border-rose-700';
            } else if (hasAnswer) {
              badgeColor = 'bg-blue-600 text-white border-blue-700 shadow-xs';
            }

            return (
              <a
                key={q.id}
                href={`#question-card-${q.id}`}
                id={`quick-jump-q-${q.id}`}
                className={`relative shrink-0 w-7 h-7 sm:w-7.5 sm:h-7.5 rounded text-xs font-bold flex items-center justify-center border transition-all ${badgeColor}`}
                title={`Jump to Question ${q.questionNumber}`}
              >
                {q.questionNumber}
                {isFlagged && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full ring-2 ring-white" />
                )}
              </a>
            );
          })}
        </div>
      </div>

      {/* Scrollable Questions Content */}
      <div className="p-4 sm:p-6 overflow-y-auto space-y-8 flex-1">
        
        {/* ========================================================= */}
        {/* EXAM STRATEGY: REVIEW, USEFUL STRATEGIES & ERROR ANALYSIS */}
        {/* Practice Mode Only - Removed in Test Mode                 */}
        {/* ========================================================= */}
        {mode === 'practice' && (
          <div className="space-y-3">
            {/* Review Box: 4 Questions from orienting Passage 1 */}
            <div className="border border-indigo-200 bg-indigo-50/70 rounded-xl overflow-hidden shadow-2xs">
            <button
              id="toggle-review-box-btn"
              onClick={() => setIsReviewOpen(!isReviewOpen)}
              className="w-full px-4 py-2.5 flex items-center justify-between text-left hover:bg-indigo-100/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-indigo-700" />
                <span className="text-xs font-bold text-indigo-950 uppercase tracking-wide">
                  Review: Reading Passage 1 Orientation & Rules
                </span>
              </div>
              <span className="text-xs font-semibold text-indigo-700 flex items-center gap-1">
                {isReviewOpen ? 'Hide' : 'Show 4 Review Questions'}
                {isReviewOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </span>
            </button>

            {isReviewOpen && (
              <div className="px-4 py-3 border-t border-indigo-100 bg-white space-y-3 text-xs">
                {REVIEW_QUESTIONS.map((item) => (
                  <div key={item.id} className="p-2.5 rounded-lg bg-indigo-50/40 border border-indigo-100">
                    <p className="font-semibold text-slate-900 flex items-start gap-1.5">
                      <span className="shrink-0 w-4 h-4 rounded-full bg-indigo-200 text-indigo-800 text-[10px] font-bold flex items-center justify-center">
                        {item.id}
                      </span>
                      <span>{item.question}</span>
                    </p>
                    {explanationLanguage !== 'en' && item.questionVi && (
                      <p className="text-[11px] text-slate-500 italic pl-5.5 mt-0.5">
                        🇻🇳 {item.questionVi}
                      </p>
                    )}
                    <div className="mt-1.5 pl-5.5 flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                        Answer: {item.answer}
                      </span>
                      {explanationLanguage !== 'en' && item.answerVi && (
                        <span className="text-[11px] text-emerald-900 italic">
                          ({item.answerVi})
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Useful Strategies: Strategy Extracts (Extracts A–F) */}
          <div className="border border-purple-200 bg-purple-50/70 rounded-xl overflow-hidden shadow-2xs">
            <button
              id="toggle-strategy-extracts-btn"
              onClick={() => setIsStrategyExtractsOpen(!isStrategyExtractsOpen)}
              className="w-full px-4 py-2.5 flex items-center justify-between text-left hover:bg-purple-100/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-purple-700" />
                <span className="text-xs font-bold text-purple-950 uppercase tracking-wide">
                  Strategy Training: True / False / Not Given & Keyword Scanning (Extracts A–F)
                </span>
              </div>
              <span className="text-xs font-semibold text-purple-700 flex items-center gap-1">
                {isStrategyExtractsOpen ? 'Hide' : 'Interactive Strategy Practice'}
                {isStrategyExtractsOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </span>
            </button>

            {isStrategyExtractsOpen && (
              <div className="px-4 py-3.5 border-t border-purple-100 bg-white space-y-4 text-xs">
                <p className="text-slate-600 italic">
                  Compare each statement with the extract from "Bats to the rescue" to master true/false/not given rules and table scanning.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {STRATEGY_EXTRACTS.map((item) => {
                    const userVal = extractUserAnswers[item.id] || '';
                    const isRevealed = extractRevealed[item.id];
                    const isMatch = userVal.toUpperCase() === item.officialAnswer;

                    return (
                      <div
                        key={item.id}
                        className="p-3 rounded-xl bg-purple-50/40 border border-purple-100 space-y-2.5 flex flex-col justify-between"
                      >
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="px-2 py-0.5 rounded font-bold text-[10px] bg-purple-200 text-purple-900">
                              Extract {item.letter}
                            </span>
                            <span className="text-[11px] font-semibold text-purple-800">
                              {item.strategyTitle}
                            </span>
                          </div>
                          <p className="p-2 rounded bg-white border border-purple-100 italic text-slate-800 font-serif leading-relaxed">
                            "{item.text}"
                          </p>
                          <div className="pt-1">
                            <span className="font-bold text-slate-900 block">Statement to evaluate:</span>
                            <p className="text-slate-800 font-medium">{item.statement}</p>
                          </div>
                          <p className="text-[11px] text-purple-900 font-medium">
                            💡 {item.strategyDesc}
                          </p>
                        </div>

                        <div className="pt-2 border-t border-purple-100/80 space-y-2">
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-1.5">
                              {(['TRUE', 'FALSE', 'NOT GIVEN'] as const).map((opt) => (
                                <button
                                  key={opt}
                                  onClick={() =>
                                    setExtractUserAnswers((prev) => ({ ...prev, [item.id]: opt }))
                                  }
                                  className={`px-2 py-1 rounded text-[10px] font-bold border transition-colors cursor-pointer ${
                                    userVal === opt
                                      ? 'bg-purple-700 text-white border-purple-700'
                                      : 'bg-white text-slate-700 border-slate-200 hover:bg-purple-50'
                                  }`}
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                            <button
                              onClick={() =>
                                setExtractRevealed((prev) => ({ ...prev, [item.id]: !prev[item.id] }))
                              }
                              className="px-2.5 py-1 bg-purple-100 hover:bg-purple-200 text-purple-900 rounded font-semibold text-[11px] transition-colors cursor-pointer"
                            >
                              {isRevealed ? 'Hide' : 'Check'}
                            </button>
                          </div>

                          {isRevealed && (
                            <div className="p-2 rounded bg-white border border-purple-200 space-y-1 text-[11px] animate-in fade-in">
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-slate-900">
                                  Correct: {item.officialAnswer}
                                </span>
                                {userVal && (
                                  <span
                                    className={`px-1.5 py-0.2 rounded text-[10px] font-bold ${
                                      isMatch
                                        ? 'bg-emerald-100 text-emerald-800'
                                        : 'bg-rose-100 text-rose-800'
                                    }`}
                                  >
                                    {isMatch ? 'Correct' : 'Incorrect'}
                                  </span>
                                )}
                              </div>
                              <p className="text-slate-700">{item.explanation}</p>
                              {explanationLanguage !== 'en' && item.explanationVi && (
                                <p className="text-slate-600 italic">🇻🇳 {item.explanationVi}</p>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Useful Strategies: Error Analysis (Find & Fix Student Mistakes) */}
          <div className="border border-rose-200 bg-rose-50/70 rounded-xl overflow-hidden shadow-2xs">
            <button
              id="toggle-error-analysis-btn"
              onClick={() => setIsErrorAnalysisOpen(!isErrorAnalysisOpen)}
              className="w-full px-4 py-2.5 flex items-center justify-between text-left hover:bg-rose-100/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-700" />
                <span className="text-xs font-bold text-rose-950 uppercase tracking-wide">
                  Useful Strategies: Error Analysis (Diagnostic Workshop)
                </span>
              </div>
              <span className="text-xs font-semibold text-rose-700 flex items-center gap-1">
                {isErrorAnalysisOpen ? 'Hide' : 'Diagnose 6 Real Student Mistakes'}
                {isErrorAnalysisOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </span>
            </button>

            {isErrorAnalysisOpen && (
              <div className="px-4 py-3.5 border-t border-rose-100 bg-white space-y-4 text-xs">
                {/* Reference Reasons Box */}
                <div className="p-3 bg-rose-50/40 rounded-lg border border-rose-100 space-y-1.5">
                  <h4 className="font-bold text-slate-900 text-xs">
                    Common Causes for Lost Marks in Passage 1:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px]">
                    {ERROR_ANALYSIS_REASONS.map((r) => (
                      <div key={r.id} className="flex items-start gap-1.5">
                        <span className="shrink-0 w-4 h-4 rounded-full bg-rose-200 text-rose-900 font-bold text-[10px] flex items-center justify-center">
                          {r.id}
                        </span>
                        <span className="text-slate-700">
                          {r.text}
                          {explanationLanguage !== 'en' && (
                            <span className="block text-slate-500 italic">🇻🇳 {r.textVi}</span>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* The 6 Mistakes items */}
                <div className="space-y-3">
                  {ERROR_ANALYSIS_ITEMS.map((item) => {
                    const userMatch = errorAnalysisMatches[item.id] || '';
                    const isRevealed = errorAnalysisRevealed[item.id];
                    const isCorrect = userMatch === item.matchedReasonId;

                    return (
                      <div
                        key={item.id}
                        className="p-3 rounded-lg bg-slate-50 border border-slate-200 space-y-2"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="font-bold text-slate-900">
                            Mistake {item.id}: {item.questionPrompt}
                          </span>
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-200">
                            Student wrote: "{item.studentAnswer}"
                          </span>
                        </div>

                        <p className="text-slate-500 text-[11px] italic">
                          Rubric rule: {item.rubricRule}
                        </p>

                        <div className="flex flex-wrap items-center gap-2 pt-1">
                          <label className="text-slate-700 font-semibold text-[11px]">
                            Diagnose primary cause:
                          </label>
                          <select
                            value={userMatch}
                            onChange={(e) =>
                              setErrorAnalysisMatches((prev) => ({
                                ...prev,
                                [item.id]: e.target.value,
                              }))
                            }
                            className="text-xs bg-white border border-slate-300 rounded px-2 py-1 font-medium text-slate-800 outline-none focus:border-rose-500"
                          >
                            <option value="">Select Reason (A–F)...</option>
                            {ERROR_ANALYSIS_REASONS.map((r) => (
                              <option key={r.id} value={r.id}>
                                Reason {r.id}: {r.text.substring(0, 65)}...
                              </option>
                            ))}
                          </select>

                          <button
                            onClick={() =>
                              setErrorAnalysisRevealed((prev) => ({
                                ...prev,
                                [item.id]: !prev[item.id],
                              }))
                            }
                            className="px-2 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded text-xs font-semibold transition-colors cursor-pointer"
                          >
                            {isRevealed ? 'Hide Explanation' : 'Check Diagnosis'}
                          </button>
                        </div>

                        {isRevealed && (
                          <div className="p-2.5 rounded bg-white border border-rose-200 space-y-1 text-[11px]">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-slate-900">
                                Correct Diagnosis: Reason {item.matchedReasonId}
                              </span>
                              {userMatch && (
                                <span
                                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                                    isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                                  }`}
                                >
                                  {isCorrect ? 'Match' : 'Mismatch'}
                                </span>
                              )}
                            </div>
                            <p className="text-slate-700">{item.explanation}</p>
                            {explanationLanguage !== 'en' && item.explanationVi && (
                              <p className="text-slate-600 italic">🇻🇳 {item.explanationVi}</p>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Action Plans Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* Action Plan 1: T / F / NG */}
            <div className="border border-emerald-200 bg-emerald-50/70 rounded-xl overflow-hidden shadow-2xs">
              <button
                id="toggle-action-plan-tfng-btn"
                onClick={() => setIsActionPlanTfngOpen(!isActionPlanTfngOpen)}
                className="w-full px-3 py-2 flex items-center justify-between text-left hover:bg-emerald-100/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5 text-emerald-700" />
                  <span className="text-[11px] font-bold text-emerald-950 uppercase tracking-wide">
                    Action Plan: True / False / Not Given (Questions 1–6)
                  </span>
                </div>
                {isActionPlanTfngOpen ? <ChevronUp className="w-3.5 h-3.5 text-emerald-700" /> : <ChevronDown className="w-3.5 h-3.5 text-emerald-700" />}
              </button>

              {isActionPlanTfngOpen && (
                <div className="px-3 py-2 border-t border-emerald-100 bg-white space-y-2 text-[11px]">
                  {ACTION_PLAN_TFNG.items.map((item) => (
                    <div key={item.number} className="p-2 rounded bg-emerald-50/40 border border-emerald-100">
                      <p className="font-semibold text-slate-900">{item.question}</p>
                      <p className="mt-0.5 text-emerald-950 font-medium">👉 {item.answer}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Action Plan 2: Table Completion */}
            <div className="border border-blue-200 bg-blue-50/70 rounded-xl overflow-hidden shadow-2xs">
              <button
                id="toggle-action-plan-table-btn"
                onClick={() => setIsActionPlanTableOpen(!isActionPlanTableOpen)}
                className="w-full px-3 py-2 flex items-center justify-between text-left hover:bg-blue-100/50 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-1.5">
                  <FileCheck className="w-3.5 h-3.5 text-blue-700" />
                  <span className="text-[11px] font-bold text-blue-950 uppercase tracking-wide">
                    Action Plan: Table Completion (Questions 7–13)
                  </span>
                </div>
                {isActionPlanTableOpen ? <ChevronUp className="w-3.5 h-3.5 text-blue-700" /> : <ChevronDown className="w-3.5 h-3.5 text-blue-700" />}
              </button>

              {isActionPlanTableOpen && (
                <div className="px-3 py-2 border-t border-blue-100 bg-white space-y-2 text-[11px]">
                  {ACTION_PLAN_TABLE.items.map((item) => (
                    <div key={item.number} className="p-2 rounded bg-blue-50/40 border border-blue-100">
                      <p className="font-semibold text-slate-900">{item.question}</p>
                      <p className="mt-0.5 text-blue-950 font-medium">👉 {item.answer}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

        {/* ========================================================= */}
        {/* PART 1: Questions 1–6 (True / False / Not Given)          */}
        {/* ========================================================= */}
        {(activeFilter === 'all' || activeFilter === 'part1') && (
          <div className="space-y-6">
            <div className="bg-[#0F172A] text-white p-4 sm:p-5 rounded-xl shadow-xs border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-slate-800 text-blue-400 border border-slate-700">
                  Part 1: Questions 1–6
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  TRUE / FALSE / NOT GIVEN
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold mt-2">
                {renderHighlightedText('Do the following statements agree with the information given in Reading Passage 1?')}
              </h3>
              <p className="text-xs text-slate-300 mt-1 font-medium">
                In boxes 1–6 on your answer sheet, write:
              </p>
              <div className="text-xs text-slate-300 mt-2.5 space-y-1.5 font-medium bg-slate-800/80 p-3 rounded-lg border border-slate-700">
                <p>
                  <strong className="text-emerald-400 font-bold">TRUE</strong> — if the statement agrees with the information
                  {(mode === 'practice' || isSubmitted) && explanationLanguage !== 'en' && (
                    <span className="text-slate-400 italic ml-1">(nhận định đúng với thông tin bài đọc)</span>
                  )}
                </p>
                <p>
                  <strong className="text-rose-400 font-bold">FALSE</strong> — if the statement contradicts the information
                  {(mode === 'practice' || isSubmitted) && explanationLanguage !== 'en' && (
                    <span className="text-slate-400 italic ml-1">(nhận định mâu thuẫn/trái ngược với bài đọc)</span>
                  )}
                </p>
                <p>
                  <strong className="text-amber-400 font-bold">NOT GIVEN</strong> — if there is no information on this
                  {(mode === 'practice' || isSubmitted) && explanationLanguage !== 'en' && (
                    <span className="text-slate-400 italic ml-1">(không có thông tin để xác thực)</span>
                  )}
                </p>
              </div>
            </div>

            {/* TIP STRIP: Questions 1–6 */}
            {mode === 'practice' && (
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                    <Lightbulb className="w-4 h-4 text-blue-600" />
                    <span>IELTS Tip & Strategy: Questions 1–6 (True / False / Not Given)</span>
                  </div>
                  <button
                    id="toggle-tipstrip-1"
                    onClick={() => setIsTipStrip1Open(!isTipStrip1Open)}
                    className="text-blue-700 hover:text-blue-900 text-xs font-semibold cursor-pointer"
                  >
                    {isTipStrip1Open ? 'Hide' : 'Show'}
                  </button>
                </div>

                {isTipStrip1Open && (
                  <div className="text-xs text-blue-900 leading-relaxed space-y-2">
                    <ul className="space-y-2 list-disc list-inside">
                      {TIP_STRIP_PART1.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="leading-snug">
                          {renderHighlightedText(bullet)}
                          {explanationLanguage !== 'en' && TIP_STRIP_PART1.bulletsVi?.[bIdx] && (
                            <p className="pl-4 text-[11px] text-blue-700 italic font-normal mt-0.5">
                              🇻🇳 {TIP_STRIP_PART1.bulletsVi[bIdx]}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Questions 1-6 Item Cards */}
            <div className="space-y-4">
              {part1Questions.map((q) => {
                const answer = userAnswers[q.id] || '';
                const isChecked = checkedQuestions[q.id] || (isSubmitted && mode === 'test');
                const isCorrect = isChecked ? checkAnswerCorrectness(q, answer) : false;
                const isFlagged = flaggedQuestions.has(q.id);
                const showExplanation = openExplanations[q.id] || (isSubmitted && mode === 'test');
                const showTip = openTips[q.id];
                const showAdvice = openAdvices[q.id];

                return (
                  <div
                    key={q.id}
                    id={`question-card-${q.id}`}
                    data-question-id={q.id}
                    className={`p-4 sm:p-5 rounded-xl border transition-all ${
                      isChecked
                        ? isCorrect
                          ? 'bg-emerald-50/50 border-emerald-300 ring-1 ring-emerald-200'
                          : 'bg-rose-50/50 border-rose-300 ring-1 ring-rose-200'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start space-x-3 flex-1">
                        <span className="shrink-0 w-6 h-6 rounded bg-[#0F172A] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                          {q.questionNumber}
                        </span>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-slate-900 leading-snug">
                            {renderHighlightedText(q.prompt, q.id)}
                          </p>
                          {(mode === 'practice' || isSubmitted) && explanationLanguage !== 'en' && q.promptVi && (
                            <p className="text-xs text-slate-500 italic mt-0.5">
                              🇻🇳 {q.promptVi}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center space-x-1.5">
                        <button
                          id={`flag-q-${q.id}`}
                          onClick={() => onToggleFlag(q.id)}
                          title={isFlagged ? 'Remove flag' : 'Flag question for review'}
                          className={`p-1.5 rounded transition-colors cursor-pointer ${
                            isFlagged
                              ? 'text-amber-600 bg-amber-100 hover:bg-amber-200'
                              : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <Flag className="w-3.5 h-3.5 fill-current" />
                        </button>
                      </div>
                    </div>

                    {/* Practice Mode Tips / Advice Buttons */}
                    {mode === 'practice' && (
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {q.tip && (
                          <button
                            id={`tip-btn-q-${q.id}`}
                            onClick={() => toggleTip(q.id)}
                            className="flex items-center space-x-1.5 text-xs text-blue-700 hover:text-blue-900 font-medium py-0.5 px-2 rounded-md hover:bg-blue-50 transition-colors cursor-pointer"
                          >
                            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                            <span>{showTip ? 'Hide Question Tip' : 'Show Question Tip'}</span>
                          </button>
                        )}
                        {q.advice && (
                          <button
                            id={`advice-btn-q-${q.id}`}
                            onClick={() => toggleAdvice(q.id)}
                            className="flex items-center space-x-1.5 text-xs text-indigo-700 hover:text-indigo-900 font-medium py-0.5 px-2 rounded-md hover:bg-indigo-50 transition-colors cursor-pointer"
                          >
                            <HelpCircle className="w-3.5 h-3.5 text-indigo-500" />
                            <span>{showAdvice ? 'Hide Exam Advice' : 'Show Exam Advice'}</span>
                          </button>
                        )}
                      </div>
                    )}

                    {showTip && q.tip && (
                      <div className="mt-2 p-2.5 rounded-lg bg-blue-50/70 border border-blue-100 text-xs text-blue-950 leading-relaxed animate-in fade-in space-y-1">
                        <p>
                          <strong className="text-blue-900">Tip: </strong>
                          {renderHighlightedText(q.tip, q.id)}
                        </p>
                        {explanationLanguage !== 'en' && q.tipVi && (
                          <p className="text-[11px] text-blue-800 pt-1 border-t border-blue-100/80">
                            <strong className="text-blue-900">🇻🇳 Mẹo làm bài: </strong>
                            {q.tipVi}
                          </p>
                        )}
                      </div>
                    )}

                    {showAdvice && q.advice && (
                      <div className="mt-2 p-2.5 rounded-lg bg-indigo-50/70 border border-indigo-100 text-xs text-indigo-950 leading-relaxed animate-in fade-in space-y-1">
                        <p>
                          <strong className="text-indigo-900">Official Exam Advice: </strong>
                          {renderHighlightedText(q.advice, q.id)}
                        </p>
                        {explanationLanguage !== 'en' && q.adviceVi && (
                          <p className="text-[11px] text-indigo-800 pt-1 border-t border-indigo-100/80">
                            <strong className="text-indigo-900">🇻🇳 Lời khuyên giám khảo: </strong>
                            {q.adviceVi}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Radio Options: TRUE / FALSE / NOT GIVEN */}
                    <div className="mt-3.5 grid grid-cols-3 gap-2">
                      {(['TRUE', 'FALSE', 'NOT GIVEN'] as const).map((option) => {
                        const isSelected = answer.toUpperCase() === option;
                        let btnStyle = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100';

                        if (isSelected) {
                          btnStyle = 'bg-blue-600 border-blue-600 text-white shadow-xs';
                        }

                        if (isChecked) {
                          const isOptionCorrect = q.officialAnswer === option;
                          if (isSelected) {
                            btnStyle = isCorrect
                              ? 'bg-emerald-600 border-emerald-600 text-white'
                              : 'bg-rose-600 border-rose-600 text-white';
                          } else if (isOptionCorrect) {
                            btnStyle = 'bg-emerald-100 border-emerald-400 text-emerald-950 font-bold ring-2 ring-emerald-400/50';
                          }
                        }

                        return (
                          <button
                            key={option}
                            id={`btn-q-${q.id}-${option.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={() => onAnswerChange(q.id, option)}
                            disabled={isSubmitted && mode === 'test'}
                            className={`py-2 px-2 sm:px-3 text-xs font-bold rounded-lg border transition-all cursor-pointer ${btnStyle}`}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>

                    {/* Practice Controls */}
                    {mode === 'practice' && (
                      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100">
                        <button
                          id={`check-btn-q-${q.id}`}
                          onClick={() => handleCheckQuestion(q.id)}
                          className="flex items-center space-x-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                        >
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>Check Answer</span>
                        </button>

                        <button
                          id={`explain-btn-q-${q.id}`}
                          onClick={() => toggleExplanation(q.id)}
                          className="flex items-center space-x-1 text-xs text-blue-700 hover:text-blue-900 font-semibold py-1 px-2 rounded hover:bg-blue-50 transition-colors cursor-pointer"
                        >
                          <span>{showExplanation ? 'Hide Explanation' : 'Show Explanation'}</span>
                          {showExplanation ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    )}

                    {/* Explanation */}
                    {showExplanation && (
                      <div className="mt-3 p-3.5 rounded-lg bg-blue-50/60 border border-blue-200 text-xs text-slate-800 space-y-2.5 animate-in fade-in">
                        <div className="flex items-center justify-between pb-1.5 border-b border-blue-200/70">
                          <div className="flex items-center space-x-2">
                            <span className="font-bold text-slate-900">Official Answer:</span>
                            <span className="px-2 py-0.5 rounded font-mono font-bold bg-blue-100 text-blue-900 border border-blue-300">
                              {q.officialAnswer}
                            </span>
                          </div>

                          <button
                            id={`locate-passage-q-${q.id}`}
                            onClick={() => onJumpToParagraph(q.paragraphRef)}
                            className="flex items-center space-x-1 text-blue-700 hover:text-blue-900 font-semibold px-2 py-0.5 rounded bg-white hover:bg-blue-100/50 border border-blue-200 transition-colors cursor-pointer"
                          >
                            <BookOpen className="w-3 h-3 text-blue-600" />
                            <span>Paragraph {q.paragraphRef}</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>

                        <div>
                          <span className="font-semibold text-slate-700">Passage Evidence: </span>
                          <span className="italic bg-yellow-100 px-1 py-0.5 rounded text-slate-900 font-serif">
                            "{renderHighlightedText(q.paragraphQuote, q.id)}"
                          </span>
                        </div>

                        {(explanationLanguage === 'en' || explanationLanguage === 'bilingual') && (
                          <div className="text-slate-700 leading-relaxed font-sans pt-1">
                            <strong className="text-slate-900">Explanation (EN): </strong>
                            {renderHighlightedText(q.explanation, q.id)}
                          </div>
                        )}

                        {(explanationLanguage === 'vi' || explanationLanguage === 'bilingual') && q.explanationVi && (
                          <div className="p-2.5 rounded-md bg-white border border-blue-200/80 text-slate-800 leading-relaxed">
                            <span className="font-bold text-blue-900 flex items-center gap-1 mb-1">
                              <span>🇻🇳 Giải thích chi tiết:</span>
                            </span>
                            <p className="text-[12px] text-slate-700">
                              {renderHighlightedText(q.explanationVi, q.id)}
                            </p>
                          </div>
                        )}

                        {q.distraction && (
                          <div className="p-2 rounded bg-amber-50/60 border border-amber-200 text-[11px] text-amber-950">
                            <span className="font-bold block mb-0.5 text-amber-900">⚠️ Common Pitfall / Trap:</span>
                            <p>{q.distraction}</p>
                            {explanationLanguage !== 'en' && q.distractionVi && (
                              <p className="italic text-amber-900 mt-1">🇻🇳 {q.distractionVi}</p>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* PART 2: Questions 7–13 (Table Completion)                 */}
        {/* ========================================================= */}
        {(activeFilter === 'all' || activeFilter === 'part2') && (
          <div className="space-y-6">
            <div className="bg-[#0F172A] text-white p-4 sm:p-5 rounded-xl shadow-xs border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-slate-800 text-blue-400 border border-slate-700">
                  Part 2: Questions 7–13
                </span>
                <span className="text-xs text-slate-300 font-medium">
                  Table Completion
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold mt-2">
                {renderHighlightedText('Complete the table below.')}
              </h3>
              <p className="text-xs text-slate-300 mt-1 font-medium">
                Choose <span className="underline font-bold text-amber-300">ONE WORD ONLY</span> from the passage for each answer. Write your answers in boxes 7–13 on your answer sheet.
              </p>
              {(mode === 'practice' || isSubmitted) && explanationLanguage !== 'en' && (
                <p className="text-[11px] text-blue-300/90 mt-1.5 italic">
                  Hướng dẫn: Chọn DUY NHẤT MỘT TỪ từ bài đọc cho mỗi câu trả lời 7–13.
                </p>
              )}
            </div>

            {/* TIP STRIP: Questions 7–13 */}
            {mode === 'practice' && (
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                    <Lightbulb className="w-4 h-4 text-blue-600" />
                    <span>IELTS Tip & Strategy: Questions 7–13 (Table Completion)</span>
                  </div>
                  <button
                    id="toggle-tipstrip-2"
                    onClick={() => setIsTipStrip2Open(!isTipStrip2Open)}
                    className="text-blue-700 hover:text-blue-900 text-xs font-semibold cursor-pointer"
                  >
                    {isTipStrip2Open ? 'Hide' : 'Show'}
                  </button>
                </div>

                {isTipStrip2Open && (
                  <div className="text-xs text-blue-900 leading-relaxed space-y-2">
                    <ul className="space-y-2 list-disc list-inside">
                      {TIP_STRIP_PART2.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="leading-snug">
                          {renderHighlightedText(bullet)}
                          {explanationLanguage !== 'en' && TIP_STRIP_PART2.bulletsVi?.[bIdx] && (
                            <p className="pl-4 text-[11px] text-blue-700 italic font-normal mt-0.5">
                              🇻🇳 {TIP_STRIP_PART2.bulletsVi[bIdx]}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Interactive Visual Table Completion Component */}
            <TableCompletionView
              questions={part2Questions}
              userAnswers={userAnswers}
              onAnswerChange={onAnswerChange}
              checkedQuestions={checkedQuestions}
              mode={mode}
              isSubmitted={isSubmitted}
              onCheckQuestion={handleCheckQuestion}
              onJumpToParagraph={onJumpToParagraph}
              explanationLanguage={explanationLanguage}
            />

            {/* Questions 7-13 Detailed Cards (Practice mode or post-submission review only) */}
            {(mode === 'practice' || isSubmitted) && (
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Table className="w-3.5 h-3.5 text-slate-500" />
                  <span>Question Cards 7–13 (Tips, Paragraph Citations & Analyses)</span>
                </h4>

              {part2Questions.map((q) => {
                const answer = userAnswers[q.id] || '';
                const wordCount = answer.trim().split(/\s+/).filter(Boolean).length;
                const isOverLimit = wordCount > 1;
                const isChecked = checkedQuestions[q.id] || (isSubmitted && mode === 'test');
                const isCorrect = isChecked ? checkAnswerCorrectness(q, answer) : false;
                const isFlagged = flaggedQuestions.has(q.id);
                const showExplanation = openExplanations[q.id] || (isSubmitted && mode === 'test');
                const showTip = openTips[q.id];
                const showAdvice = openAdvices[q.id];

                return (
                  <div
                    key={q.id}
                    id={`question-card-${q.id}`}
                    data-question-id={q.id}
                    className={`p-4 sm:p-5 rounded-xl border transition-all ${
                      isChecked
                        ? isCorrect
                          ? 'bg-emerald-50/50 border-emerald-300 ring-1 ring-emerald-200'
                          : 'bg-rose-50/50 border-rose-300 ring-1 ring-rose-200'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start space-x-3 flex-1">
                        <span className="shrink-0 w-6 h-6 rounded bg-[#0F172A] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                          {q.questionNumber}
                        </span>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-slate-900 leading-snug">
                            {renderHighlightedText(q.prompt, q.id)}
                          </p>
                          {explanationLanguage !== 'en' && q.promptVi && (
                            <p className="text-xs text-slate-500 italic mt-0.5">
                              🇻🇳 {q.promptVi}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center space-x-1.5">
                        <button
                          id={`flag-q-${q.id}`}
                          onClick={() => onToggleFlag(q.id)}
                          title={isFlagged ? 'Remove flag' : 'Flag question for review'}
                          className={`p-1.5 rounded transition-colors cursor-pointer ${
                            isFlagged
                              ? 'text-amber-600 bg-amber-100 hover:bg-amber-200'
                              : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                          }`}
                        >
                          <Flag className="w-3.5 h-3.5 fill-current" />
                        </button>
                      </div>
                    </div>

                    {/* Practice Mode Tips / Advice Buttons */}
                    {mode === 'practice' && (
                      <div className="mt-2.5 flex flex-wrap gap-2">
                        {q.tip && (
                          <button
                            id={`tip-btn-q-${q.id}`}
                            onClick={() => toggleTip(q.id)}
                            className="flex items-center space-x-1.5 text-xs text-blue-700 hover:text-blue-900 font-medium py-0.5 px-2 rounded-md hover:bg-blue-50 transition-colors cursor-pointer"
                          >
                            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                            <span>{showTip ? 'Hide Question Tip' : 'Show Question Tip'}</span>
                          </button>
                        )}
                        {q.advice && (
                          <button
                            id={`advice-btn-q-${q.id}`}
                            onClick={() => toggleAdvice(q.id)}
                            className="flex items-center space-x-1.5 text-xs text-indigo-700 hover:text-indigo-900 font-medium py-0.5 px-2 rounded-md hover:bg-indigo-50 transition-colors cursor-pointer"
                          >
                            <HelpCircle className="w-3.5 h-3.5 text-indigo-500" />
                            <span>{showAdvice ? 'Hide Exam Advice' : 'Show Exam Advice'}</span>
                          </button>
                        )}
                      </div>
                    )}

                    {showTip && q.tip && (
                      <div className="mt-2 p-2.5 rounded-lg bg-blue-50/70 border border-blue-100 text-xs text-blue-950 leading-relaxed animate-in fade-in space-y-1">
                        <p>
                          <strong className="text-blue-900">Tip: </strong>
                          {renderHighlightedText(q.tip, q.id)}
                        </p>
                        {explanationLanguage !== 'en' && q.tipVi && (
                          <p className="text-[11px] text-blue-800 pt-1 border-t border-blue-100/80">
                            <strong className="text-blue-900">🇻🇳 Mẹo làm bài: </strong>
                            {q.tipVi}
                          </p>
                        )}
                      </div>
                    )}

                    {showAdvice && q.advice && (
                      <div className="mt-2 p-2.5 rounded-lg bg-indigo-50/70 border border-indigo-100 text-xs text-indigo-950 leading-relaxed animate-in fade-in space-y-1">
                        <p>
                          <strong className="text-indigo-900">Official Exam Advice: </strong>
                          {renderHighlightedText(q.advice, q.id)}
                        </p>
                        {explanationLanguage !== 'en' && q.adviceVi && (
                          <p className="text-[11px] text-indigo-800 pt-1 border-t border-indigo-100/80">
                            <strong className="text-indigo-900">🇻🇳 Lời khuyên giám khảo: </strong>
                            {q.adviceVi}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Single Word Input Field */}
                    <div className="mt-3.5">
                      <div className="relative max-w-xs">
                        <input
                          id={`input-q-${q.id}`}
                          type="text"
                          value={answer}
                          onChange={(e) => onAnswerChange(q.id, e.target.value)}
                          disabled={isSubmitted && mode === 'test'}
                          placeholder="Type answer (ONE WORD ONLY)..."
                          className={`w-full px-3.5 py-2 text-sm rounded-lg border font-medium outline-none transition-all ${
                            isChecked
                              ? isCorrect
                                ? 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-300'
                                : 'border-rose-500 bg-rose-50 text-rose-950 ring-1 ring-rose-300'
                              : 'border-slate-300 bg-white hover:border-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-slate-900'
                          }`}
                        />
                        {isOverLimit && (
                          <div className="flex items-center gap-1 text-[11px] text-rose-600 font-semibold mt-1">
                            <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                            <span>Exceeds word limit: {wordCount}/1 word!</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Practice Controls */}
                    {mode === 'practice' && (
                      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100">
                        <button
                          id={`check-btn-q-${q.id}`}
                          onClick={() => handleCheckQuestion(q.id)}
                          className="flex items-center space-x-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                        >
                          <CheckCircle className="w-3.5 h-3.5" />
                          <span>Check Answer</span>
                        </button>

                        <button
                          id={`explain-btn-q-${q.id}`}
                          onClick={() => toggleExplanation(q.id)}
                          className="flex items-center space-x-1 text-xs text-blue-700 hover:text-blue-900 font-semibold py-1 px-2 rounded hover:bg-blue-50 transition-colors cursor-pointer"
                        >
                          <span>{showExplanation ? 'Hide Explanation' : 'Show Explanation'}</span>
                          {showExplanation ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    )}

                    {/* Explanation */}
                    {showExplanation && (
                      <div className="mt-3 p-3.5 rounded-lg bg-blue-50/60 border border-blue-200 text-xs text-slate-800 space-y-2.5 animate-in fade-in">
                        <div className="flex items-center justify-between pb-1.5 border-b border-blue-200/70">
                          <div className="flex items-center space-x-2">
                            <span className="font-bold text-slate-900">Official Answer:</span>
                            <span className="px-2 py-0.5 rounded font-mono font-bold bg-blue-100 text-blue-900 border border-blue-300">
                              {q.officialAnswer}
                            </span>
                          </div>

                          <button
                            id={`locate-passage-q-${q.id}`}
                            onClick={() => onJumpToParagraph(q.paragraphRef)}
                            className="flex items-center space-x-1 text-blue-700 hover:text-blue-900 font-semibold px-2 py-0.5 rounded bg-white hover:bg-blue-100/50 border border-blue-200 transition-colors cursor-pointer"
                          >
                            <BookOpen className="w-3 h-3 text-blue-600" />
                            <span>Paragraph {q.paragraphRef}</span>
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>

                        <div>
                          <span className="font-semibold text-slate-700">Passage Evidence: </span>
                          <span className="italic bg-yellow-100 px-1 py-0.5 rounded text-slate-900 font-serif">
                            "{renderHighlightedText(q.paragraphQuote, q.id)}"
                          </span>
                        </div>

                        {(explanationLanguage === 'en' || explanationLanguage === 'bilingual') && (
                          <div className="text-slate-700 leading-relaxed font-sans pt-1">
                            <strong className="text-slate-900">Explanation (EN): </strong>
                            {renderHighlightedText(q.explanation, q.id)}
                          </div>
                        )}

                        {(explanationLanguage === 'vi' || explanationLanguage === 'bilingual') && q.explanationVi && (
                          <div className="p-2.5 rounded-md bg-white border border-blue-200/80 text-slate-800 leading-relaxed">
                            <span className="font-bold text-blue-900 flex items-center gap-1 mb-1">
                              <span>🇻🇳 Giải thích chi tiết:</span>
                            </span>
                            <p className="text-[12px] text-slate-700">
                              {renderHighlightedText(q.explanationVi, q.id)}
                            </p>
                          </div>
                        )}

                        {q.distraction && (
                          <div className="p-2 rounded bg-amber-50/60 border border-amber-200 text-[11px] text-amber-950">
                            <span className="font-bold block mb-0.5 text-amber-900">⚠️ Common Pitfall / Word Limit Rule:</span>
                            <p>{q.distraction}</p>
                            {explanationLanguage !== 'en' && q.distractionVi && (
                              <p className="italic text-amber-900 mt-1">🇻🇳 {q.distractionVi}</p>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
          </div>
        )}

      </div>
    </div>
  );
};
