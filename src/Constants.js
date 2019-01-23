/*
* Copyright 2018 Karlsruhe Institute of Technology.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

export const identifierTypes = [
  {id: 'ARK', name: 'ARK'},
  {id: 'AR_XIV', name: 'AR_XIV'},
  {id: 'BIBCODE', name: 'BIBCODE'},
  {id: 'DOI', name: 'DOI'},
  {id: 'EAN_13', name: 'EAN_13'},
  {id: 'EISSN', name: 'EISSN'},
  {id: 'HANDLE', name: 'HANDLE'},
  {id: 'IGSN1234', name: 'IGSN'},
  {id: 'ISBN', name: 'ISBN'},
  {id: 'ISSN', name: 'ISSN'},
  {id: 'ISTC', name: 'ISTC'},
  {id: 'LISSN', name: 'LISSN'},
  {id: 'LSID', name: 'LSID'},
  {id: 'PMID', name: 'PMID'},
  {id: 'PURL', name: 'PURL'},
  {id: 'UPC', name: 'UPC'},
  {id: 'URL', name: 'URL'},
  {id: 'URN', name: 'URN'},
  {id: 'INTERNAL', name: 'INTERNAL'},
  {id: 'OTHER', name: 'OTHER'}
];

export const relationTypes = [
  {id: 'IS_CITED_BY', name: 'IsCitedBy'},
  {id: 'CITES', name: 'Cites'},
  {id: 'IS_SUPPLEMENT_TO', name: 'IsSupplementTo'},
  {id: 'IS_SUPPLEMENTED_BY', name: 'IsSupplementedBy'},
  {id: 'IS_CONTINUED_BY', name: 'IsContinuedBy'},
  {id: 'CONTINUES', name: 'Continues'},
  {id: 'IS_NEW_VERSION_OF', name: 'IsNewVersionOf'},
  {id: 'IS_PREVIOUS_VERSION_OF', name: 'IsPreviousVersionOf'},
  {id: 'IS_PART_OF', name: 'IsPartOf'},
  {id: 'HAS_PART', name: 'HasPart'},
  {id: 'IS_REFERENCED_BY', name: 'IsReferencedBy'},
  {id: 'REFERENCES', name: 'References'},
  {id: 'IS_DOCUMENTED_BY', name: 'IsDocumentedBy'},
  {id: 'DOCUMENTS', name: 'Documents'},
  {id: 'IS_COMPILED_BY', name: 'IsCompiledBy'},
  {id: 'COMPILES', name: 'Compiles'},
  {id: 'IS_VARIANT_FORM_OF', name: 'IsVariantFormOf'},
  {id: 'IS_ORIGINAL_FORM_OF', name: 'IsOriginalFormOf'},
  {id: 'IS_IDENTICAL_TO', name: 'IsIdenticalTo'},
  {id: 'HAS_METADATA', name: 'HasMetadata'},
  {id: 'IS_METADATA_FOR', name: 'IsMetadataFor'},
  {id: 'REVIEWS', name: 'Reviews'},
  {id: 'IS_REVIEWED_BY', name: 'IsReviewedBy'},
  {id: 'IS_DERIVED_FROM', name: 'IsDerivedFrom'},
  {id: 'IS_SOURCE_OF', name: 'IsSourceOf'}
];

export const titleTypes = [
  { id: 'ALTERNATIVE_TITLE', name: 'AlternativeTitle' },
  { id: 'SUBTITLE', name: 'Subtitle' },
  { id: 'TRANSLATED_TITLE', name: 'TranslatedTitle' },
  { id: 'OTHER', name: 'Other' },
];

export const states = [
  { id: 'VOLATILE', name: 'Volatile' },
  { id: 'FIXED', name: 'Fixed' },
  { id: 'REVOKED', name: 'Revoked' }
];

export const contributionTypes= [
  { id: 'CONTACT_PERSON', name: 'ContactPerson' },
  { id: 'DATA_COLLECTOR', name: 'DataCollector' },
  { id: 'DATA_CURATOR', name: 'DataCurator' },
  { id: 'DATA_MANAGER', name: 'DataManager' },
  { id: 'DISTRIBUTOR', name: 'Distributor' },
  { id: 'EDITOR', name: 'Editor' },
  { id: 'HOSTING_INSTITUTION', name: 'HostingInstitution' },
  { id: 'PRODUCER', name: 'Producer' },
  { id: 'PROJECT_LEADER', name: 'ProjectLeader' },
  { id: 'PROJECT_MANAGER', name: 'ProjectManager' },
  { id: 'PROJECT_MEMBER', name: 'ProjectMember' },
  { id: 'REGISTRATION_AGENCY', name: 'RegistrationAgency' },
  { id: 'REGISTRATION_AUTHORITY', name: 'RegistrationAuthority' },
  { id: 'RELATED_PERSON', name: 'RelatedPerson' },
  { id: 'RESEARCH_GROUP', name: 'ResearchGroup' },
  { id: 'RIGHTS_HOLDER', name: 'RightsHolder' },
  { id: 'RESEARCHER', name: 'Researcher' },
  { id: 'SPONSOR', name: 'Sponsor' },
  { id: 'SUPERVISOR', name: 'Supervisor' },
  { id: 'WORK_PACKAGE_LEADER', name: 'WorkPackageLeader' },
  { id: 'OTHER', name: 'Other' }
]

export const dateTypes= [
  { id: 'ACCEPTED', name: 'Accepted' },
  { id: 'AVAILABLE', name: 'Available' },
  { id: 'COLLECTED', name: 'Collected' },
  { id: 'COPYRIGHTED', name: 'Copyrighted' },
  { id: 'CREATED', name: 'Created' },
  { id: 'ISSUED', name: 'Issued' },
  { id: 'SUBMITTED', name: 'Submitted' },
  { id: 'UPDATED', name: 'Updated' },
  { id: 'VALID', name: 'Valid' },
  { id: 'REVOKED', name: 'Revoked' }
]

export const descriptionTypes = [
  { id: 'ABSTRACT', name: 'Abstract' },
  { id: 'METHODS', name: 'Methods' },
  { id: 'SERIES_INFORMATION', name: 'SeriesInformation' },
  { id: 'TABLE_OF_CONTENTS', name: 'TableOfContents' },
  { id: 'TECHNICAL_INFO', name: 'TechnicalInfo' },
  { id: 'OTHER', name: 'Other' }
]

export const funderIdentifierTypes =[
  { id: 'ISNI', name: 'ISNI' },
  { id: 'GRID', name: 'GRID' },
  { id: 'CROSSREF_FUNDER_ID', name: 'Crossref Funder ID' },
  { id: 'OTHER', name: 'Other' }
]

export const permissionTypes = [
  { id: 'NONE', name: 'None' },
  { id: 'READ', name: 'Read' },
  { id: 'WRITE', name: 'Write' },
  { id: 'ADMINISTRATE', name: 'Administrate' },
]

/**
 * @author Phil Teare
 * using wikipedia data
 */
export const isoLangs = [
  {"id":"ab","name":"Abkhaz","nativeName":"аҧсуа"},
  {"id":"aa","name":"Afar","nativeName":"Afaraf"},
  {"id":"af","name":"Afrikaans","nativeName":"Afrikaans"},
  {"id":"ak","name":"Akan","nativeName":"Akan"},
  {"id":"sq","name":"Albanian","nativeName":"Shqip"},
  {"id":"am","name":"Amharic","nativeName":"አማርኛ"},
  {"id":"ar","name":"Arabic","nativeName":"العربية"},
  {"id":"an","name":"Aragonese","nativeName":"Aragonés"},
  {"id":"hy","name":"Armenian","nativeName":"Հայերեն"},
  {"id":"as","name":"Assamese","nativeName":"অসমীয়া"},
  {"id":"av","name":"Avaric","nativeName":"авар мацӀ, магӀарул мацӀ"},
  {"id":"ae","name":"Avestan","nativeName":"avesta"},
  {"id":"ay","name":"Aymara","nativeName":"aymar aru"},
  {"id":"az","name":"Azerbaijani","nativeName":"azərbaycan dili"},
  {"id":"bm","name":"Bambara","nativeName":"bamanankan"},
  {"id":"ba","name":"Bashkir","nativeName":"башҡорт теле"},
  {"id":"eu","name":"Basque","nativeName":"euskara, euskera"},
  {"id":"be","name":"Belarusian","nativeName":"Беларуская"},
  {"id":"bn","name":"Bengali","nativeName":"বাংলা"},
  {"id":"bh","name":"Bihari","nativeName":"भोजपुरी"},
  {"id":"bi","name":"Bislama","nativeName":"Bislama"},
  {"id":"bs","name":"Bosnian","nativeName":"bosanski jezik"},
  {"id":"br","name":"Breton","nativeName":"brezhoneg"},
  {"id":"bg","name":"Bulgarian","nativeName":"български език"},
  {"id":"my","name":"Burmese","nativeName":"ဗမာစာ"},
  {"id":"ca","name":"Catalan; Valencian","nativeName":"Català"},
  {"id":"ch","name":"Chamorro","nativeName":"Chamoru"},
  {"id":"ce","name":"Chechen","nativeName":"нохчийн мотт"},
  {"id":"ny","name":"Chichewa; Chewa; Nyanja","nativeName":"chiCheŵa, chinyanja"},
  {"id":"zh","name":"Chinese","nativeName":"中文 (Zhōngwén), 汉语, 漢語"},
  {"id":"cv","name":"Chuvash","nativeName":"чӑваш чӗлхи"},
  {"id":"kw","name":"Cornish","nativeName":"Kernewek"},
  {"id":"co","name":"Corsican","nativeName":"corsu, lingua corsa"},
  {"id":"cr","name":"Cree","nativeName":"ᓀᐦᐃᔭᐍᐏᐣ"},
  {"id":"hr","name":"Croatian","nativeName":"hrvatski"},
  {"id":"cs","name":"Czech","nativeName":"česky, čeština"},
  {"id":"da","name":"Danish","nativeName":"dansk"},
  {"id":"dv","name":"Divehi; Dhivehi; Maldivian;","nativeName":"ދިވެހި"},
  {"id":"nl","name":"Dutch","nativeName":"Nederlands, Vlaams"},
  {"id":"en","name":"English","nativeName":"English"},
  {"id":"eo","name":"Esperanto","nativeName":"Esperanto"},
  {"id":"et","name":"Estonian","nativeName":"eesti, eesti keel"},
  {"id":"ee","name":"Ewe","nativeName":"Eʋegbe"},
  {"id":"fo","name":"Faroese","nativeName":"føroyskt"},
  {"id":"fj","name":"Fijian","nativeName":"vosa Vakaviti"},
  {"id":"fi","name":"Finnish","nativeName":"suomi, suomen kieli"},
  {"id":"fr","name":"French","nativeName":"français, langue française"},
  {"id":"ff","name":"Fula; Fulah; Pulaar; Pular","nativeName":"Fulfulde, Pulaar, Pular"},
  {"id":"gl","name":"Galician","nativeName":"Galego"},
  {"id":"ka","name":"Georgian","nativeName":"ქართული"},
  {"id":"de","name":"German","nativeName":"Deutsch"},
  {"id":"el","name":"Greek, Modern","nativeName":"Ελληνικά"},
  {"id":"gn","name":"Guaraní","nativeName":"Avañeẽ"},
  {"id":"gu","name":"Gujarati","nativeName":"ગુજરાતી"},
  {"id":"ht","name":"Haitian; Haitian Creole","nativeName":"Kreyòl ayisyen"},
  {"id":"ha","name":"Hausa","nativeName":"Hausa, هَوُسَ"},
  {"id":"he","name":"Hebrew (modern)","nativeName":"עברית"},
  {"id":"hz","name":"Herero","nativeName":"Otjiherero"},
  {"id":"hi","name":"Hindi","nativeName":"हिन्दी, हिंदी"},
  {"id":"ho","name":"Hiri Motu","nativeName":"Hiri Motu"},
  {"id":"hu","name":"Hungarian","nativeName":"Magyar"},
  {"id":"ia","name":"Interlingua","nativeName":"Interlingua"},
  {"id":"id","name":"Indonesian","nativeName":"Bahasa Indonesia"},
  {"id":"ie","name":"Interlingue","nativeName":"Originally called Occidental; then Interlingue after WWII"},
  {"id":"ga","name":"Irish","nativeName":"Gaeilge"},
  {"id":"ig","name":"Igbo","nativeName":"Asụsụ Igbo"},
  {"id":"ik","name":"Inupiaq","nativeName":"Iñupiaq, Iñupiatun"},
  {"id":"io","name":"Ido","nativeName":"Ido"},
  {"id":"is","name":"Icelandic","nativeName":"Íslenska"},
  {"id":"it","name":"Italian","nativeName":"Italiano"},
  {"id":"iu","name":"Inuktitut","nativeName":"ᐃᓄᒃᑎᑐᑦ"},
  {"id":"ja","name":"Japanese","nativeName":"日本語 (にほんご／にっぽんご)"},
  {"id":"jv","name":"Javanese","nativeName":"basa Jawa"},
  {"id":"kl","name":"Kalaallisut, Greenlandic","nativeName":"kalaallisut, kalaallit oqaasii"},
  {"id":"kn","name":"Kannada","nativeName":"ಕನ್ನಡ"},
  {"id":"kr","name":"Kanuri","nativeName":"Kanuri"},
  {"id":"ks","name":"Kashmiri","nativeName":"कश्मीरी, كشميري‎"},
  {"id":"kk","name":"Kazakh","nativeName":"Қазақ тілі"},
  {"id":"km","name":"Khmer","nativeName":"ភាសាខ្មែរ"},
  {"id":"ki","name":"Kikuyu, Gikuyu","nativeName":"Gĩkũyũ"},
  {"id":"rw","name":"Kinyarwanda","nativeName":"Ikinyarwanda"},
  {"id":"ky","name":"Kirghiz, Kyrgyz","nativeName":"кыргыз тили"},
  {"id":"kv","name":"Komi","nativeName":"коми кыв"},
  {"id":"kg","name":"Kongo","nativeName":"KiKongo"},
  {"id":"ko","name":"Korean","nativeName":"한국어 (韓國語), 조선말 (朝鮮語)"},
  {"id":"ku","name":"Kurdish","nativeName":"Kurdî, كوردی‎"},
  {"id":"kj","name":"Kwanyama, Kuanyama","nativeName":"Kuanyama"},
  {"id":"la","name":"Latin","nativeName":"latine, lingua latina"},
  {"id":"lb","name":"Luxembourgish, Letzeburgesch","nativeName":"Lëtzebuergesch"},
  {"id":"lg","name":"Luganda","nativeName":"Luganda"},
  {"id":"li","name":"Limburgish, Limburgan, Limburger","nativeName":"Limburgs"},
  {"id":"ln","name":"Lingala","nativeName":"Lingála"},
  {"id":"lo","name":"Lao","nativeName":"ພາສາລາວ"},
  {"id":"lt","name":"Lithuanian","nativeName":"lietuvių kalba"},
  {"id":"lu","name":"Luba-Katanga","nativeName":""},
  {"id":"lv","name":"Latvian","nativeName":"latviešu valoda"},
  {"id":"gv","name":"Manx","nativeName":"Gaelg, Gailck"},
  {"id":"mk","name":"Macedonian","nativeName":"македонски јазик"},
  {"id":"mg","name":"Malagasy","nativeName":"Malagasy fiteny"},
  {"id":"ms","name":"Malay","nativeName":"bahasa Melayu, بهاس ملايو‎"},
  {"id":"ml","name":"Malayalam","nativeName":"മലയാളം"},
  {"id":"mt","name":"Maltese","nativeName":"Malti"},
  {"id":"mi","name":"Māori","nativeName":"te reo Māori"},
  {"id":"mr","name":"Marathi (Marāṭhī)","nativeName":"मराठी"},
  {"id":"mh","name":"Marshallese","nativeName":"Kajin M̧ajeļ"},
  {"id":"mn","name":"Mongolian","nativeName":"монгол"},
  {"id":"na","name":"Nauru","nativeName":"Ekakairũ Naoero"},
  {"id":"nv","name":"Navajo, Navaho","nativeName":"Diné bizaad, Dinékʼehǰí"},
  {"id":"nb","name":"Norwegian Bokmål","nativeName":"Norsk bokmål"},
  {"id":"nd","name":"North Ndebele","nativeName":"isiNdebele"},
  {"id":"ne","name":"Nepali","nativeName":"नेपाली"},
  {"id":"ng","name":"Ndonga","nativeName":"Owambo"},
  {"id":"nn","name":"Norwegian Nynorsk","nativeName":"Norsk nynorsk"},
  {"id":"no","name":"Norwegian","nativeName":"Norsk"},
  {"id":"ii","name":"Nuosu","nativeName":"ꆈꌠ꒿ Nuosuhxop"},
  {"id":"nr","name":"South Ndebele","nativeName":"isiNdebele"},
  {"id":"oc","name":"Occitan","nativeName":"Occitan"},
  {"id":"oj","name":"Ojibwe, Ojibwa","nativeName":"ᐊᓂᔑᓈᐯᒧᐎᓐ"},
  {"id":"cu","name":"Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic","nativeName":"ѩзыкъ словѣньскъ"},
  {"id":"om","name":"Oromo","nativeName":"Afaan Oromoo"},
  {"id":"or","name":"Oriya","nativeName":"ଓଡ଼ିଆ"},
  {"id":"os","name":"Ossetian, Ossetic","nativeName":"ирон æвзаг"},
  {"id":"pa","name":"Panjabi, Punjabi","nativeName":"ਪੰਜਾਬੀ, پنجابی‎"},
  {"id":"pi","name":"Pāli","nativeName":"पाऴि"},
  {"id":"fa","name":"Persian","nativeName":"فارسی"},
  {"id":"pl","name":"Polish","nativeName":"polski"},
  {"id":"ps","name":"Pashto, Pushto","nativeName":"پښتو"},
  {"id":"pt","name":"Portuguese","nativeName":"Português"},
  {"id":"qu","name":"Quechua","nativeName":"Runa Simi, Kichwa"},
  {"id":"rm","name":"Romansh","nativeName":"rumantsch grischun"},
  {"id":"rn","name":"Kirundi","nativeName":"kiRundi"},
  {"id":"ro","name":"Romanian, Moldavian, Moldovan","nativeName":"română"},
  {"id":"ru","name":"Russian","nativeName":"русский язык"},
  {"id":"sa","name":"Sanskrit (Saṁskṛta)","nativeName":"संस्कृतम्"},
  {"id":"sc","name":"Sardinian","nativeName":"sardu"},
  {"id":"sd","name":"Sindhi","nativeName":"सिन्धी, سنڌي، سندھی‎"},
  {"id":"se","name":"Northern Sami","nativeName":"Davvisámegiella"},
  {"id":"sm","name":"Samoan","nativeName":"gagana faa Samoa"},
  {"id":"sg","name":"Sango","nativeName":"yângâ tî sängö"},
  {"id":"sr","name":"Serbian","nativeName":"српски језик"},
  {"id":"gd","name":"Scottish Gaelic; Gaelic","nativeName":"Gàidhlig"},
  {"id":"sn","name":"Shona","nativeName":"chiShona"},
  {"id":"si","name":"Sinhala, Sinhalese","nativeName":"සිංහල"},
  {"id":"sk","name":"Slovak","nativeName":"slovenčina"},
  {"id":"sl","name":"Slovene","nativeName":"slovenščina"},
  {"id":"so","name":"Somali","nativeName":"Soomaaliga, af Soomaali"},
  {"id":"st","name":"Southern Sotho","nativeName":"Sesotho"},
  {"id":"es","name":"Spanish; Castilian","nativeName":"español, castellano"},
  {"id":"su","name":"Sundanese","nativeName":"Basa Sunda"},
  {"id":"sw","name":"Swahili","nativeName":"Kiswahili"},
  {"id":"ss","name":"Swati","nativeName":"SiSwati"},
  {"id":"sv","name":"Swedish","nativeName":"svenska"},
  {"id":"ta","name":"Tamil","nativeName":"தமிழ்"},
  {"id":"te","name":"Telugu","nativeName":"తెలుగు"},
  {"id":"tg","name":"Tajik","nativeName":"тоҷикӣ, toğikī, تاجیکی‎"},
  {"id":"th","name":"Thai","nativeName":"ไทย"},
  {"id":"ti","name":"Tigrinya","nativeName":"ትግርኛ"},
  {"id":"bo","name":"Tibetan Standard, Tibetan, Central","nativeName":"བོད་ཡིག"},
  {"id":"tk","name":"Turkmen","nativeName":"Türkmen, Түркмен"},
  {"id":"tl","name":"Tagalog","nativeName":"Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔"},
  {"id":"tn","name":"Tswana","nativeName":"Setswana"},
  {"id":"to","name":"Tonga (Tonga Islands)","nativeName":"faka Tonga"},
  {"id":"tr","name":"Turkish","nativeName":"Türkçe"},
  {"id":"ts","name":"Tsonga","nativeName":"Xitsonga"},
  {"id":"tt","name":"Tatar","nativeName":"татарча, tatarça, تاتارچا‎"},
  {"id":"tw","name":"Twi","nativeName":"Twi"},
  {"id":"ty","name":"Tahitian","nativeName":"Reo Tahiti"},
  {"id":"ug","name":"Uighur, Uyghur","nativeName":"Uyƣurqə, ئۇيغۇرچە‎"},
  {"id":"uk","name":"Ukrainian","nativeName":"українська"},
  {"id":"ur","name":"Urdu","nativeName":"اردو"},
  {"id":"uz","name":"Uzbek","nativeName":"zbek, Ўзбек, أۇزبېك‎"},
  {"id":"ve","name":"Venda","nativeName":"Tshivenḓa"},
  {"id":"vi","name":"Vietnamese","nativeName":"Tiếng Việt"},
  {"id":"vo","name":"Volapük","nativeName":"Volapük"},
  {"id":"wa","name":"Walloon","nativeName":"Walon"},
  {"id":"cy","name":"Welsh","nativeName":"Cymraeg"},
  {"id":"wo","name":"Wolof","nativeName":"Wollof"},
  {"id":"fy","name":"Western Frisian","nativeName":"Frysk"},
  {"id":"xh","name":"Xhosa","nativeName":"isiXhosa"},
  {"id":"yi","name":"Yiddish","nativeName":"ייִדיש"},
  {"id":"yo","name":"Yoruba","nativeName":"Yorùbá"},
  {"id":"za","name":"Zhuang, Chuang","nativeName":"Saɯ cueŋƅ, Saw cuengh"}
];
