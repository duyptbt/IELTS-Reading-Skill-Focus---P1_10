import React, { useState } from 'react';
import { QuestionItem, Mode, UserAnswerState } from '../types';
import { checkAnswerCorrectness } from '../data/ieltsData';
import { 
  CheckCircle, 
  XCircle, 
  BookOpen, 
  ExternalLink, 
  AlertTriangle, 
  Table, 
  FileText, 
  Compass, 
  Microscope, 
  CheckSquare, 
  HeartHandshake,
  Lightbulb,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface TableCompletionViewProps {
  questions: QuestionItem[];
  userAnswers: UserAnswerState;
  onAnswerChange: (questionId: number, answer: string) => void;
  checkedQuestions: { [key: number]: boolean };
  mode: Mode;
  isSubmitted: boolean;
  onCheckQuestion?: (questionId: number) => void;
  onJumpToParagraph: (paragraphId: number) => void;
  explanationLanguage: 'bilingual' | 'vi' | 'en';
}

export const TableCompletionView: React.FC<TableCompletionViewProps> = ({
  questions,
  userAnswers,
  onAnswerChange,
  checkedQuestions,
  mode,
  isSubmitted,
  onCheckQuestion,
  onJumpToParagraph,
  explanationLanguage,
}) => {
  const [expandedRowExplanations, setExpandedRowExplanations] = useState<{ [key: number]: boolean }>({});

  const toggleRowExplanation = (qId: number) => {
    setExpandedRowExplanations((prev) => ({
      ...prev,
      [qId]: !prev[qId],
    }));
  };

  const getQuestion = (num: number) => questions.find((q) => q.questionNumber === num);

  const renderInputField = (questionNumber: number, placeholder = 'one word only...') => {
    const q = getQuestion(questionNumber);
    if (!q) return null;

    const answer = userAnswers[q.id] || '';
    const wordCount = answer.trim().split(/\s+/).filter(Boolean).length;
    const isOverLimit = wordCount > 1; // Strict ONE WORD ONLY
    const isChecked = checkedQuestions[q.id] || (isSubmitted && mode === 'test');
    const isCorrect = isChecked ? checkAnswerCorrectness(q, answer) : false;
    // In Test mode, suppress all placeholder hints (e.g., parts of speech, categories)
    const activePlaceholder = mode === 'test' ? '' : placeholder;

    return (
      <span className="inline-flex flex-col mx-1 align-middle my-1">
        <span className="inline-flex items-center gap-1.5">
          <span className="shrink-0 w-6 h-6 rounded-md bg-[#0F172A] text-white text-xs font-bold flex items-center justify-center shadow-xs">
            {questionNumber}
          </span>
          <input
            id={`table-input-q-${q.id}`}
            type="text"
            value={answer}
            onChange={(e) => onAnswerChange(q.id, e.target.value)}
            disabled={isSubmitted && mode === 'test'}
            placeholder={activePlaceholder}
            className={`w-[140px] sm:w-[170px] px-2.5 py-1.5 text-xs sm:text-sm rounded-lg border font-sans font-medium outline-none transition-all ${
              isChecked
                ? isCorrect
                  ? 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-1 ring-emerald-300'
                  : 'border-rose-500 bg-rose-50 text-rose-950 ring-1 ring-rose-300'
                : 'border-slate-300 bg-white hover:border-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-slate-900'
            }`}
          />
          {isChecked && (
            <span className="shrink-0">
              {isCorrect ? (
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              ) : (
                <XCircle className="w-4 h-4 text-rose-600" />
              )}
            </span>
          )}
        </span>

        {/* Word count warning for ONE WORD ONLY */}
        {isOverLimit && (
          <span className="text-[10px] text-rose-600 font-semibold mt-0.5 flex items-center gap-1">
            <AlertTriangle className="w-3 h-3 shrink-0" />
            <span>Exceeds 1 word ({wordCount}/1)!</span>
          </span>
        )}

        {isChecked && !isCorrect && (
          <span className="text-[10px] text-emerald-700 font-medium mt-0.5">
            Key: <strong className="underline font-bold">{q.officialAnswer}</strong>
          </span>
        )}
      </span>
    );
  };

  const renderQuestionMetaRow = (qNum: number) => {
    const q = getQuestion(qNum);
    if (!q || mode !== 'practice') return null;

    const isChecked = checkedQuestions[q.id];
    const isExpanded = expandedRowExplanations[q.id];

    return (
      <div className="mt-2 pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          {onCheckQuestion && (
            <button
              id={`check-table-q-${q.id}`}
              onClick={() => onCheckQuestion(q.id)}
              className="px-2 py-1 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded text-[11px] font-semibold transition-colors cursor-pointer"
            >
              Check Q{q.questionNumber}
            </button>
          )}
          <button
            id={`jump-para-table-q-${q.id}`}
            onClick={() => onJumpToParagraph(q.paragraphRef)}
            className="flex items-center gap-1 text-[11px] text-slate-600 hover:text-blue-700 font-medium px-2 py-1 rounded hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <BookOpen className="w-3 h-3 text-blue-600" />
            <span>Read Para {q.paragraphRef}</span>
          </button>
        </div>

        <button
          id={`toggle-table-explain-q-${q.id}`}
          onClick={() => toggleRowExplanation(q.id)}
          className="flex items-center gap-1 text-[11px] text-indigo-700 hover:text-indigo-900 font-semibold cursor-pointer"
        >
          <Lightbulb className="w-3 h-3 text-amber-500" />
          <span>{isExpanded ? 'Hide explanation' : `Explain Q${q.questionNumber}`}</span>
          {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
        </button>

        {isExpanded && (
          <div className="w-full mt-1.5 p-3 rounded-lg bg-blue-50/80 border border-blue-100 text-xs text-slate-800 space-y-1 animate-in fade-in">
            <p>
              <strong className="text-blue-900">Answer: </strong>
              <span className="font-bold underline text-emerald-800">{q.officialAnswer}</span>
            </p>
            <p className="text-slate-700 leading-relaxed">{q.explanation}</p>
            {explanationLanguage !== 'en' && q.explanationVi && (
              <p className="text-slate-600 italic pt-1 border-t border-blue-100/70">
                🇻🇳 {q.explanationVi}
              </p>
            )}
            {q.paragraphQuote && (
              <p className="text-[11px] text-slate-500 font-mono italic bg-white/70 p-1.5 rounded border border-blue-100/60 mt-1">
                "{q.paragraphQuote}"
              </p>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white border-2 border-slate-300 rounded-2xl shadow-xs overflow-hidden">
      {/* Table Header Banner */}
      <div className="bg-slate-100/90 border-b border-slate-200 px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-800 border border-blue-200">
              Table Completion (Questions 7–13)
            </span>
            <h4 className="font-extrabold text-slate-900 text-base sm:text-lg tracking-tight flex items-center gap-2">
              <Table className="w-4 h-4 text-blue-600" />
              <span>The study carried out by Rocha’s team</span>
            </h4>
          </div>
          <p className="text-xs text-slate-600 mt-1 font-medium">
            Choose <span className="underline font-bold text-rose-700">ONE WORD ONLY</span> from the passage for each answer.
          </p>
          {(mode === 'practice' || isSubmitted) && explanationLanguage !== 'en' && (
            <p className="text-[11px] text-blue-800 italic mt-0.5">
              🇻🇳 Hướng dẫn: Chọn DUY NHẤT MỘT TỪ từ bài đọc cho mỗi câu trả lời 7–13.
            </p>
          )}
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <span className="bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-2xs font-semibold text-slate-700">
            7 gaps to complete
          </span>
        </div>
      </div>

      {/* Styled IELTS Table Container */}
      <div className="p-4 sm:p-6 overflow-x-auto">
        <table className="w-full border-collapse border border-slate-300 rounded-xl overflow-hidden text-left text-xs sm:text-sm">
          <thead>
            <tr className="bg-slate-900 text-white">
              <th className="py-3 px-4 sm:px-5 font-bold text-xs uppercase tracking-wider w-1/4 sm:w-1/5 border-r border-slate-800">
                Category
              </th>
              <th className="py-3 px-4 sm:px-5 font-bold text-xs uppercase tracking-wider">
                Details & Research Evidence
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {/* ROW 1: AIM */}
            <tr className="hover:bg-slate-50/80 transition-colors">
              <td className="py-4 px-4 sm:px-5 font-bold text-slate-900 bg-slate-50/50 border-r border-slate-200 align-top">
                <div className="flex items-center gap-1.5 text-blue-900">
                  <Compass className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Aim</span>
                </div>
              </td>
              <td className="py-4 px-4 sm:px-5 text-slate-800 leading-relaxed align-top">
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>
                    to investigate the feeding habits of bats in farmland near the <strong className="text-slate-900">Ranomafana National Park</strong>
                  </li>
                </ul>
              </td>
            </tr>

            {/* ROW 2: METHOD (Q7) */}
            <tr className="hover:bg-slate-50/80 transition-colors">
              <td className="py-4 px-4 sm:px-5 font-bold text-slate-900 bg-slate-50/50 border-r border-slate-200 align-top">
                <div className="flex items-center gap-1.5 text-indigo-900">
                  <Microscope className="w-4 h-4 text-indigo-600 shrink-0" />
                  <span>Method</span>
                </div>
              </td>
              <td className="py-4 px-4 sm:px-5 text-slate-800 leading-relaxed align-top space-y-3">
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>
                    ultrasonic recording to identify favourite feeding spots
                  </li>
                  <li className="leading-loose">
                    DNA analysis of bat {renderInputField(7, 'noun...')}
                  </li>
                </ul>
                {renderQuestionMetaRow(7)}
              </td>
            </tr>

            {/* ROW 3: FINDINGS (Q8, Q9, Q10, Q11, Q12) */}
            <tr className="hover:bg-slate-50/80 transition-colors">
              <td className="py-4 px-4 sm:px-5 font-bold text-slate-900 bg-slate-50/50 border-r border-slate-200 align-top">
                <div className="flex items-center gap-1.5 text-emerald-900">
                  <CheckSquare className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Findings</span>
                </div>
              </td>
              <td className="py-4 px-4 sm:px-5 text-slate-800 leading-relaxed align-top space-y-4">
                {/* Findings Sub-section 1: The bats */}
                <div className="p-3.5 bg-blue-50/50 rounded-xl border border-blue-100 space-y-2">
                  <p className="font-bold text-blue-950 text-xs sm:text-sm">
                    • the bats:
                  </p>
                  <ul className="list-disc list-inside pl-3 space-y-2 text-slate-800">
                    <li>
                      were most active in rice fields located on hills
                    </li>
                    <li className="leading-loose">
                      ate pests of rice, {renderInputField(8, 'crop name...')}, sugarcane, nuts and fruit
                    </li>
                    {renderQuestionMetaRow(8)}
                    <li className="leading-loose pt-1">
                      prevent the spread of disease by eating {renderInputField(9, 'disease carrier...')} and blackflies
                    </li>
                    {renderQuestionMetaRow(9)}
                  </ul>
                </div>

                {/* Findings Sub-section 2: Local attitudes */}
                <div className="p-3.5 bg-amber-50/50 rounded-xl border border-amber-100 space-y-2">
                  <p className="font-bold text-amber-950 text-xs sm:text-sm">
                    • local attitudes to bats are mixed:
                  </p>
                  <ul className="list-disc list-inside pl-3 space-y-2 text-slate-800">
                    <li className="leading-loose">
                      they provide food rich in {renderInputField(10, 'nutrient...')}
                    </li>
                    {renderQuestionMetaRow(10)}
                    <li className="leading-loose pt-1">
                      the buildings where they roost become {renderInputField(11, 'adjective...')}
                    </li>
                    {renderQuestionMetaRow(11)}
                    <li className="leading-loose pt-1">
                      they play an important role in local {renderInputField(12, 'social aspect...')}
                    </li>
                    {renderQuestionMetaRow(12)}
                  </ul>
                </div>
              </td>
            </tr>

            {/* ROW 4: RECOMMENDATION (Q13) */}
            <tr className="hover:bg-slate-50/80 transition-colors">
              <td className="py-4 px-4 sm:px-5 font-bold text-slate-900 bg-slate-50/50 border-r border-slate-200 align-top">
                <div className="flex items-center gap-1.5 text-purple-900">
                  <HeartHandshake className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>Recommendation</span>
                </div>
              </td>
              <td className="py-4 px-4 sm:px-5 text-slate-800 leading-relaxed align-top space-y-2">
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li className="leading-loose">
                    farmers should provide special {renderInputField(13, 'shelter...')} to support the bat population
                  </li>
                </ul>
                {renderQuestionMetaRow(13)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer helper summary (Practice mode or post-submission only) */}
      {(mode === 'practice' || isSubmitted) && (
        <div className="bg-slate-50 px-4 sm:px-6 py-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            <span>Questions 7–13 trace sequentially through Paragraphs 6, 7, 8, 10, and 11.</span>
          </div>
          <span className="text-slate-500 font-medium italic">
            Tip: Copy exact single words directly from the reading text.
          </span>
        </div>
      )}
    </div>
  );
};
