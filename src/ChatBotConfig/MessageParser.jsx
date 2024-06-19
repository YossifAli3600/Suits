
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    message = message.toLowerCase();
    console.log(message);

    if (
      message.includes("kill") || message.includes("قتل") ||
      message.includes("theft") || message.includes("سرقة") ||
      message.includes("robbery") || message.includes("سطو") ||
      message.includes("assault") || message.includes("اعتداء") ||
      message.includes("fraud") || message.includes("احتيال") ||
      message.includes("arson") || message.includes("حرق عمد") ||
      message.includes("burglary") || message.includes("سرقة منزل") ||
      message.includes("embezzlement") || message.includes("اختلاس") ||
      message.includes("trespassing") || message.includes("تعدي") ||
      message.includes("vandalism") || message.includes("تخريب") ||
      message.includes("larceny") || message.includes("سرقة") ||
      message.includes("manslaughter") || message.includes("قتل غير عمد") ||
      message.includes("kidnapping") || message.includes("خطف") ||
      message.includes("extortion") || message.includes("ابتزاز") ||
      message.includes("forgery") || message.includes("تزوير") ||
      message.includes("conspiracy") || message.includes("مؤامرة") ||
      message.includes("drug trafficking") || message.includes("تهريب مخدرات") ||
      message.includes("money laundering") || message.includes("غسيل أموال") ||
      message.includes("criminal defense") || message.includes("الدفاع الجنائي") ||
      message.includes("felony") || message.includes("جناية") ||
      message.includes("misdemeanor") || message.includes("جنحة") ||
      message.includes("arrest") || message.includes("اعتقال") ||
      message.includes("bail") || message.includes("كفالة") ||
      message.includes("trial") || message.includes("محاكمة") ||
      message.includes("plea bargain") || message.includes("صفقة إقرار") ||
      message.includes("prosecution") || message.includes("الادعاء") ||
      message.includes("defendant") || message.includes("مدعى عليه") ||
      message.includes("public defender") || message.includes("محامي الدفاع العام") ||
      message.includes("criminal record") || message.includes("سجل جنائي") ||
      message.includes("probation") || message.includes("مراقبة") ||
      message.includes("parole") || message.includes("إطلاق سراح مشروط") ||
      message.includes("sentence") || message.includes("حكم") ||
      message.includes("appeal") || message.includes("استئناف") ||
      message.includes("juvenile crime") || message.includes("جريمة الأحداث") ||
      message.includes("drug offense") || message.includes("جريمة مخدرات") ||
      message.includes("white collar crime") || message.includes("جريمة ذوي الياقات البيضاء") ||
      message.includes("violent crime") || message.includes("جريمة عنف") ||
      message.includes("theft") || message.includes("سرقة") ||
      message.includes("DUI") || message.includes("القيادة تحت تأثير الكحول")
    ) {
      return this.actionProvider.handleCriminal({ withAvatar: true });
    }

    if (
      message.includes("contract") || message.includes("عقد") ||
      message.includes("merger") || message.includes("اندماج") ||
      message.includes("acquisition") || message.includes("استحواذ") ||
      message.includes("intellectual property") || message.includes("الملكية الفكرية") ||
      message.includes("patent") || message.includes("براءة اختراع") ||
      message.includes("trademark") || message.includes("علامة تجارية") ||
      message.includes("litigation") || message.includes("تقاضي") ||
      message.includes("arbitration") || message.includes("تحكيم") ||
      message.includes("compliance") || message.includes("الامتثال") ||
      message.includes("incorporation") || message.includes("تأسيس شركة") ||
      message.includes("employment law") || message.includes("قانون العمل") ||
      message.includes("tax law") || message.includes("قانون الضرائب") ||
      message.includes("shareholder agreement") || message.includes("اتفاقية المساهمين") ||
      message.includes("commercial law") || message.includes("القانون التجاري") ||
      message.includes("corporate governance") || message.includes("حوكمة الشركات") ||
      message.includes("business formation") || message.includes("تشكيل الأعمال") ||
      message.includes("securities law") || message.includes("قانون الأوراق المالية") ||
      message.includes("antitrust law") || message.includes("قانون مكافحة الاحتكار") ||
      message.includes("franchise law") || message.includes("قانون الامتياز التجاري") ||
      message.includes("joint venture") || message.includes("مشروع مشترك") ||
      message.includes("partnership agreement") || message.includes("اتفاقية الشراكة") ||
      message.includes("business dispute") || message.includes("نزاع تجاري") ||
      message.includes("trade secret") || message.includes("سر تجاري") ||
      message.includes("licensing agreement") || message.includes("اتفاقية الترخيص") ||
      message.includes("commercial lease") || message.includes("عقد الإيجار التجاري") ||
      message.includes("due diligence") || message.includes("العناية الواجبة") ||
      message.includes("regulatory compliance") || message.includes("الامتثال التنظيمي") ||
      message.includes("non-compete agreement") || message.includes("اتفاقية عدم المنافسة") ||
      message.includes("confidentiality agreement") || message.includes("اتفاقية السرية") ||
      message.includes("business insurance") || message.includes("تأمين الأعمال") ||
      message.includes("international trade law") || message.includes("قانون التجارة الدولية") ||
      message.includes("commercial arbitration") || message.includes("التحكيم التجاري") ||
      message.includes("business fraud") || message.includes("احتيال الأعمال") ||
      message.includes("consumer protection") || message.includes("حماية المستهلك") ||
      message.includes("business litigation") || message.includes("التقاضي التجاري") ||
      message.includes("negotiation") || message.includes("التفاوض") ||
      message.includes("investment law") || message.includes("قانون الاستثمار") ||
      message.includes("corporate finance") || message.includes("تمويل الشركات") ||
      message.includes("director's liability") || message.includes("مسؤولية المدير") ||
      message.includes("business contract") || message.includes("عقد العمل") ||
      message.includes("cross-border transaction") || message.includes("معاملة عبر الحدود") ||
      message.includes("business valuation") || message.includes("تقييم الأعمال") ||
      message.includes("commercial transaction") || message.includes("معاملة تجارية")
    ) {
      return this.actionProvider.handleBusinessLaw({ withAvatar: true });
    }

    if (
      message.includes("bankruptcy") || message.includes("إفلاس") ||
      message.includes("insolvency") || message.includes("إعسار") ||
      message.includes("chapter 7") || message.includes("الفصل 7") ||
      message.includes("chapter 11") || message.includes("الفصل 11") ||
      message.includes("chapter 13") || message.includes("الفصل 13") ||
      message.includes("debtor") || message.includes("مدين") ||
      message.includes("creditor") || message.includes("دائن") ||
      message.includes("bankruptcy filing") || message.includes("تقديم الإفلاس") ||
      message.includes("bankruptcy petition") || message.includes("عريضة الإفلاس") ||
      message.includes("automatic stay") || message.includes("التوقف التلقائي") ||
      message.includes("discharge of debt") || message.includes("إبراء الدين") ||
      message.includes("reorganization") || message.includes("إعادة التنظيم") ||
      message.includes("liquidation") || message.includes("تصفية") ||
      message.includes("bankruptcy court") || message.includes("محكمة الإفلاس") ||
      message.includes("bankruptcy trustee") || message.includes("وصي الإفلاس") ||
      message.includes("bankruptcy code") || message.includes("قانون الإفلاس") ||
      message.includes("means test") || message.includes("اختبار الوسائل") ||
      message.includes("proof of claim") || message.includes("إثبات الدعوى") ||
      message.includes("secured debt") || message.includes("الدين المضمون") ||
      message.includes("unsecured debt") || message.includes("الدين غير المضمون") ||
      message.includes("reaffirmation agreement") || message.includes("اتفاقية إعادة التأكيد") ||
      message.includes("exempt property") || message.includes("ملكية معفاة") ||
      message.includes("non-exempt property") || message.includes("ملكية غير معفاة") ||
      message.includes("bankruptcy discharge") || message.includes("إبراء الإفلاس") ||
      message.includes("restructuring") || message.includes("إعادة الهيكلة") ||
      message.includes("debt relief") || message.includes("تخفيف الديون") ||
      message.includes("foreclosure") || message.includes("حجز") ||
      message.includes("repossession") || message.includes("استعادة الملكية") ||
      message.includes("wage garnishment") || message.includes("حجز الأجور") ||
      message.includes("debt settlement") || message.includes("تسوية الديون") ||
      message.includes("credit counseling") || message.includes("استشارات الائتمان") ||
      message.includes("business bankruptcy") || message.includes("إفلاس الأعمال") ||
      message.includes("personal bankruptcy") || message.includes("إفلاس شخصي") ||
      message.includes("bankruptcy fraud") || message.includes("احتيال الإفلاس") ||
      message.includes("financial distress") || message.includes("ضائقة مالية") ||
      message.includes("debt restructuring") || message.includes("إعادة هيكلة الديون") ||
      message.includes("insolvency proceedings") || message.includes("إجراءات الإعسار") ||
      message.includes("bankruptcy lawyer") || message.includes("محامي الإفلاس") ||
      message.includes("debt collection") || message.includes("تحصيل الديون") ||
      message.includes("debt consolidation") || message.includes("دمج الديون") ||
      message.includes("pre-bankruptcy planning") || message.includes("التخطيط قبل الإفلاس") ||
      message.includes("bankruptcy exemptions") || message.includes("إعفاءات الإفلاس") ||
      message.includes("priority debt") || message.includes("الدين ذو الأولوية") ||
      message.includes("bankruptcy estate") || message.includes("تركة الإفلاس") ||
      message.includes("fraudulent transfer") || message.includes("نقل احتيالي") ||
      message.includes("preference payment") || message.includes("دفعة تفضيلية")
    ) {
      return this.actionProvider.handleBankruptcyLaw({ withAvatar: true });
    }


    if (
      message.includes("civil rights") || message.includes("الحقوق المدنية") ||
      message.includes("discrimination") || message.includes("تمييز") ||
      message.includes("human rights") || message.includes("حقوق الإنسان") ||
      message.includes("equal protection") || message.includes("الحماية المتساوية") ||
      message.includes("freedom of speech") || message.includes("حرية التعبير") ||
      message.includes("freedom of religion") || message.includes("حرية الدين") ||
      message.includes("racial discrimination") || message.includes("التمييز العنصري") ||
      message.includes("gender discrimination") || message.includes("التمييز بين الجنسين") ||
      message.includes("disability rights") || message.includes("حقوق المعاقين") ||
      message.includes("LGBTQ rights") || message.includes("حقوق مجتمع الميم") ||
      message.includes("voting rights") || message.includes("حقوق التصويت") ||
      message.includes("police misconduct") || message.includes("سوء سلوك الشرطة") ||
      message.includes("prisoner rights") || message.includes("حقوق السجناء") ||
      message.includes("fair housing") || message.includes("الإسكان العادل")

    ) {
      return this.actionProvider.handleCivilRightsLaw({ withAvatar: true });
    }

    if (
      message.includes("employment law") || message.includes("قانون العمل") ||
      message.includes("workplace harassment") || message.includes("التحرش في مكان العمل") ||
      message.includes("wrongful termination") || message.includes("الفصل غير المشروع") ||
      message.includes("employment contract") || message.includes("عقد العمل") ||
      message.includes("labor union") || message.includes("نقابة عمالية") ||
      message.includes("workers' compensation") || message.includes("تعويضات العمال") ||
      message.includes("discrimination at work") || message.includes("التمييز في العمل") ||
      message.includes("overtime pay") || message.includes("أجر إضافي") ||
      message.includes("minimum wage") || message.includes("الحد الأدنى للأجور") ||
      message.includes("retaliation") || message.includes("انتقام") ||
      message.includes("unemployment benefits") || message.includes("إعانات البطالة") ||
      message.includes("FMLA") || message.includes("قانون الإجازة العائلية والطبية") ||
      message.includes("whistleblower protection") || message.includes("حماية المبلغين عن المخالفات")
    ) {
      return this.actionProvider.handleEmploymentLaw({ withAvatar: true });
    }


    if (
      message.includes("divorce") || message.includes("طلاق") ||
      message.includes("child custody") || message.includes("حضانة الطفل") ||
      message.includes("adoption") || message.includes("تبني") ||
      message.includes("domestic violence") || message.includes("العنف المنزلي") ||
      message.includes("spousal support") || message.includes("دعم الزوج") ||
      message.includes("child support") || message.includes("نفقة الطفل") ||
      message.includes("prenuptial agreement") || message.includes("اتفاق ما قبل الزواج") ||
      message.includes("postnuptial agreement") || message.includes("اتفاق ما بعد الزواج") ||
      message.includes("legal separation") || message.includes("الانفصال القانوني") ||
      message.includes("alimony") || message.includes("نفقة") ||
      message.includes("paternity") || message.includes("الأبوة") ||
      message.includes("guardianship") || message.includes("الوصاية") ||
      message.includes("foster care") || message.includes("الرعاية بالتبني")
    ) {
      return this.actionProvider.handleFamilyLaw({ withAvatar: true });
    }

    if (
      message.includes("personal injury") || message.includes("إصابة شخصية") ||
      message.includes("accident") || message.includes("حادث") ||
      message.includes("negligence") || message.includes("إهمال") ||
      message.includes("liability") || message.includes("مسؤولية") ||
      message.includes("medical expenses") || message.includes("نفقات طبية") ||
      message.includes("pain and suffering") || message.includes("الألم والمعاناة") ||
      message.includes("car accident") || message.includes("حادث سيارة") ||
      message.includes("slip and fall") || message.includes("انزلاق وسقوط") ||
      message.includes("product liability") || message.includes("مسؤولية المنتج") ||
      message.includes("workplace injury") || message.includes("إصابة في مكان العمل") ||
      message.includes("wrongful death") || message.includes("وفاة غير مشروعة") ||
      message.includes("insurance claim") || message.includes("مطالبة تأمين") ||
      message.includes("dog bite") || message.includes("عضة كلب") ||
      message.includes("premises liability") || message.includes("مسؤولية الأماكن")
    ) {
      return this.actionProvider.handlePersonalInjuryLaw({ withAvatar: true });
    }

    if (
      message.includes("intellectual property") || message.includes("الملكية الفكرية") ||
      message.includes("patent") || message.includes("براءة اختراع") ||
      message.includes("trademark") || message.includes("علامة تجارية") ||
      message.includes("copyright") || message.includes("حقوق النشر") ||
      message.includes("trade secret") || message.includes("سر تجاري") ||
      message.includes("IP infringement") || message.includes("انتهاك الملكية الفكرية") ||
      message.includes("licensing agreement") || message.includes("اتفاقية الترخيص") ||
      message.includes("IP litigation") || message.includes("التقاضي بشأن الملكية الفكرية") ||
      message.includes("patent application") || message.includes("طلب براءة اختراع") ||
      message.includes("trademark registration") || message.includes("تسجيل علامة تجارية") ||
      message.includes("brand protection") || message.includes("حماية العلامة التجارية") ||
      message.includes("patent infringement") || message.includes("انتهاك براءة الاختراع") ||
      message.includes("IP portfolio management") || message.includes("إدارة محفظة الملكية الفكرية") ||
      message.includes("trade dress") || message.includes("اللباس التجاري")
    ) {
      return this.actionProvider.handleIntellectualPropertyLaw({ withAvatar: true });
    }

    if (
      message.includes("immigration") || message.includes("الهجرة") ||
      message.includes("visa") || message.includes("تأشيرة") ||
      message.includes("green card") || message.includes("البطاقة الخضراء") ||
      message.includes("asylum") || message.includes("اللجوء") ||
      message.includes("citizenship") || message.includes("الجنسية") ||
      message.includes("deportation") || message.includes("ترحيل") ||
      message.includes("naturalization") || message.includes("التجنس") ||
      message.includes("immigrant visa") || message.includes("تأشيرة مهاجر") ||
      message.includes("non-immigrant visa") || message.includes("تأشيرة غير مهاجر") ||
      message.includes("DACA") || message.includes("الإجراءات المؤجلة للقادمين الأطفال") ||
      message.includes("refugee status") || message.includes("وضع اللاجئ") ||
      message.includes("family-based immigration") || message.includes("الهجرة القائمة على الأسرة") ||
      message.includes("employment-based immigration") || message.includes("الهجرة القائمة على العمل") ||
      message.includes("adjustment of status") || message.includes("تعديل الحالة") ||
      message.includes("visa overstay") || message.includes("تجاوز مدة التأشيرة") ||
      message.includes("ICE") || message.includes("الهجرة والجمارك") ||
      message.includes("TPS") || message.includes("وضع الحماية المؤقتة")
    ) {
      return this.actionProvider.handleImmigrationLaw({ withAvatar: true });
    }

    if (
      message.includes("real estate") || message.includes("عقارات") ||
      message.includes("property dispute") || message.includes("نزاع عقاري") ||
      message.includes("zoning law") || message.includes("قانون تقسيم المناطق") ||
      message.includes("landlord tenant") || message.includes("المالك والمستأجر") ||
      message.includes("commercial lease") || message.includes("عقد الإيجار التجاري") ||
      message.includes("property transaction") || message.includes("معاملة عقارية") ||
      message.includes("foreclosure") || message.includes("حجز") ||
      message.includes("property deed") || message.includes("صك الملكية") ||
      message.includes("easement") || message.includes("حق الارتفاق") ||
      message.includes("real estate contract") || message.includes("عقد العقارات") ||
      message.includes("mortgage") || message.includes("الرهن العقاري") ||
      message.includes("title insurance") || message.includes("تأمين الملكية") ||
      message.includes("property tax") || message.includes("ضريبة العقار") ||
      message.includes("homeowners association") || message.includes("جمعية أصحاب المنازل") ||
      message.includes("property management") || message.includes("إدارة العقارات") ||
      message.includes("real estate development") || message.includes("تطوير العقارات")

    ) {
      return this.actionProvider.handleRealEstateLaw({ withAvatar: true });
    }

    if (
      message.includes("tax law") || message.includes("قانون الضرائب") ||
      message.includes("tax planning") || message.includes("التخطيط الضريبي") ||
      message.includes("tax dispute") || message.includes("نزاع ضريبي") ||
      message.includes("tax compliance") || message.includes("الامتثال الضريبي") ||
      message.includes("IRS") || message.includes("مصلحة الضرائب") ||
      message.includes("audit") || message.includes("تدقيق") ||
      message.includes("tax evasion") || message.includes("التهرب الضريبي") ||
      message.includes("tax fraud") || message.includes("احتيال ضريبي") ||
      message.includes("tax return") || message.includes("إقرار ضريبي") ||
      message.includes("corporate tax") || message.includes("ضريبة الشركات") ||
      message.includes("income tax") || message.includes("ضريبة الدخل") ||
      message.includes("sales tax") || message.includes("ضريبة المبيعات") ||
      message.includes("property tax") || message.includes("ضريبة العقار") ||
      message.includes("estate tax") || message.includes("ضريبة التركات") ||
      message.includes("gift tax") || message.includes("ضريبة الهدايا") ||
      message.includes("tax penalty") || message.includes("غرامة ضريبية") ||
      message.includes("tax deduction") || message.includes("الخصم الضريبي") ||
      message.includes("tax credit") || message.includes("ائتمان ضريبي") ||
      message.includes("tax exemption") || message.includes("الإعفاء الضريبي")
    ) {
      return this.actionProvider.handleTaxLawyer({ withAvatar: true });
    }

    if (
      message.includes("environmental law") || message.includes("قانون البيئة") ||
      message.includes("pollution") || message.includes("تلوث") ||
      message.includes("environmental protection") || message.includes("حماية البيئة") ||
      message.includes("sustainability") || message.includes("الاستدامة") ||
      message.includes("natural resources") || message.includes("الموارد الطبيعية") ||
      message.includes("climate change") || message.includes("تغير المناخ") ||
      message.includes("EPA") || message.includes("وكالة حماية البيئة") ||
      message.includes("environmental regulation") || message.includes("تنظيم البيئة") ||
      message.includes("toxic waste") || message.includes("النفايات السامة") ||
      message.includes("clean water") || message.includes("مياه نظيفة") ||
      message.includes("clean air") || message.includes("هواء نظيف") ||
      message.includes("environmental impact") || message.includes("الأثر البيئي") ||
      message.includes("environmental compliance") || message.includes("الامتثال البيئي") ||
      message.includes("hazardous materials") || message.includes("المواد الخطرة") ||
      message.includes("waste management") || message.includes("إدارة النفايات") ||
      message.includes("renewable energy") || message.includes("الطاقة المتجددة") ||
      message.includes("carbon footprint") || message.includes("البصمة الكربونية") ||
      message.includes("green building") || message.includes("البناء الأخضر")
    ) {
      return this.actionProvider.handleEnvironmentalLaw({ withAvatar: true });
    }

    if (
      message.includes("medical malpractice") || message.includes("سوء الممارسة الطبية") ||
      message.includes("medical negligence") || message.includes("إهمال طبي") ||
      message.includes("medical error") || message.includes("خطأ طبي") ||
      message.includes("healthcare liability") || message.includes("مسؤولية الرعاية الصحية") ||
      message.includes("patient rights") || message.includes("حقوق المريض") ||
      message.includes("misdiagnosis") || message.includes("خطأ في التشخيص") ||
      message.includes("surgical error") || message.includes("خطأ جراحي") ||
      message.includes("birth injury") || message.includes("إصابة الولادة") ||
      message.includes("medication error") || message.includes("خطأ في الدواء") ||
      message.includes("hospital negligence") || message.includes("إهمال المستشفى") ||
      message.includes("informed consent") || message.includes("الموافقة المستنيرة") ||
      message.includes("medical malpractice lawsuit") || message.includes("دعوى سوء الممارسة الطبية") ||
      message.includes("healthcare fraud") || message.includes("احتيال الرعاية الصحية") ||
      message.includes("nursing home abuse") || message.includes("إساءة معاملة دار المسنين")
    ) {
      return this.actionProvider.handleMedicalMalpracticeLaw({ withAvatar: true });
    }

    if (
      message.includes("estate planning") || message.includes("تخطيط العقارات") ||
      message.includes("will") || message.includes("وصية") ||
      message.includes("trust") || message.includes("صندوق ائتمان") ||
      message.includes("probate") || message.includes("تحقق من صحة الوصية") ||
      message.includes("inheritance") || message.includes("ميراث") ||
      message.includes("executor") || message.includes("منفذ الوصية") ||
      message.includes("estate tax") || message.includes("ضريبة التركات") ||
      message.includes("living will") || message.includes("وصية المعيشة") ||
      message.includes("power of attorney") || message.includes("تفويض") ||
      message.includes("advance directive") || message.includes("توجيه مسبق") ||
      message.includes("beneficiary") || message.includes("مستفيد") ||
      message.includes("guardianship") || message.includes("الوصاية") ||
      message.includes("asset protection") || message.includes("حماية الأصول") ||
      message.includes("charitable trust") || message.includes("صندوق خيري") ||
      message.includes("estate administration") || message.includes("إدارة التركة")
    ) {
      return this.actionProvider.handleEstatePlanningLaw({ withAvatar: true });
    }

    if (
      message.includes("constitutional law") || message.includes("القانون الدستوري") ||
      message.includes("constitutional rights") || message.includes("الحقوق الدستورية") ||
      message.includes("bill of rights") || message.includes("وثيقة الحقوق") ||
      message.includes("amendment") || message.includes("تعديل") ||
      message.includes("judicial review") || message.includes("المراجعة القضائية") ||
      message.includes("civil liberties") || message.includes("الحريات المدنية") ||
      message.includes("due process") || message.includes("الإجراءات القانونية الواجبة") ||
      message.includes("equal protection") || message.includes("الحماية المتساوية") ||
      message.includes("freedom of speech") || message.includes("حرية التعبير") ||
      message.includes("freedom of religion") || message.includes("حرية الدين") ||
      message.includes("right to privacy") || message.includes("حق الخصوصية") ||
      message.includes("freedom of assembly") || message.includes("حرية التجمع") ||
      message.includes("voting rights") || message.includes("حقوق التصويت") ||
      message.includes("search and seizure") || message.includes("التفتيش والمصادرة") ||
      message.includes("equal rights amendment") || message.includes("تعديل الحقوق المتساوية") ||
      message.includes("constitutional convention") || message.includes("اتفاقية دستورية")
    ) {
      return this.actionProvider.handleConstitutionalLaw({ withAvatar: true });
    }

    if (
      message.includes("entertainment law") || message.includes("قانون الترفيه") ||
      message.includes("contract negotiation") || message.includes("التفاوض على العقد") ||
      message.includes("intellectual property") || message.includes("الملكية الفكرية") ||
      message.includes("royalties") || message.includes("الإتاوات") ||
      message.includes("talent agreement") || message.includes("اتفاقية المواهب") ||
      message.includes("licensing") || message.includes("الترخيص") ||
      message.includes("celebrity endorsement") || message.includes("مصادقة المشاهير") ||
      message.includes("film contract") || message.includes("عقد الفيلم") ||
      message.includes("music rights") || message.includes("حقوق الموسيقى") ||
      message.includes("recording contract") || message.includes("عقد تسجيل") ||
      message.includes("media law") || message.includes("قانون الإعلام") ||
      message.includes("defamation") || message.includes("التشهير") ||
      message.includes("publishing rights") || message.includes("حقوق النشر") ||
      message.includes("production agreement") || message.includes("اتفاقية الإنتاج") ||
      message.includes("distribution deal") || message.includes("صفقة التوزيع") ||
      message.includes("performance contract") || message.includes("عقد الأداء") ||
      message.includes("copyright infringement") || message.includes("انتهاك حقوق النشر")
    ) {
      return this.actionProvider.handleEntertainmentLaw({ withAvatar: true });
    }

    if (
      message.includes("construction law") || message.includes("قانون البناء") ||
      message.includes("construction contract") || message.includes("عقد البناء") ||
      message.includes("construction dispute") || message.includes("نزاع البناء") ||
      message.includes("contractor liability") || message.includes("مسؤولية المقاول") ||
      message.includes("construction defect") || message.includes("عيب البناء") ||
      message.includes("mechanic's lien") || message.includes("حق الامتياز الميكانيكي") ||
      message.includes("building permit") || message.includes("تصريح البناء") ||
      message.includes("zoning regulation") || message.includes("تنظيم تقسيم المناطق") ||
      message.includes("construction litigation") || message.includes("التقاضي بشأن البناء") ||
      message.includes("project delay") || message.includes("تأخير المشروع") ||
      message.includes("change order") || message.includes("أمر تغيير") ||
      message.includes("payment dispute") || message.includes("نزاع الدفع") ||
      message.includes("contract negotiation") || message.includes("التفاوض على العقد") ||
      message.includes("construction insurance") || message.includes("تأمين البناء") ||
      message.includes("safety compliance") || message.includes("الامتثال للسلامة") ||
      message.includes("construction bond") || message.includes("سند البناء")
    ) {
      return this.actionProvider.handleConstructionLaw({ withAvatar: true });
    }

    if (
      message.includes("education law") || message.includes("قانون التعليم") ||
      message.includes("student rights") || message.includes("حقوق الطالب") ||
      message.includes("school policy") || message.includes("سياسة المدرسة") ||
      message.includes("special education") || message.includes("التعليم الخاص") ||
      message.includes("teacher contract") || message.includes("عقد المعلم") ||
      message.includes("academic freedom") || message.includes("الحرية الأكاديمية") ||
      message.includes("school discipline") || message.includes("انضباط المدرسة") ||
      message.includes("expulsion") || message.includes("طرد") ||
      message.includes("school board") || message.includes("مجلس المدرسة") ||
      message.includes("Title IX") || message.includes("العنوان التاسع") ||
      message.includes("disability accommodation") || message.includes("تسهيلات الإعاقة") ||
      message.includes("educational equity") || message.includes("المساواة التعليمية") ||
      message.includes("school funding") || message.includes("تمويل المدرسة") ||
      message.includes("FERPA") || message.includes("قانون الخصوصية في التعليم") ||
      message.includes("student loan") || message.includes("قرض الطالب") ||
      message.includes("school voucher") || message.includes("قسيمة المدرسة") ||
      message.includes("charter school") || message.includes("مدرسة مستقلة")
    ) {
      return this.actionProvider.handleEducationLaw({ withAvatar: true });
    }

    if (
      message.includes("health care law") || message.includes("قانون الرعاية الصحية") ||
      message.includes("health care compliance") || message.includes("الامتثال للرعاية الصحية") ||
      message.includes("health care regulation") || message.includes("تنظيم الرعاية الصحية") ||
      message.includes("medical malpractice") || message.includes("سوء الممارسة الطبية") ||
      message.includes("patient rights") || message.includes("حقوق المريض") ||
      message.includes("HIPAA") || message.includes("قانون التأمين الصحي") ||
      message.includes("health insurance") || message.includes("التأمين الصحي") ||
      message.includes("Medicare") || message.includes("ميديكير") ||
      message.includes("Medicaid") || message.includes("ميديكيد") ||
      message.includes("telehealth") || message.includes("الرعاية الصحية عن بعد") ||
      message.includes("pharmaceutical regulation") || message.includes("تنظيم الأدوية") ||
      message.includes("health care fraud") || message.includes("احتيال الرعاية الصحية") ||
      message.includes("medical licensing") || message.includes("ترخيص طبي") ||
      message.includes("clinical trial") || message.includes("التجارب السريرية") ||
      message.includes("hospital administration") || message.includes("إدارة المستشفى") ||
      message.includes("informed consent") || message.includes("الموافقة المستنيرة") ||
      message.includes("bioethics") || message.includes("الأخلاقيات البيولوجية") ||
      message.includes("health care proxy") || message.includes("وكيل الرعاية الصحية")
    ) {
      return this.actionProvider.handleHealthCareLaw({ withAvatar: true });
    }

    if (
      message.includes("military law") || message.includes("القانون العسكري") ||
      message.includes("court martial") || message.includes("المحكمة العسكرية") ||
      message.includes("military justice") || message.includes("العدالة العسكرية") ||
      message.includes("UCMJ") || message.includes("القانون العسكري الموحد") ||
      message.includes("military discharge") || message.includes("تسريح عسكري") ||
      message.includes("veteran benefits") || message.includes("مزايا المحاربين القدامى") ||
      message.includes("AWOL") || message.includes("الغياب دون إذن") ||
      message.includes("military tribunal") || message.includes("محكمة عسكرية") ||
      message.includes("court martial appeal") || message.includes("استئناف المحكمة العسكرية") ||
      message.includes("military investigation") || message.includes("تحقيق عسكري") ||
      message.includes("GI Bill") || message.includes("قانون جي آي") ||
      message.includes("service member rights") || message.includes("حقوق أفراد الخدمة") ||
      message.includes("veterans affairs") || message.includes("شؤون المحاربين القدامى") ||
      message.includes("military divorce") || message.includes("طلاق عسكري") ||
      message.includes("combat injury") || message.includes("إصابة قتالية") ||
      message.includes("military contract") || message.includes("عقد عسكري")
    ) {
      return this.actionProvider.handleMilitaryLaw({ withAvatar: true });
    }

    if (
      message.includes("consumer protection") || message.includes("حماية المستهلك") ||
      message.includes("fraud") || message.includes("احتيال") ||
      message.includes("false advertising") || message.includes("الإعلان الكاذب") ||
      message.includes("product liability") || message.includes("مسؤولية المنتج") ||
      message.includes("consumer rights") || message.includes("حقوق المستهلك") ||
      message.includes("warranty") || message.includes("ضمان") ||
      message.includes("recall") || message.includes("استدعاء") ||
      message.includes("deceptive practices") || message.includes("ممارسات خادعة") ||
      message.includes("consumer finance") || message.includes("تمويل المستهلك") ||
      message.includes("credit report") || message.includes("تقرير الائتمان") ||
      message.includes("identity theft") || message.includes("سرقة الهوية") ||
      message.includes("lemon law") || message.includes("قانون الليمون")
    ) {
      return this.actionProvider.handleConsumerProtectionLaw({ withAvatar: true });
    }

    if (
      message.includes("elder law") || message.includes("قانون المسنين") ||
      message.includes("elder abuse") || message.includes("إساءة معاملة المسنين") ||
      message.includes("long-term care") || message.includes("رعاية طويلة الأجل") ||
      message.includes("retirement planning") || message.includes("تخطيط التقاعد") ||
      message.includes("estate planning") || message.includes("تخطيط العقارات") ||
      message.includes("guardianship") || message.includes("الوصاية") ||
      message.includes("power of attorney") || message.includes("تفويض") ||
      message.includes("living will") || message.includes("وصية المعيشة") ||
      message.includes("nursing home") || message.includes("دار رعاية المسنين") ||
      message.includes("social security benefits") || message.includes("مزايا الضمان الاجتماعي")
    ) {
      return this.actionProvider.handleElderLaw({ withAvatar: true });
    }

    if (
      message.includes("Islamic law") || message.includes("الشريعة الإسلامية") ||
      message.includes("Sharia law") || message.includes("قانون الشريعة")
    ) {
      return this.actionProvider.handleIslamicLaw({ withAvatar: true });
    }

    if (
      message.includes("administrative law") || message.includes("القانون الإداري") ||
      message.includes("government regulations") || message.includes("التنظيمات الحكومية") ||
      message.includes("public law") || message.includes("القانون العام") ||
      message.includes("judicial review") || message.includes("المراجعة القضائية") ||
      message.includes("regulatory compliance") || message.includes("الامتثال التنظيمي") ||
      message.includes("public administration") || message.includes("الإدارة العامة") ||
      message.includes("government contracts") || message.includes("العقود الحكومية")
    ) {
      return this.actionProvider.handleAdministrativeLaw({ withAvatar: true });
    }

    if (
      message.includes("human rights law") || message.includes("قانون حقوق الإنسان") ||
      message.includes("civil rights") || message.includes("الحقوق المدنية") ||
      message.includes("political rights") || message.includes("الحقوق السياسية") ||
      message.includes("freedom of speech") || message.includes("حرية التعبير") ||
      message.includes("right to privacy") || message.includes("حق الخصوصية") ||
      message.includes("equality") || message.includes("المساواة") ||
      message.includes("discrimination") || message.includes("التمييز") ||
      message.includes("torture") || message.includes("التعذيب") ||
      message.includes("genocide") || message.includes("الإبادة الجماعية") ||
      message.includes("human trafficking") || message.includes("الاتجار بالبشر") ||
      message.includes("women's rights") || message.includes("حقوق المرأة") ||
      message.includes("child rights") || message.includes("حقوق الطفل") ||
      message.includes("refugee rights") || message.includes("حقوق اللاجئين")
    ) {
      return this.actionProvider.handleHumanRightsLaw({ withAvatar: true });
    }

    if (
      message.includes("thank you") || message.includes("شكرا") ||
      message.includes("thanks") || message.includes("شكرا جزيلا") ||
      message.includes("appreciate it") || message.includes("أنا ممتن") ||
      message.includes("thankful") || message.includes("أشكركم") ||
      message.includes("grateful") || message.includes("شكرًا لك") ||
      message.includes("much obliged") || message.includes("أشكرك جدًا") ||
      message.includes("many thanks") || message.includes("بفضلكم")
    ) {
      return this.actionProvider.handleThankYou({ withAvatar: true });
    }

    return this.actionProvider.handleOther({ withAvatar: true });
  }
}

export default MessageParser;
