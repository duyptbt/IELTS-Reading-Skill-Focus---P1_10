import {
  VocabularyItem,
  GrammarStructureItem,
  ParaphrasePair,
  MatchingTaskItem,
  GapFillTaskItem,
  ReferenceTaskItem,
  TransformationTaskItem,
} from '../types';

export const CONSOLIDATION_VOCABULARY: VocabularyItem[] = [
  {
    id: 'vocab-1',
    word: 'Deforestation',
    phonetic: '/diːˌfɒr.ɪˈsteɪ.ʃən/',
    partOfSpeech: 'noun',
    definition:
      'The purposeful clearing or thinning of forested land by human activities, especially for agriculture or timber.',
    definitionVi:
      'Nạn phá rừng: Hành động chặt phá hoặc dọn sạch diện tích rừng do con người thực hiện, phục vụ nông nghiệp hoặc lấy gỗ.',
    passageContext:
      'In Madagascar, almost 80% of native forest has been lost through deforestation and land conversion...',
    paragraphRef: 1,
    collocations: ['widespread deforestation', 'curb deforestation', 'rate of deforestation', 'habitat loss and deforestation'],
    synonyms: ['forest clearance', 'logging', 'tree felling', 'land clearing'],
    ieltsBand: 'Band 7.0+',
  },
  {
    id: 'vocab-2',
    word: 'Biodiversity',
    phonetic: '/ˌbaɪ.əʊ.daɪˈvɜː.sɪ.ti/',
    partOfSpeech: 'noun',
    definition:
      'The variety of plant and animal life in the world or in a particular habitat, a high level of which is considered vital and desirable.',
    definitionVi:
      'Đa dạng sinh học: Sự phong phú của các loài sinh vật (động thực vật) trong một môi trường sống tự nhiên.',
    passageContext:
      '...sheltering unique biodiversity that is found nowhere else on planet Earth.',
    paragraphRef: 1,
    collocations: ['conserve biodiversity', 'loss of biodiversity', 'biodiversity hotspot', 'rich in biodiversity'],
    synonyms: ['ecological diversity', 'biological variety', 'flora and fauna variety'],
    ieltsBand: 'Band 7.5+',
  },
  {
    id: 'vocab-3',
    word: 'Roost',
    phonetic: '/ruːst/',
    partOfSpeech: 'verb / noun',
    definition:
      '(verb) To settle down, rest, or sleep in a specific place (of bats or birds); (noun) a place where winged creatures congregate to rest.',
    definitionVi:
      '(động từ) Đậu, trú ngụ, làm tổ nghỉ; (danh từ) Nơi trú ẩn, nơi ngủ của dơi hoặc chim.',
    passageContext:
      '...with the disappearance of old-growth trees, insectivorous bats began roosting in the rafters of buildings and residential homes.',
    paragraphRef: 2,
    collocations: ['roosting site', 'communal roost', 'roosting bats', 'roost in roofs'],
    synonyms: ['perch', 'nest', 'lodge', 'shelter'],
    ieltsBand: 'Band 7.0+',
  },
  {
    id: 'vocab-4',
    word: 'Ecosystem service',
    phonetic: '/ˈiː.kəʊˌsɪs.təm ˈsɜː.vɪs/',
    partOfSpeech: 'noun phrase',
    definition:
      'The direct and indirect contributions that natural ecosystems and wildlife provide to human well-being and agriculture (e.g. pollination, natural pest control).',
    definitionVi:
      'Dịch vụ hệ sinh thái: Những lợi ích vô giá mà hệ sinh thái tự nhiên cung cấp cho con người và nông nghiệp (như thụ phấn, kiểm soát sâu bệnh tự nhiên).',
    passageContext:
      '...revealing critical ecosystem services that nocturnal animals supply to rural farmers without chemical expenses.',
    paragraphRef: 2,
    collocations: ['vital ecosystem services', 'deliver ecosystem services', 'valuation of ecosystem services'],
    synonyms: ['ecological benefits', 'nature-based benefits', 'environmental support'],
    ieltsBand: 'Band 8.0+',
  },
  {
    id: 'vocab-5',
    word: 'Droppings',
    phonetic: '/ˈdrɒp.ɪŋz/',
    partOfSpeech: 'noun (plural)',
    definition:
      'The solid excrement of animals or birds; guano.',
    definitionVi:
      'Chất thải / Phân của động vật hoặc chim (phân dơi: guano).',
    passageContext:
      'Rocha and his research colleagues collected bat droppings underneath roosting roosts to perform state-of-the-art DNA sequencing...',
    paragraphRef: 3,
    collocations: ['bat droppings', 'bird droppings', 'collect droppings', 'guano accumulation'],
    synonyms: ['faeces', 'excrement', 'guano', 'dung'],
    ieltsBand: 'Band 6.5+',
  },
  {
    id: 'vocab-6',
    word: 'Voracious',
    phonetic: '/vəˈreɪ.ʃəs/',
    partOfSpeech: 'adjective',
    definition:
      'Engaging in an activity with huge appetite or eagerness; consuming extremely large quantities of food.',
    definitionVi:
      'Háu ăn, ăn ngấu nghiến, săn bắt với số lượng lớn: Tiêu thụ lượng thức ăn khổng lồ so với trọng lượng cơ thể.',
    passageContext:
      'Bats are voracious nighttime hunters, consuming up to their own body mass in pest insects each evening.',
    paragraphRef: 3,
    collocations: ['voracious predator', 'voracious appetite', 'voracious consumer'],
    synonyms: ['insatiable', 'gluttonous', 'ravenous', 'unquenchable'],
    ieltsBand: 'Band 8.0+',
  },
  {
    id: 'vocab-7',
    word: 'Pest',
    phonetic: '/pest/',
    partOfSpeech: 'noun',
    definition:
      'A destructive insect, rodent, or other animal that attacks crops, food, livestock, or property.',
    definitionVi:
      'Sâu bệnh, sinh vật gây hại: Côn trùng hoặc động vật phá hoại mùa màng và đời sống con người.',
    passageContext:
      '...eating serious agricultural pests such as grasshoppers and moths that cause widespread devastation to rice crops.',
    paragraphRef: 4,
    collocations: ['crop pests', 'agricultural pests', 'pest control', 'pest infestation', 'eliminate pests'],
    synonyms: ['destructive insect', 'blight', 'vermin', 'parasite'],
    ieltsBand: 'Band 6.5+',
  },
  {
    id: 'vocab-8',
    word: 'Vector',
    phonetic: '/ˈvek.tər/',
    partOfSpeech: 'noun',
    definition:
      'An organism (typically a biting insect or tick) that transmits a disease or parasite from one animal or plant to another.',
    definitionVi:
      'Vật chủ trung gian truyền bệnh / Sinh vật truyền bệnh: Động vật (thường là muỗi, bọ) mang và lây truyền mầm bệnh sang sinh vật khác.',
    passageContext:
      '...by preying heavily on mosquitoes that serve as primary vectors for infectious diseases such as malaria.',
    paragraphRef: 4,
    collocations: ['disease vector', 'insect vector', 'malaria vector', 'biological vector'],
    synonyms: ['carrier', 'transmitter', 'agent'],
    ieltsBand: 'Band 7.5+',
  },
  {
    id: 'vocab-9',
    word: 'Taboo',
    phonetic: '/təˈbuː/',
    partOfSpeech: 'noun / adjective',
    definition:
      'A social, spiritual, or cultural prohibition that forbids a particular practice, speech, or association with an animal or place.',
    definitionVi:
      'Điều cấm kỵ (văn hóa, tín ngưỡng): Sự cấm đoán nghiêm ngặt trong một cộng đồng phong tục.',
    passageContext:
      '...owing to ancestral taboos known locally as fady, certain bat species enjoy protective reverence from local hunters.',
    paragraphRef: 5,
    collocations: ['cultural taboo', 'strict taboo', 'religious taboo', 'social taboo'],
    synonyms: ['prohibition', 'ban', 'sacred restriction', 'interdiction'],
    ieltsBand: 'Band 7.5+',
  },
  {
    id: 'vocab-10',
    word: 'Coexistence',
    phonetic: '/ˌkəʊ.ɪɡˈzɪs.təns/',
    partOfSpeech: 'noun',
    definition:
      'The state or condition of living or existing together peacefully at the same time or in the same geographical space.',
    definitionVi:
      'Sự cùng chung sống hòa bình: Trạng thái con người và động vật hoang dã cùng tồn tại mà không xung đột hoặc tiêu diệt lẫn nhau.',
    passageContext:
      '...offering a blueprint for human-wildlife coexistence that bolsters food security while maintaining environmental health.',
    paragraphRef: 6,
    collocations: ['peaceful coexistence', 'human-wildlife coexistence', 'harmonious coexistence'],
    synonyms: ['living side by side', 'mutual tolerance', 'concord', 'harmony'],
    ieltsBand: 'Band 7.5+',
  },
];

export const CONSOLIDATION_GRAMMAR: GrammarStructureItem[] = [
  {
    id: 'grammar-1',
    name: 'Participle Clauses for Cause, Time & Means',
    category: 'Sentence Variety & Complex Modification',
    formula: 'Present Participle (V-ing) / Past Participle (V-ed) + Object / Prepositional Phrase, [Main Clause]',
    passageExample:
      'Analyzing fecal matter retrieved from roosts, researchers verified that the animals fed on devastating agricultural pests.',
    paragraphRef: 3,
    explanation:
      'Participle clauses allow academic writers to express actions occurring simultaneously or causally without repeating subject pronouns or coordinate conjunctions (like "and" or "because").',
    explanationVi:
      'Mệnh đề phân từ (V-ing hoặc V-ed) giúp câu văn học thuật cô đọng, nối kết nguyên nhân, phương tiện hoặc hành động đồng thời mà không cần lặp từ nối dài dòng.',
    ieltsApplication:
      'Crucial for IELTS Academic Writing Task 2 to achieve Band 8.0+ in Grammatical Range and Accuracy.',
    ieltsApplicationVi:
      'Là công cụ chủ chốt trong IELTS Writing Task 2 và Reading để tóm lược thông tin và tạo câu ghép phức đẳng cấp Band 8+.',
    practiceExample:
      'By consuming immense numbers of leafhoppers, bats substantially curtail the necessity for toxic insecticides.',
  },
  {
    id: 'grammar-2',
    name: 'Inversion with Negative & Restrictive Adverbials',
    category: 'Advanced Academic Emphasis',
    formula: 'Not only + Auxiliary + Subject + Verb..., but [Subject] also + Verb...',
    passageExample:
      'Not only do insectivorous bats decimate rice swarms, but they also curb the prevalence of malarial vectors.',
    paragraphRef: 4,
    explanation:
      'When fronted with negative or restrictive adverbials like "Not only", subject-auxiliary inversion is triggered to give forceful rhetorical weight to dual benefits.',
    explanationVi:
      'Khi đặt các trạng từ mang nghĩa phủ định/giới hạn như "Not only" lên đầu câu, hiện tượng đảo ngữ (trợ động từ đứng trước chủ ngữ) được dùng để nhấn mạnh các lợi ích kép.',
    ieltsApplication:
      'Exceptional structure for IELTS Writing Task 2 conclusion and body paragraphs to emphasize compounding advantages.',
    ieltsApplicationVi:
      'Cực kỳ ấn tượng khi viết kết bài hoặc các luận điểm quan trọng trong IELTS Writing để chứng minh lợi ích đa chiều.',
    practiceExample:
      'Not only does deforestation endanger endemic bats, but it also deprives farmers of their most potent natural pest regulators.',
  },
  {
    id: 'grammar-3',
    name: 'Passive Voice with Modals of Recommendation',
    category: 'Policy & Objective Suggestion',
    formula: 'Subject + should / ought to / must + be + Past Participle (V-ed/V3)',
    passageExample:
      'Roost boxes could be erected outside village houses so that bats are discouraged from entering living quarters.',
    paragraphRef: 6,
    explanation:
      'Academic and scientific reports use passive modals to maintain an objective tone when proposing interventions, focusing on the action rather than personal pronouns.',
    explanationVi:
      'Văn phong báo cáo học thuật dùng bị động với động từ khuyết thiếu để diễn đạt giải pháp mang tính khách quan, khoa học, tránh đại từ nhân xưng chủ quan.',
    ieltsApplication:
      'Ideal for Problem-Solution essays and Task 1 process/diagram summaries.',
    ieltsApplicationVi:
      'Thích hợp nhất cho bài luận Problem-Solution trong Writing Task 2 khi đề xuất phương án giải quyết vấn đề.',
    practiceExample:
      'Artificial bat houses should be constructed in agricultural areas to provide safe habitats away from residential roofs.',
  },
  {
    id: 'grammar-4',
    name: 'Reduced Relative Clauses (Post-Modification)',
    category: 'Academic Conciseness',
    formula: 'Noun + [Participle Phrase modifying noun directly without who/which/that]',
    passageExample:
      'Insects attacking vital crops are systematically targeted by colonies residing nearby.',
    paragraphRef: 4,
    explanation:
      'Omitting the relative pronoun and auxiliary verb (e.g. "Insects [which are] attacking") condenses sentences and creates natural academic density.',
    explanationVi:
      'Rút gọn mệnh đề quan hệ bằng cách lược bỏ đại từ quan hệ và to be, giữ lại phân từ V-ing hoặc V-ed giúp câu văn ngắn gọn, súc tích và học thuật hơn.',
    ieltsApplication:
      'Assists reading comprehension speed when parsing long noun phrases in IELTS Reading.',
    ieltsApplicationVi:
      'Giúp đọc hiểu nhanh các cụm danh từ dài phức tạp trong bài thi IELTS Reading mà không bị nhầm lẫn vị ngữ chính.',
    practiceExample:
      'Farmers cultivating crops in Madagascar frequently encounter problems caused by insect infestations.',
  },
];

export const CONSOLIDATION_PARAPHRASES: ParaphrasePair[] = [
  {
    id: 'para-1',
    originalText: 'Rocha and his team collected bat droppings underneath roosting roosts.',
    paraphrasedText: 'The researchers obtained fecal samples from underneath perches used by bats.',
    technique: 'Synonym Substitution & Nominalization',
    techniqueVi: 'Thay thế từ đồng nghĩa (droppings -> fecal samples, roosting -> perches) và danh từ hóa',
    explanation:
      '"Bat droppings" is directly paraphrased as "fecal samples / guano", which is the primary lexical trap tested in Question 7.',
    explanationVi:
      '"Bat droppings" được viết lại thành "fecal samples", giúp thí sinh xác định chính xác vị trí câu hỏi 7 trong bảng.',
    paragraphRef: 3,
  },
  {
    id: 'para-2',
    originalText: 'Pests that attack cash crops such as coffee, rice, and sugarcane were consumed.',
    paraphrasedText: 'Insects causing severe damage to lucrative agricultural produce were eaten.',
    technique: 'Generalization & Category Paraphrase',
    techniqueVi: 'Khái quát hóa nhóm danh từ (coffee, rice, sugarcane -> lucrative agricultural produce)',
    explanation:
      'In Question 8, "coffee" is listed alongside rice and sugarcane under crops damaged by pests.',
    explanationVi:
      'Trong câu hỏi 8, từ khóa "coffee" nằm trong chuỗi liệt kê các cây trồng bị sâu bọ tàn phá được loài dơi bảo vệ.',
    paragraphRef: 4,
  },
  {
    id: 'para-3',
    originalText: 'Bats may curb human infection rates by devouring mosquitoes responsible for spreading malaria.',
    paraphrasedText: 'The winged mammals help avert illnesses by preying on disease-carrying mosquito populations.',
    technique: 'Active-to-Passive & Lexical Shift',
    techniqueVi: 'Chuyển đổi từ vựng (curb infection rates -> avert illnesses, devouring -> preying on)',
    explanation:
      'Directly links to Question 9 where the table asks how bats prevent disease (by consuming mosquitoes).',
    explanationVi:
      'Liên kết trực tiếp tới câu 9 trong bảng hoàn thành: dơi ngăn ngừa bệnh tật nhờ ăn muỗi truyền bệnh.',
    paragraphRef: 4,
  },
  {
    id: 'para-4',
    originalText: 'Certain species are preserved due to spiritual restrictions known as fady in Malagasy culture.',
    paraphrasedText: 'Traditional customary taboos grant protection to some varieties of bats.',
    technique: 'Semantic Equivalence & Reordering',
    techniqueVi: 'Tương đương ngữ nghĩa và đảo trật tự mệnh đề (spiritual restrictions -> customary taboos)',
    explanation:
      'Question 12 tests that bats have an important role in local culture through ancestral traditions and taboos.',
    explanationVi:
      'Câu hỏi 12 kiểm tra vai trò quan trọng của dơi trong nền văn hóa địa phương (culture) thông qua phong tục fady.',
    paragraphRef: 5,
  },
  {
    id: 'para-5',
    originalText: 'Providing purpose-built roost boxes encourages bats to relocate away from human homes.',
    paraphrasedText: 'Installing specialized shelters prompts bats to settle outside residential dwellings.',
    technique: 'Compound Transformation & Contextual Synonym',
    techniqueVi: 'Thay đổi cấu trúc ghép (purpose-built roost boxes -> specialized shelters/houses)',
    explanation:
      'Question 13 recommends building special houses/boxes for the bats to roost outside human dwellings.',
    explanationVi:
      'Câu hỏi 13 đưa ra khuyến nghị dựng các ngôi nhà/hộp đặc biệt (houses) để dơi làm tổ ngoài khu dân cư.',
    paragraphRef: 6,
  },
];

export const MATCHING_TASKS: MatchingTaskItem[] = [
  {
    id: 'match-1',
    term: 'Ecosystem service',
    definition: 'Beneficial natural functions provided by wildlife, such as biological pest control and pollination.',
    definitionVi: 'Lợi ích tự nhiên do động vật hoang dã cung cấp, ví dụ như diệt sâu bọ và thụ phấn.',
    context: 'The study demonstrates the immense economic value of bat ecosystem services in Malagasy agriculture.',
  },
  {
    id: 'match-2',
    term: 'Voracious predator',
    definition: 'A nocturnal hunter that captures and consumes unusually massive volumes of prey each evening.',
    definitionVi: 'Kẻ săn mồi háu ăn, tiêu thụ lượng con mồi cực kỳ lớn mỗi đêm so với trọng lượng cơ thể.',
    context: 'Insectivorous bats act as voracious predators against night-flying crop beetles and moths.',
  },
  {
    id: 'match-3',
    term: 'Fady',
    definition: 'A sacred cultural taboo or prohibition deeply rooted in Malagasy ancestral traditions.',
    definitionVi: 'Điều cấm kỵ hoặc luật tục thiêng liêng có nguồn gốc sâu xa trong văn hóa Madagascar.',
    context: 'Some local bats are protected from hunting by traditional prohibitions termed fady.',
  },
  {
    id: 'match-4',
    term: 'Disease vector',
    definition: 'An organism that carries and spreads pathogens or parasites from one host to another.',
    definitionVi: 'Sinh vật trung gian mang và lây truyền mầm bệnh hoặc ký sinh trùng sang vật chủ khác.',
    context: 'Mosquitoes serve as dangerous vectors transmitting malaria and elephantiasis.',
  },
  {
    id: 'match-5',
    term: 'Deforestation',
    definition: 'The large-scale destruction of forests for agricultural expansion, timber, and settlements.',
    definitionVi: 'Hành động tàn phá rừng quy mô lớn để lấy đất nông nghiệp, gỗ và định cư.',
    context: 'Deforestation has stripped Madagascar of four-fifths of its original virgin rainforests.',
  },
  {
    id: 'match-6',
    term: 'Roost box',
    definition: 'A custom-built wooden shelter mounted outdoors to give bats a safe resting site away from human roofs.',
    definitionVi: 'Hộp gỗ dựng ngoài trời cung cấp chỗ ở an toàn cho dơi, tránh làm tổ trong mái nhà.',
    context: 'Constructing outdoor roost boxes provides a practical solution to bat-human domestic conflict.',
  },
];

export const GAP_FILL_TASKS: GapFillTaskItem[] = [
  {
    id: 'gap-1',
    sentence: 'Rocha and his team carried out DNA sequencing on bat _______ gathered from under communal roosts.',
    targetWord: 'droppings',
    options: ['droppings', 'feathers', 'leaves', 'insects'],
    hint: 'Look for the word meaning solid waste excreted by bats.',
    hintVi: 'Tìm từ chỉ chất thải rắn / phân của loài dơi.',
    explanation: 'The passage explicitly notes that the team analyzed bat droppings to identify what insects were consumed.',
    explanationVi: 'Đoạn văn nêu rõ nhóm nghiên cứu đã thu thập và phân tích phân dơi (droppings) để xác định con mồi.',
  },
  {
    id: 'gap-2',
    sentence: 'Besides destroying rice crops, insects also damage vital export plants including _______ and sugarcane.',
    targetWord: 'coffee',
    options: ['coffee', 'tea', 'wheat', 'barley'],
    hint: 'A popular caffeinated morning beverage grown in the tropics.',
    hintVi: 'Loài cây nhiệt đới cho thức uống chứa caffeine phổ biến vào buổi sáng.',
    explanation: 'Coffee is specifically named in Paragraph 4 as one of the lucrative crops plagued by insects eaten by bats.',
    explanationVi: 'Cà phê (coffee) được nêu chính xác trong Đoạn 4 là cây trồng bị sâu bọ tấn công và được dơi bảo vệ.',
  },
  {
    id: 'gap-3',
    sentence: 'Bats reduce health hazards in farming regions by consuming _______ that spread malaria.',
    targetWord: 'mosquitoes',
    options: ['mosquitoes', 'wasps', 'locusts', 'caterpillars'],
    hint: 'Flying biting insects notorious for transmitting malaria.',
    hintVi: 'Loài côn trùng bay hay chích đốt, nổi tiếng truyền bệnh sốt rét.',
    explanation: 'Paragraph 4 explains that bats feast on mosquitoes, thereby curtailing the spread of dangerous vector-borne diseases.',
    explanationVi: 'Đoạn 4 giải thích dơi săn bắt muỗi (mosquitoes), nhờ đó ngăn ngừa dịch bệnh lây lan.',
  },
  {
    id: 'gap-4',
    sentence: 'Although bat meat supplies valuable _______ in some diets, many villagers dislike bat roosts in their dwellings.',
    targetWord: 'protein',
    options: ['protein', 'carbohydrate', 'vitamin', 'calcium'],
    hint: 'An essential macronutrient derived from meat and animal muscle.',
    hintVi: 'Một chất dinh dưỡng đa lượng thiết yếu có nhiều trong thịt động vật.',
    explanation: 'Paragraph 5 mentions that bat flesh is consumed by some rural people as an accessible source of protein.',
    explanationVi: 'Đoạn 5 đề cập thịt dơi được một số người dân nông thôn sử dụng như nguồn chất đạm (protein) dễ tiếp cận.',
  },
  {
    id: 'gap-5',
    sentence: 'Guano accumulation and the squeaking sounds produced by bats lead locals to view buildings as _______.',
    targetWord: 'unclean',
    options: ['unclean', 'hazardous', 'ruined', 'fragile'],
    hint: 'Not clean; dirty and foul-smelling.',
    hintVi: 'Không sạch sẽ; bị bẩn và bốc mùi hôi thối.',
    explanation: 'The table and paragraph 5 state that bat roosts cause domestic ceilings and buildings to feel unclean.',
    explanationVi: 'Bảng hoàn thành và Đoạn 5 nêu rõ tiếng ồn và phân dơi khiến ngôi nhà bị coi là không sạch sẽ (unclean).',
  },
  {
    id: 'gap-6',
    sentence: 'Scientists recommend erecting specialized bat _______ away from homes to allow mutual coexistence.',
    targetWord: 'houses',
    options: ['houses', 'nets', 'traps', 'fences'],
    hint: 'Artificial outdoor wooden boxes or shelters built for bats.',
    hintVi: 'Các hộp gỗ hoặc nơi trú ẩn nhân tạo được dựng ngoài trời dành cho loài dơi.',
    explanation: 'Rocha suggests installing bat houses (or roost boxes) outside domestic properties.',
    explanationVi: 'Rocha khuyến nghị lắp đặt các ngôi nhà/hộp dơi (houses) bên ngoài các khu nhà ở.',
  },
];

export const REFERENCE_TASKS: ReferenceTaskItem[] = [
  {
    id: 'ref-1',
    question: 'In Paragraph 2, what does the pronoun "they" refer to in: "As old-growth trees vanished, they began sheltering inside buildings"?',
    quote: 'As old-growth trees vanished, they began sheltering inside buildings...',
    paragraphRef: 2,
    options: ['Insectivorous bats', 'Local farmers', 'Old-growth trees', 'Research scientists'],
    correctIndex: 0,
    explanation: 'The subject pronoun "they" substitutes for the insectivorous bats searching for surrogate roosting sites.',
    explanationVi: 'Đại từ "they" thay thế cho loài dơi ăn côn trùng (Insectivorous bats) đang tìm kiếm nơi trú ngụ thay thế.',
  },
  {
    id: 'ref-2',
    question: 'In Paragraph 4, what does the word "these" refer to in: "preying on mosquitoes which act as disease vectors; these transmit malaria and elephantiasis"?',
    quote: '...preying on mosquitoes which act as disease vectors; these transmit malaria and elephantiasis.',
    paragraphRef: 4,
    options: ['Mosquitoes', 'Bats', 'Pest insects', 'Rural farmers'],
    correctIndex: 0,
    explanation: '"These" clearly points back to the immediate noun phrase: mosquitoes that act as disease vectors.',
    explanationVi: '"These" trỏ trực tiếp đến cụm danh từ đứng ngay trước nó: loài muỗi (mosquitoes) truyền bệnh.',
  },
  {
    id: 'ref-3',
    question: 'In Paragraph 5, what does the word "fady" represent in the community?',
    quote: '...protected under ancestral taboos known locally as fady...',
    paragraphRef: 5,
    options: ['Ancestral cultural taboos and prohibitions', 'A type of agricultural insecticide', 'A species of fruit bat', 'A wooden roosting box'],
    correctIndex: 0,
    explanation: '"Fady" is defined in the text as the Malagasy term for customary cultural taboos.',
    explanationVi: '"Fady" được định nghĩa trong bài là thuật ngữ chỉ các điều cấm kỵ văn hóa truyền thống của người Malagasy.',
  },
  {
    id: 'ref-4',
    question: 'In Paragraph 6, what does "this approach" refer to?',
    quote: 'By building roosting boxes outside, this approach harmonizes human needs with wildlife conservation.',
    paragraphRef: 6,
    options: ['Erecting external bat houses to separate roosts from dwellings', 'Spraying chemical pesticides over fields', 'Clearing forest trees to build houses', 'Hunting bats for protein'],
    correctIndex: 0,
    explanation: '"This approach" summarizes the recommendation of constructing external bat roost boxes.',
    explanationVi: '"This approach" tóm lược giải pháp lắp đặt các hộp trú ngụ ngoài trời cho dơi.',
  },
];

export const TRANSFORMATION_TASKS: TransformationTaskItem[] = [
  {
    id: 'trans-1',
    original: 'Bats eat pest insects, so farmers do not need to purchase large amounts of artificial pesticides.',
    targetGrammar: 'Conditional / Reduction with "By + V-ing"',
    prompt: 'Rewrite the sentence starting with "By consuming..."',
    options: [
      'By consuming pest insects, bats decrease the reliance of farmers on expensive synthetic pesticides.',
      'By consuming pest insects, expensive pesticides are bought in larger quantities by farmers.',
      'By consuming pest insects, farmers must stop cultivating crops in Madagascar.',
      'By consuming pest insects, pesticides become harmless to local wildlife.',
    ],
    correctIndex: 0,
    explanation: 'Option A correctly uses the prepositional phrase "By consuming..." followed by the logical subject "bats" executing the action.',
    explanationVi: 'Lựa chọn A sử dụng đúng cấu trúc "By consuming..." và theo sau là chủ ngữ hợp lý "bats" thực hiện hành động.',
  },
  {
    id: 'trans-2',
    original: 'The research team collected droppings because they wanted to examine the diet of bats with DNA technology.',
    targetGrammar: 'Infinitive of Purpose',
    prompt: 'Rewrite the sentence emphasizing purpose with "In order to..."',
    options: [
      'In order to analyze the bats’ diet via DNA sequencing, the scientists collected fecal droppings from roosts.',
      'In order to collect fecal droppings, bats were forced to leave their natural forest habitats.',
      'In order to examine the DNA, farmers had to stop hunting bats inside their houses.',
      'In order to build roost boxes, droppings were removed from all agricultural lands.',
    ],
    correctIndex: 0,
    explanation: 'Option A places "In order to analyze..." at the front, smoothly explaining the experimental purpose.',
    explanationVi: 'Lựa chọn A đưa "In order to analyze..." lên đầu câu để nhấn mạnh mục đích nghiên cứu một cách súc tích.',
  },
  {
    id: 'trans-3',
    original: 'Because deforestation destroyed their forest homes, bats moved into residential buildings.',
    targetGrammar: 'Past Participle Clause (Deprived of...)',
    prompt: 'Select the most academically sophisticated transformation:',
    options: [
      'Deprived of their natural forest habitat by deforestation, bats increasingly established roosts within residential structures.',
      'Deforestation deprived bats of homes so they vanished completely from all regions in Madagascar.',
      'Having been moved into residential buildings, deforestation was eliminated by the bats.',
      'Depriving humans of buildings, bats decided to restore the damaged rainforest.',
    ],
    correctIndex: 0,
    explanation: 'Option A showcases Band 8.5+ syntax: "Deprived of... by deforestation, [Subject: bats] established roosts..."',
    explanationVi: 'Lựa chọn A thể hiện cấu trúc phân từ hoàn hảo: "Deprived of... bats established roosts...", nâng cao tính học thuật.',
  },
  {
    id: 'trans-4',
    original: 'Bats eat pests and they also control mosquitoes that spread malaria.',
    targetGrammar: 'Inversion with "Not only"',
    prompt: 'Rewrite using negative inversion:',
    options: [
      'Not only do bats suppress agricultural pests, but they also regulate mosquito vectors of malaria.',
      'Not only bats suppress agricultural pests, but they also regulate mosquito vectors.',
      'Not only does pests get eaten by bats, but mosquitoes also spread more malaria.',
      'Not only bats do eat pests, but mosquitoes are also eaten.',
    ],
    correctIndex: 0,
    explanation: 'Option A adheres strictly to standard auxiliary inversion: "Not only do bats suppress... but they also regulate..."',
    explanationVi: 'Lựa chọn A tuân thủ chuẩn xác ngữ pháp đảo ngữ: "Not only do bats suppress... but they also regulate...".',
  },
];
