import { 
  ParagraphData, 
  QuestionItem, 
  TipStrip, 
  ReviewItem, 
  ActionPlanReminder,
  StrategyExtractItem,
  ErrorAnalysisItem
} from '../types';

export const PASSAGE_TITLE = "Bats to the rescue";
export const PASSAGE_SUBTITLE =
  "How Madagascar’s bats are helping to save the rainforest";

export const REVIEW_QUESTIONS: ReviewItem[] = [
  {
    id: 1,
    question: 'What are the two task types in Reading Passage 1?',
    questionVi: 'Hai dạng bài trong Reading Passage 1 gồm những gì?',
    answer: 'Task 1 has 6 True / False / Not Given questions (1–6), and Task 2 has 7 Table Completion questions (7–13).',
    answerVi: 'Phần 1 gồm 6 câu True / False / Not Given (1–6), và Phần 2 gồm 7 câu Hoàn thành bảng (7–13).',
  },
  {
    id: 2,
    question: 'What is the strict word limit for the Table Completion task (Questions 7–13)?',
    questionVi: 'Quy định nghiêm ngặt về giới hạn từ cho dạng Hoàn thành bảng (câu 7–13) là gì?',
    answer:
      'Choose ONE WORD ONLY from the passage for each answer. Writing two or more words will receive zero marks.',
    answerVi:
      'Chọn DUY NHẤT MỘT TỪ từ bài đọc cho mỗi câu trả lời. Viết từ 2 từ trở lên sẽ bị chấm 0 điểm.',
  },
  {
    id: 3,
    question: 'Do True / False / Not Given and Table Completion questions follow chronological passage order?',
    questionVi: 'Các câu hỏi True/False/Not Given và Hoàn thành bảng có theo thứ tự bài đọc không?',
    answer:
      'Yes. Questions 1–6 follow paragraphs 1 through 5, while the Table Completion questions (7–13) sequentially trace Rocha’s study and findings through paragraphs 6 through 11.',
    answerVi:
      'Có. Các câu 1–6 đi theo trình tự từ đoạn 1 đến đoạn 5, trong khi các câu Hoàn thành bảng (7–13) lần lượt bám sát nghiên cứu của Rocha và các phát hiện từ đoạn 6 đến đoạn 11.',
  },
  {
    id: 4,
    question: 'Can you use synonyms or must you copy words directly from the passage?',
    questionVi: 'Bạn có thể dùng từ đồng nghĩa hay bắt buộc phải sao chép từ bài đọc?',
    answer:
      'For Table Completion (Questions 7–13), you must copy the exact single word directly from the text without altering its form or spelling. For True/False/Not Given (1–6), you analyze whether statements agree with, contradict, or are unmentioned in the text.',
    answerVi:
      'Đối với dạng Hoàn thành bảng (câu 7–13), bạn phải sao chép chính xác một từ duy nhất từ bài đọc mà không thay đổi dạng từ hay chính tả. Đối với True/False/Not Given (1–6), bạn đối chiếu nhận định đúng, sai hay không được đề cập.',
  },
];

export const STRATEGY_EXTRACTS: StrategyExtractItem[] = [
  {
    id: 'extract-a',
    letter: 'A',
    text: 'Madagascar’s forests are being converted to agricultural land at a rate of one percent every year. Much of this destruction is fuelled by the cultivation of the country’s main staple crop: rice. And a key reason for this destruction is that insect pests are destroying vast quantities of what is grown by local subsistence farmers, leading them to clear forest to create new paddy fields.',
    statement: 'Many Madagascan forests are being destroyed by attacks from insects.',
    strategyTitle: 'Distinguishing the Direct Agent vs Underlying Cause',
    strategyDesc: 'Identify who or what is directly clearing the forests: insect pests attack the rice crop, which forces the subsistence farmers to clear forests to make new paddy fields. The insects do not attack the forests directly.',
    strategyDescVi: 'Xác định ai là tác nhân trực tiếp phá rừng: sâu hại tấn công lúa, buộc nông dân phải phá rừng để mở ruộng mới. Côn trùng không hề tấn công tàn phá các khu rừng.',
    officialAnswer: 'FALSE',
    explanation:
      "FALSE: According to the first paragraph of the text, 'insect pests are destroying' the rice in farmers' paddy fields. It is the farmers who are clearing forests to create more fields.",
    explanationVi:
      'FALSE: Côn trùng phá hoại mùa màng lúa của nông dân, còn chính người nông dân mới là người chặt phá rừng để làm ruộng.',
  },
  {
    id: 'extract-b',
    letter: 'B',
    text: 'The result is devastating habitat and biodiversity loss on the island, but not all species are suffering. In fact, some of the island’s insectivorous bats are currently thriving and this has important implications for farmers and conservationists alike.',
    statement: 'Loss of habitat has badly affected insectivorous bats in Madagascar.',
    strategyTitle: 'Contrasting Discourse Markers ("but not all", "thriving")',
    strategyDesc: 'Spot the transition marker "but not all species are suffering". The text explicitly states that insectivorous bats are "currently thriving" (doing well), directly contradicting the statement.',
    strategyDescVi: 'Nhận diện liên từ chuyển ý đối lập "but not all species are suffering". Bài đọc khẳng định dơi ăn côn trùng "currently thriving" (đang phát triển mạnh), trái ngược hoàn toàn nhận định.',
    officialAnswer: 'FALSE',
    explanation:
      "FALSE: The first paragraph says that 'not all species are suffering. In fact, some of the island’s insectivorous bats are currently thriving [doing well]'.",
    explanationVi:
      'FALSE: Bài đọc nêu rõ không phải tất cả các loài đều chịu thiệt hại; thực tế một số loài dơi ăn côn trùng đang sinh sôi phát triển rất tốt.',
  },
  {
    id: 'extract-c',
    letter: 'C',
    text: 'Enter University of Cambridge zoologist Ricardo Rocha. He’s passionate about conservation, and bats. More specifically, he’s interested in how bats are responding to human activity and deforestation in particular. Rocha’s new study shows that several species of bats are giving Madagascar’s rice farmers a vital pest control service by feasting on plagues of insects.',
    statement: 'Ricardo Rocha has carried out studies of bats in different parts of the world.',
    strategyTitle: 'Avoiding Extrapolations (Cambridge vs Global Studies)',
    strategyDesc: 'Notice that being based at Cambridge University and conducting a study in Madagascar does NOT prove or disprove that Rocha has carried out studies elsewhere in the world.',
    strategyDescVi: 'Lưu ý việc công tác tại Cambridge và nghiên cứu tại Madagascar không chứng minh hay phủ nhận việc Rocha đã làm nghiên cứu ở các nơi khác trên thế giới.',
    officialAnswer: 'NOT GIVEN',
    explanation:
      "NOT GIVEN: The text says that Rocha is based in Cambridge, and has carried out a study in Madagascar, but we are not told whether or not he is also studying bats in other parts of the world.",
    explanationVi:
      'NOT GIVEN: Bài đọc cho biết Rocha làm việc ở Cambridge và nghiên cứu tại Madagascar, nhưng không hề đề cập liệu ông có nghiên cứu dơi ở những nơi khác hay không.',
  },
  {
    id: 'extract-d',
    letter: 'D',
    text: 'Co-leading an international team of scientists, Rocha found that several species of indigenous bats are taking advantage of habitat modification to hunt insects swarming above the country’s rice fields.',
    statement: 'Habitat modification has resulted in indigenous bats in Madagascar becoming useful to farmers.',
    strategyTitle: 'Paraphrasing Cause, Effect & Utility to Farmers',
    strategyDesc: 'Match "taking advantage of habitat modification" and preying on rice insect pests swarming above paddy fields to providing a vital biological pest suppression service to farmers.',
    strategyDescVi: 'Kết nối việc dơi tận dụng thay đổi sinh cảnh và săn sâu hại lúa trên đồng ruộng với việc mang lại dịch vụ kiểm soát sinh học quý giá cho nông dân.',
    officialAnswer: 'TRUE',
    explanation:
      "TRUE: The fourth paragraph says that 'several species of indigenous bats are taking advantage of habitat modification to hunt insects swarming above the country’s rice fields'. By hunting the insects, they are useful to farmers.",
    explanationVi:
      'TRUE: Dơi bản địa tận dụng sinh cảnh bị thay đổi để săn côn trùng hại lúa, qua đó trở nên rất hữu ích cho người nông dân.',
  },
  {
    id: 'extract-e',
    letter: 'E',
    text: 'Rocha and his team used state-of-the-art ultrasonic recorders to record over a thousand bat ‘feeding buzzes’ (echolocation sequences used by bats to target their prey) at 54 sites... They next used DNA barcoding techniques to analyse droppings collected from bats at the different sites.',
    statement: 'DNA analysis of bat droppings revealed what insects bats were consuming.',
    strategyTitle: 'Locating Specific Methodology & Specimen Nouns',
    strategyDesc: 'Identify the exact noun connected with DNA barcoding: "analyse droppings collected from bats". For Table Completion, the single word answer is "droppings".',
    strategyDescVi: 'Xác định danh từ vật phẩm đi kèm với kỹ thuật phân tích ADN: "analyse droppings collected from bats". Từ đơn cần điền là "droppings".',
    officialAnswer: 'TRUE',
    explanation:
      "TRUE: Rocha and his team used DNA barcoding techniques to analyse droppings collected from bats to identify their prey species.",
    explanationVi:
      'TRUE: Nhóm nghiên cứu dùng kỹ thuật mã vạch ADN phân tích phân dơi thu thập được để xác định con mồi của chúng.',
  },
  {
    id: 'extract-f',
    letter: 'F',
    text: 'And one potential problem is that while these bats are benefiting from farming, at the same time deforestation is reducing the places where they can roost, which could have long-term effects on their numbers. Rocha says, ‘With the right help, we hope that farmers can promote this mutually beneficial relationship by installing bat houses.’',
    statement: 'Farmers are advised to provide artificial shelters to maintain bat populations.',
    strategyTitle: 'Matching Paraphrases for Recommendations',
    strategyDesc: 'Connect "provide special houses" in the question table to "installing bat houses" in paragraph 11.',
    strategyDescVi: 'Đối chiếu khuyến nghị "cung cấp các ngôi nhà đặc biệt" với việc "lắp đặt các hộp/nhà cho dơi (bat houses)" ở đoạn 11.',
    officialAnswer: 'TRUE',
    explanation:
      "TRUE: The text concludes that Rocha hopes farmers can install 'bat houses' to provide roosting places and support bat numbers.",
    explanationVi:
      'TRUE: Đoạn văn nêu Rocha hy vọng nông dân lắp đặt nhà cho dơi (bat houses) để hỗ trợ chỗ trú ngụ và duy trì số lượng dơi.',
  },
];

export const ERROR_ANALYSIS_ITEMS: ErrorAnalysisItem[] = [
  {
    id: 1,
    questionPrompt: '1 Many Madagascan forests are being destroyed by attacks from insects. [FALSE]',
    studentAnswer: 'TRUE',
    rubricRule: 'Write TRUE if the statement agrees with the information, FALSE if it contradicts.',
    matchedReasonId: 'A',
    explanation:
      "The student confused insect pests attacking rice fields with insect pests attacking the forests. The passage explicitly states that insect pests destroy farmers' rice crops, which leads the farmers to clear forests to make new fields.",
    explanationVi:
      'Học sinh nhầm lẫn sâu hại phá lúa với sâu hại phá rừng. Bài đọc nêu rõ côn trùng phá lúa của nông dân, dẫn đến việc nông dân phải chặt phá rừng để mở thêm ruộng mới.',
  },
  {
    id: 2,
    questionPrompt: '2 Loss of habitat has badly affected insectivorous bats in Madagascar. [FALSE]',
    studentAnswer: 'TRUE',
    rubricRule: 'Write TRUE if the statement agrees with the information, FALSE if it contradicts.',
    matchedReasonId: 'E',
    explanation:
      "The student assumed that because deforestation causes devastating biodiversity loss, bats must also be suffering. However, paragraph 1 explicitly states: 'not all species are suffering. In fact, some of the island’s insectivorous bats are currently thriving'.",
    explanationVi:
      'Học sinh tự suy đoán nạn phá rừng gây mất đa dạng sinh học thì dơi cũng phải chịu thiệt. Nhưng đoạn 1 nêu rõ: một số loài dơi ăn côn trùng hiện đang phát triển rất mạnh (thriving).',
  },
  {
    id: 3,
    questionPrompt: '3 Ricardo Rocha has carried out studies of bats in different parts of the world. [NOT GIVEN]',
    studentAnswer: 'TRUE',
    rubricRule: 'Write NOT GIVEN if there is no information on this.',
    matchedReasonId: 'B',
    explanation:
      "The student saw that Rocha is based at the University of Cambridge and later read that bats pest control has been proven in the USA and Catalonia, assuming Rocha must have conducted those studies. However, the USA/Catalonia study was cited by James Kemp, and no worldwide studies by Rocha are mentioned.",
    explanationVi:
      'Học sinh thấy Rocha ở Đại học Cambridge và đoạn sau có nhắc tới Mỹ và Catalonia nên tự suy đoán Rocha nghiên cứu ở đó. Thực tế nghiên cứu ở Mỹ/Catalonia do James Kemp trích dẫn và bài không nói Rocha có nghiên cứu nơi khác hay không.',
  },
  {
    id: 4,
    questionPrompt: 'Method: DNA analysis of bat 7 [droppings]',
    studentAnswer: 'bat droppings',
    rubricRule: 'Choose ONE WORD ONLY from the passage for each answer.',
    matchedReasonId: 'C',
    explanation:
      "The student wrote two words ('bat droppings'), violating the strict rubric 'Choose ONE WORD ONLY'. The word 'bat' is already in the prompt stem ('DNA analysis of bat 7...'). The correct answer is 'droppings'.",
    explanationVi:
      'Học sinh viết hai từ ("bat droppings"), vi phạm quy định "CHỌN DUY NHẤT MỘT TỪ". Từ "bat" đã có sẵn trong câu đề bài. Đáp án đúng là "droppings".',
  },
  {
    id: 5,
    questionPrompt: 'Findings: the bats ate pests of rice, 8 [coffee], sugarcane, nuts and fruit',
    studentAnswer: 'coffee plants',
    rubricRule: 'Choose ONE WORD ONLY from the passage for each answer.',
    matchedReasonId: 'C',
    explanation:
      "The passage mentions the black twig borer which infests 'coffee plants'. The student copied two words ('coffee plants') instead of the single crop noun 'coffee', which parallels rice, sugarcane, nuts and fruit.",
    explanationVi:
      'Bài đọc viết "coffee plants". Học sinh chép hai từ vi phạm giới hạn 1 từ. Từ chỉ cây trồng song hành với rice, sugarcane, nuts là "coffee".',
  },
  {
    id: 6,
    questionPrompt: 'Recommendation: farmers should provide special 13 [houses] to support the bat population',
    studentAnswer: 'bat houses',
    rubricRule: 'Choose ONE WORD ONLY from the passage for each answer.',
    matchedReasonId: 'D',
    explanation:
      "The student wrote 'bat houses', but the rubric explicitly limits answers to ONE WORD ONLY, and the prompt already specifies providing them 'to support the bat population'. The correct single word is 'houses'.",
    explanationVi:
      'Học sinh viết "bat houses" (2 từ). Đề bài đã có "support the bat population". Từ đơn cần điền là "houses".',
  },
];

export const ERROR_ANALYSIS_REASONS = [
  {
    id: 'A',
    text: "The student confused the direct agent/target of damage (insects destroy rice, while farmers clear forest).",
    textVi: 'Học sinh nhầm lẫn đối tượng gây hại trực tiếp (côn trùng phá lúa, còn nông dân phá rừng).',
  },
  {
    id: 'B',
    text: "The student extrapolated information from external mentions (confusing Rocha with studies cited by co-authors).",
    textVi: 'Học sinh suy diễn dữ kiện ngoài bài (nhầm Rocha với nghiên cứu do đồng tác giả trích dẫn).',
  },
  {
    id: 'C',
    text: "The answer violates the strict ONE WORD ONLY limit by including an unnecessary modifier or noun.",
    textVi: 'Đáp án vi phạm giới hạn nghiêm ngặt DUY NHẤT MỘT TỪ khi chép kèm từ bổ nghĩa.',
  },
  {
    id: 'D',
    text: "The student repeated a word already implied or present in the surrounding sentence context.",
    textVi: 'Học sinh lặp lại từ đã được bao hàm hoặc có sẵn trong ngữ cảnh câu hỏi.',
  },
  {
    id: 'E',
    text: "The student relied on personal assumptions instead of verifying whether the text contradicts the statement.",
    textVi: 'Học sinh dựa vào phỏng đoán cá nhân thay vì kiểm tra bài đọc có nêu dữ kiện trái ngược hay không.',
  },
  {
    id: 'F',
    text: "The student altered the grammatical form or spelling of the word copied directly from the passage.",
    textVi: 'Học sinh tự ý biến đổi dạng từ hoặc sai chính tả từ trích xuất từ bài đọc.',
  },
];

export const ACTION_PLAN_TFNG: ActionPlanReminder = {
  taskType: 'tfng',
  title: 'Action Plan: True / False / Not Given (Questions 1–6)',
  titleVi: 'Kế hoạch hành động: True / False / Not Given (Câu 1–6)',
  items: [
    {
      number: 1,
      question: 'Step 1: Why is Question 1 FALSE regarding forest destruction by insects?',
      questionVi: 'Bước 1: Vì sao câu 1 là FALSE về việc rừng bị côn trùng tàn phá?',
      answer:
        'Paragraph 1 states that insect pests destroy rice crops in paddy fields. It is subsistence farmers who clear the forest to replace lost harvests.',
      answerVi:
        'Đoạn 1 nêu sâu bọ phá hoại lúa trên đồng. Chính nông dân mới là người chặt phá rừng để bù đắp sản lượng mất mát.',
    },
    {
      number: 2,
      question: 'Step 2: Why is Question 2 FALSE regarding insectivorous bats suffering?',
      questionVi: 'Bước 2: Vì sao câu 2 là FALSE về việc dơi ăn côn trùng chịu thiệt hại?',
      answer:
        'Paragraph 1 explicitly notes "not all species are suffering. In fact, some of the island’s insectivorous bats are currently thriving".',
      answerVi:
        'Đoạn 1 viết rõ "không phải tất cả các loài đều chịu thiệt hại. Thực tế một số loài dơi ăn côn trùng đang phát triển rất mạnh (thriving)".',
    },
    {
      number: 3,
      question: 'Step 3: Why is Question 3 NOT GIVEN regarding Rocha’s global studies?',
      questionVi: 'Bước 3: Vì sao câu 3 là NOT GIVEN về nghiên cứu toàn cầu của Rocha?',
      answer:
        'The passage states Rocha is based at Cambridge and studied Madagascar, but contains zero information on whether he has conducted bat studies elsewhere.',
      answerVi:
        'Bài đọc cho biết Rocha làm việc ở Cambridge và nghiên cứu tại Madagascar, hoàn toàn không có thông tin liệu ông có nghiên cứu ở các nước khác hay không.',
    },
    {
      number: 4,
      question: 'Step 4: Why is Question 4 TRUE regarding habitat modification benefits?',
      questionVi: 'Bước 4: Vì sao câu 4 là TRUE về lợi ích từ thay đổi môi trường sống?',
      answer:
        'Paragraph 4 confirms that indigenous bats "are taking advantage of habitat modification to hunt insects swarming above the country’s rice fields", benefiting farmers.',
      answerVi:
        'Đoạn 4 khẳng định dơi bản địa "đang tận dụng sự thay đổi sinh cảnh để săn côn trùng bay trên ruộng lúa", giúp ích cho nông dân.',
    },
    {
      number: 5,
      question: 'Step 5: Why is Question 5 NOT GIVEN regarding mouse-eared bat abundance?',
      questionVi: 'Bước 5: Vì sao câu 5 là NOT GIVEN về mức độ phổ biến của loài dơi tai chuột?',
      answer:
        'Paragraph 4 lists four indigenous bat species, but does not state or rank which one is the most common.',
      answerVi:
        'Đoạn 4 liệt kê tên 4 loài dơi bản địa, nhưng không hề so sánh hay xếp hạng loài nào phổ biến nhất.',
    },
    {
      number: 6,
      question: 'Step 6: Why is Question 6 TRUE regarding caterpillar and webworm prey?',
      questionVi: 'Bước 6: Vì sao câu 6 là TRUE về việc dơi ăn sâu keo và sâu màng cỏ?',
      answer:
        'Paragraph 5 states that six species of bat prey on rice pests, specifically citing "the paddy swarming caterpillar and grass webworm".',
      answerVi:
        'Đoạn 5 nêu 6 loài dơi săn sâu hại lúa, cụ thể nhắc tên "paddy swarming caterpillar và grass webworm".',
    },
  ],
};

export const ACTION_PLAN_TABLE: ActionPlanReminder = {
  taskType: 'table',
  title: 'Action Plan: Table Completion (Questions 7–13)',
  titleVi: 'Kế hoạch hành động: Hoàn thành bảng (Câu 7–13)',
  items: [
    {
      number: 1,
      question: 'Step 1: What is the word limit rule for Questions 7–13?',
      questionVi: 'Bước 1: Giới hạn từ cho các câu 7–13 là gì?',
      answer:
        'Choose ONE WORD ONLY from the passage for each answer. Never include articles, adjectives, or extra nouns.',
      answerVi:
        'Chọn DUY NHẤT MỘT TỪ từ bài đọc. Tuyệt đối không thêm mạo từ, tính từ hay danh từ phụ.',
    },
    {
      number: 2,
      question: 'Step 2: How do you locate the DNA specimen in Q7?',
      questionVi: 'Bước 2: Tìm vật phẩm phân tích ADN ở câu 7 như thế nào?',
      answer:
        'Scan paragraph 7 for "DNA barcoding techniques to analyse". The noun is "droppings". Answer: droppings.',
      answerVi:
        'Quét đoạn 7 tìm "DNA barcoding techniques to analyse". Danh từ đi sau là "droppings". Đáp án: droppings.',
    },
    {
      number: 3,
      question: 'Step 3: How do you identify the crop in Q8?',
      questionVi: 'Bước 3: Xác định loại cây trồng ở câu 8 như thế nào?',
      answer:
        'Paragraph 8 lists crop pests: rice, black twig borer which infests "coffee plants", sugarcane, macadamia, and citrus. The crop name parallel to rice and sugarcane is "coffee".',
      answerVi:
        'Đoạn 8 liệt kê sâu hại cây trồng: lúa, bọ cành đen hại "coffee plants", mía, macadamia và cam quýt. Tên cây trồng là "coffee".',
    },
    {
      number: 4,
      question: 'Step 4: How do you find the disease carrier in Q9?',
      questionVi: 'Bước 4: Tìm sinh vật truyền bệnh ở câu 9 ra sao?',
      answer:
        'Paragraph 10 states bats feed on "mosquitoes – carriers of malaria... as well as blackflies". The answer paired with blackflies is "mosquitoes".',
      answerVi:
        'Đoạn 10 nêu dơi ăn "mosquitoes – truyền bệnh sốt rét... cũng như blackflies". Sinh vật đi cùng blackflies là "mosquitoes".',
    },
    {
      number: 5,
      question: 'Step 5: How do you find the nutrient in Q10?',
      questionVi: 'Bước 5: Tìm chất dinh dưỡng ở câu 10 như thế nào?',
      answer:
        'Paragraph 11 states when food is scarce, bats are a "crucial source of protein for local people". Answer: protein.',
      answerVi:
        'Đoạn 11 viết khi thức ăn khan hiếm, dơi là "crucial source of protein for local people". Đáp án: protein.',
    },
    {
      number: 6,
      question: 'Step 6: How do you locate the building condition in Q11?',
      questionVi: 'Bước 6: Tìm tính từ chỉ tình trạng nhà cửa ở câu 11 ra sao?',
      answer:
        'Paragraph 11 explains bats roost in buildings but are unwelcome because "they make them unclean". Answer: unclean.',
      answerVi:
        'Đoạn 11 giải thích dơi trú trong các tòa nhà nhưng không được chào đón vì "they make them unclean". Đáp án: unclean.',
    },
    {
      number: 7,
      question: 'Step 7: How do you find the cultural aspect in Q12 and recommendation in Q13?',
      questionVi: 'Bước 7: Tìm khía cạnh văn hóa ở câu 12 và khuyến nghị ở câu 13 như thế nào?',
      answer:
        'For Q12, bats are "very significant in the culture of the people" -> "culture". For Q13, farmers can install "bat houses" -> "houses".',
      answerVi:
        'Câu 12: dơi "very significant in the culture of the people" -> "culture". Câu 13: nông dân lắp đặt "bat houses" -> "houses".',
    },
  ],
};

// Aliases for compatibility
export const ACTION_PLAN_FLOW_CHART = ACTION_PLAN_TFNG;
export const ACTION_PLAN_SHORT_ANSWER = ACTION_PLAN_TABLE;

export const TIP_STRIP_PART1: TipStrip = {
  title: 'Exam Tips: Questions 1–6 (True / False / Not Given)',
  questionRange: 'Questions 1–6',
  bullets: [
    'Questions 1–6 follow the chronological order of the text from Paragraph 1 to Paragraph 5.',
    'For Q1: Note who is clearing the forest (farmers) versus what insects are attacking (rice crops) -> FALSE.',
    'For Q2: Paragraph 1 says insectivorous bats are "currently thriving" (doing well), not badly affected -> FALSE.',
    'For Q3: Rocha is based in Cambridge and studied Madagascar, but no other world studies are mentioned -> NOT GIVEN.',
    'For Q4: Indigenous bats take advantage of habitat modification to hunt rice pests -> TRUE.',
    'For Q5: Four bat species are named, but the text never says which is most common -> NOT GIVEN.',
    'For Q6: Bats prey on the paddy swarming caterpillar and grass webworm -> TRUE.',
  ],
  bulletsVi: [
    'Các câu 1–6 đi theo đúng thứ tự thời gian từ Đoạn 1 đến Đoạn 5.',
    'Câu 1: Chú ý ai là người phá rừng (nông dân) và côn trùng đang tấn công thứ gì (cây lúa) -> FALSE.',
    'Câu 2: Đoạn 1 nêu dơi ăn côn trùng đang "thriving" (phát triển mạnh), không phải bị ảnh hưởng xấu -> FALSE.',
    'Câu 3: Rocha làm việc tại Cambridge và nghiên cứu ở Madagascar, không hề nhắc tới nơi khác -> NOT GIVEN.',
    'Câu 4: Dơi bản địa tận dụng sinh cảnh bị thay đổi để săn sâu hại lúa -> TRUE.',
    'Câu 5: Bài liệt kê 4 loài dơi, nhưng không hề so sánh loài nào phổ biến nhất -> NOT GIVEN.',
    'Câu 6: Dơi săn sâu keo và sâu màng cỏ hại lúa -> TRUE.',
  ],
};

export const TIP_STRIP_PART2: TipStrip = {
  title: 'Exam Tips: Questions 7–13 (Table Completion: The study carried out by Rocha’s team)',
  questionRange: 'Questions 7–13',
  bullets: [
    'Strict rubric: Choose ONE WORD ONLY from the passage for each answer.',
    'For Q7: What physical material was analyzed with DNA barcoding? Paragraph 7 says "analyse droppings" -> droppings.',
    'For Q8: Which crop is attacked by the black twig borer alongside rice and sugarcane? Paragraph 8 says "coffee plants" -> coffee.',
    'For Q9: Which harmful insects carry malaria and Rift Valley fever alongside blackflies? Paragraph 10 says "mosquitoes" -> mosquitoes.',
    'For Q10: What nutritional source do bats provide when food is scarce? Paragraph 11 says "source of protein" -> protein.',
    'For Q11: What do bats make buildings when roosting inside? Paragraph 11 says "make them unclean" -> unclean.',
    'For Q12: What local aspect are bats significant in? Paragraph 11 says "significant in the culture" -> culture.',
    'For Q13: What should farmers install to support them? Paragraph 11 says "installing bat houses" -> houses.',
  ],
  bulletsVi: [
    'Quy định nghiêm ngặt: CHỌN DUY NHẤT MỘT TỪ từ bài đọc cho mỗi câu trả lời.',
    'Câu 7: Vật phẩm nào được phân tích mã vạch ADN? Đoạn 7 nêu "analyse droppings" -> droppings.',
    'Câu 8: Cây trồng nào bị bọ cành đen tấn công cùng với lúa và mía? Đoạn 8 nêu "coffee plants" -> coffee.',
    'Câu 9: Côn trùng nào truyền bệnh sốt rét cùng với ruồi đen? Đoạn 10 nêu "mosquitoes" -> mosquitoes.',
    'Câu 10: Nguồn dinh dưỡng nào dơi cung cấp khi thiếu thức ăn? Đoạn 11 nêu "source of protein" -> protein.',
    'Câu 11: Dơi làm các tòa nhà trở nên thế nào khi làm tổ? Đoạn 11 nêu "make them unclean" -> unclean.',
    'Câu 12: Dơi có ý nghĩa lớn trong khía cạnh nào? Đoạn 11 nêu "significant in the culture" -> culture.',
    'Câu 13: Nông dân nên lắp đặt thứ gì để hỗ trợ dơi? Đoạn 11 nêu "installing bat houses" -> houses.',
  ],
};

export const TIP_STRIP_PART3: TipStrip = TIP_STRIP_PART2;

export const PARAGRAPHS: ParagraphData[] = [
  {
    id: 1,
    sectionTitle: 'Deforestation & The Plight of Agriculture',
    text: "There are few places in the world where relations between agriculture and conservation are more strained. Madagascar’s forests are being converted to agricultural land at a rate of one percent every year. Much of this destruction is fuelled by the cultivation of the country’s main staple crop: rice. And a key reason for this destruction is that insect pests are destroying vast quantities of what is grown by local subsistence farmers, leading them to clear forest to create new paddy fields. The result is devastating habitat and biodiversity loss on the island, but not all species are suffering. In fact, some of the island’s insectivorous bats are currently thriving and this has important implications for farmers and conservationists alike.",
  },
  {
    id: 2,
    sectionTitle: "Zoologist Ricardo Rocha's Discovery",
    text: "Enter University of Cambridge zoologist Ricardo Rocha. He’s passionate about conservation, and bats. More specifically, he’s interested in how bats are responding to human activity and deforestation in particular. Rocha’s new study shows that several species of bats are giving Madagascar’s rice farmers a vital pest control service by feasting on plagues of insects. And this, he believes, can ease the financial pressure on farmers to turn forest into fields.",
  },
  {
    id: 3,
    sectionTitle: "Madagascar's Bat Diversity",
    text: "Bats comprise roughly one-fifth of all mammal species in Madagascar and thirty-six recorded bat species are native to the island, making it one of the most important regions for conservation of this animal group anywhere in the world.",
  },
  {
    id: 4,
    sectionTitle: "Indigenous Bats in Rice Fields",
    text: "Co-leading an international team of scientists, Rocha found that several species of indigenous bats are taking advantage of habitat modification to hunt insects swarming above the country’s rice fields. They include the Malagasy mouse-eared bat, Major’s long-fingered bat, the Malagasy white-bellied free-tailed bat and Peters’ wrinkle-lipped bat.",
  },
  {
    id: 5,
    sectionTitle: "Biological Pest Suppressors",
    text: "‘These winner species are providing a valuable free service to Madagascar as biological pest suppressors,’ says Rocha. ‘We found that six species of bat are preying on rice pests, including the paddy swarming caterpillar and grass webworm. The damage which these insects cause puts the island’s farmers under huge financial pressure and that encourages deforestation.’",
  },
  {
    id: 6,
    sectionTitle: "Ranomafana Farmland Study",
    text: "The study, now published in the journal Agriculture, Ecosystems and Environment, set out to investigate the feeding activity of insectivorous bats in the farmland bordering the Ranomafana National Park in the southeast of the country.",
  },
  {
    id: 7,
    sectionTitle: "Ultrasonic Buzzes & DNA Analysis",
    text: "Rocha and his team used state-of-the-art ultrasonic recorders to record over a thousand bat ‘feeding buzzes’ (echolocation sequences used by bats to target their prey) at 54 sites, in order to identify the favourite feeding spots of the bats. They next used DNA barcoding techniques to analyse droppings collected from bats at the different sites.",
  },
  {
    id: 8,
    sectionTitle: "Feeding Preferences Across Crops",
    text: "The recordings revealed that bat activity over rice fields was much higher than it was in continuous forest – seven times higher over rice fields which were on flat ground, and sixteen times higher over fields on the sides of hills – leaving no doubt that the animals are preferentially foraging in these man-made ecosystems. The researchers suggest that the bats favour these fields because lack of water and nutrient run-off make these crops more susceptible to insect pest infestations. DNA analysis showed that all six species of bat had fed on economically important insect pests. While the findings indicated that rice farming benefits most from the bats, the scientists also found indications that the bats were consuming pests of other crops, including the black twig borer (which infests coffee plants), the sugarcane cicada, the macadamia nut-borer, and the sober tabby (a pest of citrus fruits).",
  },
  {
    id: 9,
    sectionTitle: "Global Context & High Stakes",
    text: "‘The effectiveness of bats as pest controllers has already been proven in the USA and Catalonia,’ said co-author James Kemp, from the University of Lisbon. ‘But our study is the first to show this happening in Madagascar, where the stakes for both farmers and conservationists are so high.’",
  },
  {
    id: 10,
    sectionTitle: "Disease Control: Mosquitoes & Blackflies",
    text: "Local people may have a further reason to be grateful to their bats. While the animal is often associated with spreading disease, Rocha and his team found evidence that Malagasy bats feed not just on crop pests but also on mosquitoes – carriers of malaria, Rift Valley fever virus and elephantiasis – as well as blackflies, which spread river blindness.",
  },
  {
    id: 11,
    sectionTitle: "Complex Relationships & Bat Houses",
    text: "Rocha points out that the relationship is complicated. When food is scarce, bats become a crucial source of protein for local people. Even the children will hunt them. And as well as roosting in trees, the bats sometimes roost in buildings, but are not welcomed there because they make them unclean. At the same time, however, they are associated with sacred caves and the ancestors, so they can be viewed as beings between worlds, which makes them very significant in the culture of the people. And one potential problem is that while these bats are benefiting from farming, at the same time deforestation is reducing the places where they can roost, which could have long-term effects on their numbers. Rocha says, ‘With the right help, we hope that farmers can promote this mutually beneficial relationship by installing bat houses.’",
  },
  {
    id: 12,
    sectionTitle: "Promoting Regeneration",
    text: "Rocha and his colleagues believe that maximising bat populations can help to boost crop yields and promote sustainable livelihoods. The team is now calling for further research to quantify this contribution. ‘I’m very optimistic,’ says Rocha. ‘If we give nature a hand, we can speed up the process of regeneration.’",
  },
];

export const QUESTIONS: QuestionItem[] = [
  {
    id: 1,
    questionNumber: 1,
    type: 'true_false_not_given',
    sectionType: 'tfng',
    prompt: 'Many Madagascan forests are being destroyed by attacks from insects.',
    promptVi: 'Nhiều khu rừng ở Madagascar đang bị tàn phá do các cuộc tấn công của côn trùng.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Identify who or what is destroying the forests versus what the insects are destroying in Paragraph 1.',
    tipVi: 'Xác định rõ ai là đối tượng tàn phá rừng và côn trùng thực chất phá hủy thứ gì ở Đoạn 1.',
    advice:
      'Paragraph 1 says: "...insect pests are destroying vast quantities of what is grown by local subsistence farmers, leading them to clear forest to create new paddy fields." It is the farmers clearing forests, not insects attacking the forest.',
    adviceVi:
      'Đoạn 1 nêu: côn trùng phá hoại mùa màng của nông dân, khiến nông dân phải chặt phá rừng để làm thêm ruộng. Nông dân phá rừng chứ không phải côn trùng tấn công rừng.',
    distraction:
      "Do not confuse the agent of deforestation: insects destroy rice crops in paddy fields, which prompts farmers to clear forest.",
    distractionVi:
      'Đừng nhầm lẫn tác nhân phá rừng: côn trùng phá hoại cây lúa, điều này thúc đẩy nông dân đi chặt phá rừng.',
    officialAnswer: 'FALSE',
    acceptedAnswers: ['FALSE', 'F'],
    paragraphRef: 1,
    paragraphQuote:
      'And a key reason for this destruction is that insect pests are destroying vast quantities of what is grown by local subsistence farmers, leading them to clear forest to create new paddy fields.',
    explanation:
      "The correct answer is FALSE: According to the first paragraph of the text, ‘insect pests are destroying’ the rice in farmers’ paddy fields. It is the farmers who are clearing forests to create more fields.",
    explanationVi:
      'FALSE: Theo đoạn đầu tiên của bài đọc, côn trùng sâu bọ đang tàn phá ("destroying") lúa trên ruộng của nông dân. Chính người nông dân mới là người chặt phá rừng để mở thêm ruộng mới.',
  },
  {
    id: 2,
    questionNumber: 2,
    type: 'true_false_not_given',
    sectionType: 'tfng',
    prompt: 'Loss of habitat has badly affected insectivorous bats in Madagascar.',
    promptVi: 'Mất môi trường sống đã ảnh hưởng xấu nghiêm trọng đến các loài dơi ăn côn trùng ở Madagascar.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Look for "habitat loss" and "insectivorous bats" in Paragraph 1. Check if they are suffering or thriving.',
    tipVi: 'Tìm từ "habitat loss" và "insectivorous bats" ở Đoạn 1. Xem chúng đang chịu thiệt hại hay phát triển tốt.',
    advice:
      'Paragraph 1 concludes: "The result is devastating habitat and biodiversity loss on the island, but not all species are suffering. In fact, some of the island’s insectivorous bats are currently thriving...". Thriving contradicts badly affected.',
    adviceVi:
      'Đoạn 1 kết luận: "The result is devastating habitat and biodiversity loss on the island, but not all species are suffering. In fact, some of the island’s insectivorous bats are currently thriving...". Từ thriving (phát triển mạnh) trái ngược với badly affected (bị ảnh hưởng xấu).',
    distraction:
      "Notice the contrast connector 'but not all species are suffering'. 'Thriving' means doing well.",
    distractionVi:
      'Chú ý từ nối đối lập "but not all species are suffering". "Thriving" có nghĩa là phát triển rất tốt.',
    officialAnswer: 'FALSE',
    acceptedAnswers: ['FALSE', 'F'],
    paragraphRef: 1,
    paragraphQuote:
      'The result is devastating habitat and biodiversity loss on the island, but not all species are suffering. In fact, some of the island’s insectivorous bats are currently thriving...',
    explanation:
      "The correct answer is FALSE: The first paragraph says that ‘not all species are suffering. In fact, some of the island’s insectivorous bats are currently thriving [doing well]’.",
    explanationVi:
      'FALSE: Đoạn 1 khẳng định "không phải tất cả các loài đều chịu thiệt hại. Thực tế, một số loài dơi ăn côn trùng của hòn đảo hiện đang phát triển mạnh mẽ [sinh sôi tốt]".',
  },
  {
    id: 3,
    questionNumber: 3,
    type: 'true_false_not_given',
    sectionType: 'tfng',
    prompt: 'Ricardo Rocha has carried out studies of bats in different parts of the world.',
    promptVi: 'Ricardo Rocha đã tiến hành các nghiên cứu về loài dơi ở nhiều nơi khác nhau trên thế giới.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Check if the text states that Rocha conducted bat studies in other countries.',
    tipVi: 'Kiểm tra xem bài đọc có nói Rocha đã thực hiện nghiên cứu dơi ở các quốc gia khác hay không.',
    advice:
      'Paragraph 2 mentions Rocha is a University of Cambridge zoologist who carried out a study in Madagascar. Paragraph 9 cites bat effectiveness in the USA and Catalonia, but that was mentioned by co-author James Kemp from Lisbon, not Rocha.',
    adviceVi:
      'Đoạn 2 nhắc tới Rocha là nhà động vật học Đại học Cambridge thực hiện nghiên cứu ở Madagascar. Đoạn 9 nói đến hiệu quả ở Mỹ và Catalonia nhưng do đồng tác giả James Kemp trích dẫn, không phải nghiên cứu của Rocha.',
    distraction:
      "Do not assume a Cambridge researcher must have studied in multiple countries. There is no statement verifying this.",
    distractionVi:
      'Đừng tự suy diễn nhà nghiên cứu Đại học Cambridge thì chắc chắn đã nghiên cứu ở nhiều nước. Bài đọc không hề có thông tin này.',
    officialAnswer: 'NOT GIVEN',
    acceptedAnswers: ['NOT GIVEN', 'NG'],
    paragraphRef: 2,
    paragraphQuote:
      'Enter University of Cambridge zoologist Ricardo Rocha. He’s passionate about conservation, and bats... Rocha’s new study shows that several species of bats are giving Madagascar’s rice farmers a vital pest control service...',
    explanation:
      "The correct answer is NOT GIVEN: The text says that Rocha is based in Cambridge, and has carried out a study in Madagascar, but we are not told whether or not he is also studying bats in other parts of the world.",
    explanationVi:
      'NOT GIVEN: Bài đọc nêu Rocha làm việc tại Cambridge và thực hiện nghiên cứu ở Madagascar, nhưng không hề cho biết liệu ông có đang hoặc đã nghiên cứu loài dơi ở các nơi khác trên thế giới hay không.',
  },
  {
    id: 4,
    questionNumber: 4,
    type: 'true_false_not_given',
    sectionType: 'tfng',
    prompt: 'Habitat modification has resulted in indigenous bats in Madagascar becoming useful to farmers.',
    promptVi: 'Sự thay đổi sinh cảnh đã khiến các loài dơi bản địa ở Madagascar trở nên hữu ích cho người nông dân.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Scan Paragraph 4 for "habitat modification" and "indigenous bats".',
    tipVi: 'Quét Đoạn 4 tìm cụm "habitat modification" và "indigenous bats".',
    advice:
      'Paragraph 4 states that "several species of indigenous bats are taking advantage of habitat modification to hunt insects swarming above the country’s rice fields". By hunting the rice insect pests, they provide a valuable pest suppression service to farmers.',
    adviceVi:
      'Đoạn 4 nêu "nhiều loài dơi bản địa đang tận dụng sự biến đổi sinh cảnh để săn bắt côn trùng bay trên ruộng lúa". Bằng cách săn sâu hại lúa, chúng mang lại dịch vụ diệt trừ sâu bệnh quý báu cho nông dân.',
    distraction:
      "Notice the logical link: habitat modification created rice fields, bats hunt swarming insects above them, which saves farmers' crops.",
    distractionVi:
      'Chú ý chuỗi logic: biến đổi sinh cảnh tạo ra ruộng lúa, dơi săn côn trùng bay trên ruộng, từ đó bảo vệ mùa màng cho nông dân.',
    officialAnswer: 'TRUE',
    acceptedAnswers: ['TRUE', 'T'],
    paragraphRef: 4,
    paragraphQuote:
      'Co-leading an international team of scientists, Rocha found that several species of indigenous bats are taking advantage of habitat modification to hunt insects swarming above the country’s rice fields.',
    explanation:
      "The correct answer is TRUE: The fourth paragraph says that ‘several species of indigenous bats are taking advantage of habitat modification to hunt insects swarming above the country’s rice fields’. By hunting the insects, they are useful to farmers.",
    explanationVi:
      'TRUE: Đoạn thứ tư nêu rằng "nhiều loài dơi bản địa đang tận dụng sự thay đổi sinh cảnh để săn bắt các đàn côn trùng bay trên ruộng lúa của đất nước". Qua việc săn côn trùng, chúng trở nên hữu ích cho nông dân.',
  },
  {
    id: 5,
    questionNumber: 5,
    type: 'true_false_not_given',
    sectionType: 'tfng',
    prompt: 'The Malagasy mouse-eared bat is more common than other indigenous bat species in Madagascar.',
    promptVi: 'Loài dơi tai chuột Malagasy phổ biến hơn các loài dơi bản địa khác ở Madagascar.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Look at Paragraph 4 where four indigenous species are named. Does the text state which one is most common?',
    tipVi: 'Xem Đoạn 4 nơi 4 loài bản địa được gọi tên. Bài đọc có so sánh loài nào phổ biến hơn không?',
    advice:
      'Paragraph 4 simply lists four species: "They include the Malagasy mouse-eared bat, Major’s long-fingered bat, the Malagasy white-bellied free-tailed bat and Peters’ wrinkle-lipped bat." No comparative frequency or population size is mentioned.',
    adviceVi:
      'Đoạn 4 chỉ đơn thuần liệt kê 4 loài dơi. Hoàn toàn không có dữ kiện so sánh về số lượng hay tần suất xuất hiện.',
    distraction:
      "Do not confuse being listed first in a series with being the most common.",
    distractionVi:
      'Đừng nhầm lẫn việc được nêu tên đầu tiên trong danh sách là loài phổ biến nhất.',
    officialAnswer: 'NOT GIVEN',
    acceptedAnswers: ['NOT GIVEN', 'NG'],
    paragraphRef: 4,
    paragraphQuote:
      'They include the Malagasy mouse-eared bat, Major’s long-fingered bat, the Malagasy white-bellied free-tailed bat and Peters’ wrinkle-lipped bat.',
    explanation:
      "The correct answer is NOT GIVEN: The text names four species of bats that are indigenous to Madagascar, but does not say which of these is most common.",
    explanationVi:
      'NOT GIVEN: Bài đọc nêu tên bốn loài dơi bản địa ở Madagascar, nhưng hoàn toàn không nói loài nào trong số này là phổ biến hơn hay phổ biến nhất.',
  },
  {
    id: 6,
    questionNumber: 6,
    type: 'true_false_not_given',
    sectionType: 'tfng',
    prompt: 'Bats may feed on paddy swarming caterpillars and grass webworms.',
    promptVi: 'Dơi có thể ăn sâu keo hại lúa và sâu cuốn lá/màng cỏ.',
    instruction: 'Write TRUE, FALSE, or NOT GIVEN.',
    tip: 'Check Paragraph 5 for the exact pests that bats prey on.',
    tipVi: 'Kiểm tra Đoạn 5 để xem chính xác các loài sâu hại mà dơi săn mồi.',
    advice:
      'Paragraph 5 quotes Rocha: "We found that six species of bat are preying on rice pests, including the paddy swarming caterpillar and grass webworm." Preying on means feeding on.',
    adviceVi:
      'Đoạn 5 trích lời Rocha: "Chúng tôi phát hiện 6 loài dơi đang săn bắt sâu hại lúa, bao gồm sâu keo hại lúa (paddy swarming caterpillar) và sâu màng cỏ (grass webworm)". Preying on đồng nghĩa với feeding on.',
    distraction:
      "Note that 'preying on' is an exact synonym for 'feeding on'.",
    distractionVi:
      'Lưu ý "preying on" là từ đồng nghĩa hoàn toàn với "feeding on".',
    officialAnswer: 'TRUE',
    acceptedAnswers: ['TRUE', 'T'],
    paragraphRef: 5,
    paragraphQuote:
      '‘We found that six species of bat are preying on rice pests, including the paddy swarming caterpillar and grass webworm.’',
    explanation:
      "The correct answer is TRUE: The text says that ‘bats are preying (feeding) on rice pests’ and gives examples of two of these pests, ‘the paddy swarming caterpillar and grass webworm’.",
    explanationVi:
      'TRUE: Bài đọc nêu rõ "dơi đang săn bắt (ăn) các loài sâu hại lúa" và đưa ra ví dụ về hai loài sâu này là "paddy swarming caterpillar và grass webworm".',
  },
  {
    id: 7,
    questionNumber: 7,
    type: 'short_answer',
    sectionType: 'table',
    tableCategory: 'Method',
    prompt: 'Method: DNA analysis of bat 7 ..............................',
    promptVi: 'Phương pháp: Phân tích ADN từ ... của dơi',
    instruction: 'Choose ONE WORD ONLY from the passage for each answer.',
    maxWords: 1,
    tip: 'Look for "DNA" and "analyse" in Paragraph 7. Identify the single noun describing what was collected from bats.',
    tipVi: 'Tìm từ "DNA" và "analyse" ở Đoạn 7. Xác định danh từ đơn chỉ thứ thu thập từ dơi.',
    advice:
      'Paragraph 7 says: "They next used DNA barcoding techniques to analyse droppings collected from bats at the different sites." The single word needed is "droppings".',
    adviceVi:
      'Đoạn 7 nêu: "They next used DNA barcoding techniques to analyse droppings collected from bats at the different sites." Từ duy nhất cần điền là "droppings".',
    distraction:
      "Writing 'bat droppings' will receive zero marks because the rubric strictly requires ONE WORD ONLY and 'bat' is already in the prompt.",
    distractionVi:
      'Viết "bat droppings" sẽ bị 0 điểm vì yêu cầu CHỌN DUY NHẤT MỘT TỪ và từ "bat" đã có sẵn trong câu hỏi.',
    officialAnswer: 'droppings',
    acceptedAnswers: ['droppings'],
    paragraphRef: 7,
    paragraphQuote:
      'They next used DNA barcoding techniques to analyse droppings collected from bats at the different sites.',
    explanation:
      "The correct answer is ‘droppings’: In the seventh paragraph, the text says that Rocha and his team used ‘DNA barcoding techniques to analyse droppings collected from bats’.",
    explanationVi:
      'Đáp án đúng là ‘droppings’: Ở đoạn thứ bảy, bài đọc viết nhóm của Rocha đã sử dụng "kỹ thuật mã vạch ADN để phân tích phân thu thập từ dơi" (‘DNA barcoding techniques to analyse droppings collected from bats’).',
  },
  {
    id: 8,
    questionNumber: 8,
    type: 'short_answer',
    sectionType: 'table',
    tableCategory: 'Findings',
    prompt: 'Findings: the bats ate pests of rice, 8 .............................., sugarcane, nuts and fruit',
    promptVi: 'Kết quả: dơi ăn sâu hại lúa, ..., mía, các loại hạt và hoa quả',
    instruction: 'Choose ONE WORD ONLY from the passage for each answer.',
    maxWords: 1,
    tip: 'Scan Paragraph 8 for crops mentioned alongside rice, sugarcane, nuts, and fruit.',
    tipVi: 'Quét Đoạn 8 tìm các loại cây trồng được nhắc đến cùng với lúa, mía, hạt và hoa quả.',
    advice:
      'Paragraph 8 lists: "...consuming pests of other crops, including the black twig borer (which infests coffee plants), the sugarcane cicada, the macadamia nut-borer, and the sober tabby (a pest of citrus fruits)." The crop name is "coffee".',
    adviceVi:
      'Đoạn 8 liệt kê: ăn sâu hại của các cây trồng khác gồm bọ cành đen (hại cây cà phê - coffee plants), ve sầu mía (sugarcane), sâu đục hạt macadamia (nuts), và bướm sober tabby (hại cam quýt - fruit). Cây trồng còn thiếu là "coffee".',
    distraction:
      "Write 'coffee', not 'coffee plants'. The instruction specifies ONE WORD ONLY.",
    distractionVi:
      'Viết "coffee", không viết "coffee plants". Yêu cầu đề bài là DUY NHẤT MỘT TỪ.',
    officialAnswer: 'coffee',
    acceptedAnswers: ['coffee'],
    paragraphRef: 8,
    paragraphQuote:
      '...the scientists also found indications that the bats were consuming pests of other crops, including the black twig borer (which infests coffee plants), the sugarcane cicada, the macadamia nut-borer, and the sober tabby (a pest of citrus fruits).',
    explanation:
      "The correct answer is ‘coffee’: At the end of the eighth paragraph, the writer lists several pests that the bats feed on, together with the crops affected by these pests. The next crop mentioned after rice is coffee, which is preyed on by the black twig borer.",
    explanationVi:
      'Đáp án đúng là ‘coffee’: Ở cuối đoạn 8, tác giả liệt kê một số loài sâu bệnh mà dơi ăn cùng với các cây trồng bị ảnh hưởng. Cây trồng được nhắc đến ngay sau lúa là cà phê (coffee), bị loài bọ cành đen phá hoại.',
  },
  {
    id: 9,
    questionNumber: 9,
    type: 'short_answer',
    sectionType: 'table',
    tableCategory: 'Findings',
    prompt: 'Findings: prevent the spread of disease by eating 9 .............................. and blackflies',
    promptVi: 'Kết quả: ngăn chặn lây lan dịch bệnh bằng việc ăn ... và ruồi đen',
    instruction: 'Choose ONE WORD ONLY from the passage for each answer.',
    maxWords: 1,
    tip: 'Look at Paragraph 10 for disease-transmitting insects paired with blackflies.',
    tipVi: 'Xem Đoạn 10 để tìm côn trùng truyền bệnh đi đôi với ruồi đen (blackflies).',
    advice:
      'Paragraph 10 states: "...Malagasy bats feed not just on crop pests but also on mosquitoes – carriers of malaria, Rift Valley fever virus and elephantiasis – as well as blackflies, which spread river blindness." The answer is "mosquitoes".',
    adviceVi:
      'Đoạn 10 nêu: dơi Malagasy không chỉ ăn sâu hại mùa màng mà còn ăn muỗi (mosquitoes) - vật truyền sốt rét... cũng như ruồi đen (blackflies). Đáp án là "mosquitoes".',
    distraction:
      "Copy the exact plural spelling 'mosquitoes' from the text.",
    distractionVi:
      'Sao chép đúng dạng số nhiều "mosquitoes" từ văn bản.',
    officialAnswer: 'mosquitoes',
    acceptedAnswers: ['mosquitoes', 'mosquitos'],
    paragraphRef: 10,
    paragraphQuote:
      '...Malagasy bats feed not just on crop pests but also on mosquitoes – carriers of malaria, Rift Valley fever virus and elephantiasis – as well as blackflies, which spread river blindness.',
    explanation:
      "The correct answer is ‘mosquitoes’: The text says that as well as eating crop pests, the bats eat other harmful insects – mosquitoes and blackflies.",
    explanationVi:
      'Đáp án đúng là ‘mosquitoes’: Bài đọc nêu bên cạnh việc ăn sâu bệnh hại cây trồng, dơi còn ăn các côn trùng có hại khác – muỗi (mosquitoes) và ruồi đen (blackflies).',
  },
  {
    id: 10,
    questionNumber: 10,
    type: 'short_answer',
    sectionType: 'table',
    tableCategory: 'Findings',
    prompt: 'Findings (local attitudes to bats are mixed): they provide food rich in 10 ..............................',
    promptVi: 'Kết quả (thái độ người dân khá trái chiều): dơi cung cấp nguồn thực phẩm giàu ...',
    instruction: 'Choose ONE WORD ONLY from the passage for each answer.',
    maxWords: 1,
    tip: 'Find what nutrient bats provide in Paragraph 11 when food is scarce.',
    tipVi: 'Tìm xem dơi cung cấp chất dinh dưỡng gì ở Đoạn 11 khi khan hiếm thức ăn.',
    advice:
      'Paragraph 11 says: "When food is scarce, bats become a crucial source of protein for local people." Food rich in protein matches "source of protein". Write "protein".',
    adviceVi:
      'Đoạn 11 nêu: "When food is scarce, bats become a crucial source of protein for local people." Cụm "food rich in protein" tương ứng với "source of protein". Điền "protein".',
    distraction:
      "Write 'protein', not 'food' or 'source'.",
    distractionVi:
      'Điền từ "protein", không điền "food" hay "source".',
    officialAnswer: 'protein',
    acceptedAnswers: ['protein'],
    paragraphRef: 11,
    paragraphQuote:
      'When food is scarce, bats become a crucial source of protein for local people. Even the children will hunt them.',
    explanation:
      "The correct answer is ‘protein’: The text says that bats may be a ‘crucial source of protein for local people’.",
    explanationVi:
      'Đáp án đúng là ‘protein’: Bài đọc cho biết dơi có thể là "nguồn protein thiết yếu cho người dân địa phương" (‘crucial source of protein for local people’).',
  },
  {
    id: 11,
    questionNumber: 11,
    type: 'short_answer',
    sectionType: 'table',
    tableCategory: 'Findings',
    prompt: 'Findings (local attitudes to bats are mixed): the buildings where they roost become 11 ..............................',
    promptVi: 'Kết quả (thái độ người dân khá trái chiều): những tòa nhà nơi chúng trú ngụ trở nên ...',
    instruction: 'Choose ONE WORD ONLY from the passage for each answer.',
    maxWords: 1,
    tip: 'Find the adjective in Paragraph 11 describing the condition of buildings where bats roost.',
    tipVi: 'Tìm tính từ ở Đoạn 11 miêu tả tình trạng các tòa nhà nơi dơi làm tổ/trú ngụ.',
    advice:
      'Paragraph 11 states: "...the bats sometimes roost in buildings, but are not welcomed there because they make them unclean." "Make them unclean" means the buildings become "unclean".',
    adviceVi:
      'Đoạn 11 nêu: "...the bats sometimes roost in buildings, but are not welcomed there because they make them unclean." Cụm "make them unclean" tương đương với việc các tòa nhà trở nên "unclean".',
    distraction:
      "Copy the exact adjective 'unclean' from the text.",
    distractionVi:
      'Sao chép chính xác tính từ "unclean" từ bài đọc.',
    officialAnswer: 'unclean',
    acceptedAnswers: ['unclean'],
    paragraphRef: 11,
    paragraphQuote:
      'And as well as roosting in trees, the bats sometimes roost in buildings, but are not welcomed there because they make them unclean.',
    explanation:
      "The correct answer is ‘unclean’: When the bats roost (shelter) in buildings, they are not welcomed by local people ‘because they make [the buildings] unclean’.",
    explanationVi:
      'Đáp án đúng là ‘unclean’: Khi dơi trú ngụ trong các công trình nhà cửa, chúng không được người dân chào đón "bởi vì chúng làm [các tòa nhà] bị ô uế, bẩn thỉu" (‘because they make [the buildings] unclean’).',
  },
  {
    id: 12,
    questionNumber: 12,
    type: 'short_answer',
    sectionType: 'table',
    tableCategory: 'Findings',
    prompt: 'Findings (local attitudes to bats are mixed): they play an important role in local 12 ..............................',
    promptVi: 'Kết quả (thái độ người dân khá trái chiều): chúng đóng vai trò quan trọng trong ... địa phương',
    instruction: 'Choose ONE WORD ONLY from the passage for each answer.',
    maxWords: 1,
    tip: 'Look for "sacred caves and the ancestors" in Paragraph 11. What domain are bats very significant in?',
    tipVi: 'Tìm cụm "sacred caves and the ancestors" ở Đoạn 11. Dơi có ý nghĩa rất lớn trong lĩnh vực gì?',
    advice:
      'Paragraph 11 says: "...associated with sacred caves and the ancestors, so they can be viewed as beings between worlds, which makes them very significant in the culture of the people." "Play an important role in" matches "very significant in". Answer: "culture".',
    adviceVi:
      'Đoạn 11 nêu: gắn liền với các hang động linh thiêng và tổ tiên, khiến chúng "very significant in the culture of the people". "Play an important role in" tương đương "very significant in". Đáp án là "culture".',
    distraction:
      "Do not write 'ancestors' or 'caves'. The noun answering 'in local ...' is 'culture'.",
    distractionVi:
      'Không viết "ancestors" hay "caves". Danh từ đi sau "in local ..." là "culture".',
    officialAnswer: 'culture',
    acceptedAnswers: ['culture'],
    paragraphRef: 11,
    paragraphQuote:
      'At the same time, however, they are associated with sacred caves and the ancestors, so they can be viewed as beings between worlds, which makes them very significant in the culture of the people.',
    explanation:
      "The correct answer is ‘culture’: Because they are ‘associated with sacred caves and the ancestors’, the bats are ‘very significant in the culture of the people’.",
    explanationVi:
      'Đáp án đúng là ‘culture’: Vì chúng "gắn liền với các hang động thiêng và tổ tiên", loài dơi "có ý nghĩa rất lớn trong văn hóa của người dân" (‘very significant in the culture of the people’).',
  },
  {
    id: 13,
    questionNumber: 13,
    type: 'short_answer',
    sectionType: 'table',
    tableCategory: 'Recommendation',
    prompt: 'Recommendation: farmers should provide special 13 .............................. to support the bat population',
    promptVi: 'Khuyến nghị: nông dân nên cung cấp những ... đặc biệt để hỗ trợ quần thể dơi',
    instruction: 'Choose ONE WORD ONLY from the passage for each answer.',
    maxWords: 1,
    tip: 'Look at Rocha\'s recommendation at the end of Paragraph 11. What can farmers install?',
    tipVi: 'Xem khuyến nghị của Rocha ở cuối Đoạn 11. Nông dân có thể lắp đặt thứ gì?',
    advice:
      'Paragraph 11 concludes: "Rocha says, ‘With the right help, we hope that farmers can promote this mutually beneficial relationship by installing bat houses.’" The prompt already says "special ... to support the bat population", so the single word is "houses".',
    adviceVi:
      'Đoạn 11 kết luận: "Rocha hy vọng nông dân có thể thúc đẩy mối quan hệ này bằng cách installing bat houses." Đề bài đã có "special ... to support the bat population", nên từ đơn cần điền là "houses".',
    distraction:
      "Writing 'bat houses' violates the ONE WORD ONLY restriction. Write only 'houses'.",
    distractionVi:
      'Viết "bat houses" sẽ vi phạm giới hạn 1 từ. Chỉ điền "houses".',
    officialAnswer: 'houses',
    acceptedAnswers: ['houses'],
    paragraphRef: 11,
    paragraphQuote:
      'Rocha says, ‘With the right help, we hope that farmers can promote this mutually beneficial relationship by installing bat houses.’',
    explanation:
      "The correct answer is ‘houses’: Rocha hopes that farmers can install ‘bat houses’.",
    explanationVi:
      'Đáp án đúng là ‘houses’: Rocha hy vọng rằng người nông dân có thể lắp đặt các ngôi nhà cho dơi (‘bat houses’). Do đề bài yêu cầu 1 từ và đã có sẵn ngữ cảnh, đáp án là "houses".',
  },
];

export function calculateEstimatedBandScore(score: number): { band: string; description: string } {
  if (score >= 13) return { band: '9.0', description: 'Expert User — Fluent, accurate, and complete understanding.' };
  if (score === 12) return { band: '8.5', description: 'Very Good User — Operational command with rare inaccuracies.' };
  if (score === 11) return { band: '8.0', description: 'Very Good User — Complex detailed argumentation handled well.' };
  if (score === 10) return { band: '7.5', description: 'Good User — Operational command, handles complex language well.' };
  if (score === 9) return { band: '7.0', description: 'Good User — Generally effective command, minor inaccuracies.' };
  if (score === 8) return { band: '6.5', description: 'Competent User — Generally effective command in familiar situations.' };
  if (score === 7) return { band: '6.0', description: 'Competent User — Understands reasonably well, some errors.' };
  if (score >= 5) return { band: '5.5', description: 'Modest User — Partial command, handles basic meaning.' };
  if (score >= 3) return { band: '5.0', description: 'Modest User — Many mistakes, basic competence only.' };
  return { band: '4.5', description: 'Limited User — Basic command, struggles with complex structures.' };
}

export function checkAnswerCorrectness(question: QuestionItem, rawUserAnswer: string): boolean {
  if (!rawUserAnswer) return false;
  const cleaned = rawUserAnswer.trim().toLowerCase();

  if (question.type === 'true_false_not_given') {
    const isTrue = cleaned === 'true' || cleaned === 't';
    const isFalse = cleaned === 'false' || cleaned === 'f';
    const isNotGiven = cleaned === 'not given' || cleaned === 'ng' || cleaned === 'notgiven';

    if (question.officialAnswer === 'TRUE') return isTrue;
    if (question.officialAnswer === 'FALSE') return isFalse;
    if (question.officialAnswer === 'NOT GIVEN') return isNotGiven;
    return false;
  }

  // Short answer / Table Completion (Choose ONE WORD ONLY)
  const normalizedCleaned = cleaned
    .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return question.acceptedAnswers.some((accepted) => {
    const normAccepted = accepted
      .toLowerCase()
      .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    if (normalizedCleaned === normAccepted) return true;

    // Flexible checks for single word variants
    if (normAccepted === 'droppings' && (normalizedCleaned === 'droppings' || normalizedCleaned === 'dropping')) {
      return true;
    }
    if (normAccepted === 'coffee' && (normalizedCleaned === 'coffee' || normalizedCleaned === 'coffee plants')) {
      return normalizedCleaned === 'coffee';
    }
    if (normAccepted === 'mosquitoes' && (normalizedCleaned === 'mosquitoes' || normalizedCleaned === 'mosquitos')) {
      return true;
    }
    if (normAccepted === 'protein' && normalizedCleaned === 'protein') {
      return true;
    }
    if (normAccepted === 'unclean' && (normalizedCleaned === 'unclean' || normalizedCleaned === 'dirty')) {
      return normalizedCleaned === 'unclean';
    }
    if (normAccepted === 'culture' && normalizedCleaned === 'culture') {
      return true;
    }
    if (normAccepted === 'houses' && (normalizedCleaned === 'houses' || normalizedCleaned === 'house')) {
      return true;
    }

    return false;
  });
}
