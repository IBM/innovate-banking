/* eslint-disable max-len */
module.exports = req => {
	return {
		meta: {
			title: 'Innovate Banking',
			slogan: 'Eine Initiative von IBM',
			isHome: false,
		},
		components: [
			{
				name: 'MainNavigation',
				props: {
					items: [
						{
							name: 'Kundenerlebnis',
							url: 'kundenerlebnis',
							active: true,
							current: false,
						},
						{
							name: 'Kundenerlebnis',
							url: 'kundenerlebnis',
							active: true,
							current: false,
						},
						{
							name: 'Risk & Compliance',
							url: 'risk-compliance',
							active: true,
							current: false,
						},
						{
							name: 'Anwendungssysteme',
							url: 'anwendungssysteme',
							active: true,
							current: false,
						},
						{
							name: 'IBM Banking Platform',
							url: 'banking-plattform',
							active: true,
							current: false,
						},
					],
				},
			},
			{
				name: 'Stage',
				props: {
					heading: 'Impressum',
					image: {
						src: '/img/stage-subpage.png',
						width: 1056,
						height: 386,
						alt: 'Impressum',
					},
					imageMobile: {
						src: '/img/stage-subpage-mobile.png',
						width: 672,
						height: 672,
						alt: 'Impressum',
					},
				},
			},
			{
				name: 'AnchorNavigation',
				props: {
					items: [
						{
							name: 'Innovate Banking',
							link: 'top',
							isTop: true,
						},
						{
							name: 'Ansprechpartner',
							link: 'ansprechpartner',
						},
						{
							name: 'Nutzungsbedingungen',
							link: 'nutzungsbedingungen',
						},
						{
							name: 'Datenschutz',
							link: 'datenschutz',
						},
					],
				},
			},
			{
				name: 'Section',
				props: {
					id: 'ansprechpartner',
					titles: {
						left: '<p>Ansprechpartner</p>',
					},
					children: [
						{
							name: 'RichText',
							props: {
								content:
									'<p>IBM Deutschland GmbH<br />IBM-Allee 1<br />71139 Ehningen<br />Postanschrift: 71137 Ehningen</p><p>Vorsitzender des Aufsichtsrats: Sebastian&nbsp;Krause<br />Geschäftsführung: Gregor&nbsp;Pillen (Vorsitzender), Agnes&nbsp;Heftberger, Gabriele&nbsp;Schwarenthorer, Christian&nbsp;Noll, Nicole&nbsp;Reimer, Frank&nbsp;Theisen</p><p>Sitz der Gesellschaft: Ehningen<br />UID Nummer: DE145178813<br />Steuer Nr.: 56450/00486<br />Registergericht: Amtsgericht Stuttgart, HRB14562<br />WEEE-Reg.-Nr.: DE99369940</p><p><a href="https://www.ibm.com/de-de/marketing/unternehmen/gesellschaften/" target="_blank" rel="noopener noreferrer">IBM Gesellschaften</a></p><p>Kontakt:<br />Hallo IBM<br />Tel. +49 800 225 5426<br />E-mail: <a href="mailto:halloibm@de.ibm.com">halloibm@de.ibm.com</a></p><p>Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-VO: Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie unter dem angegebenen Hyperlink erreichen können.</p><p><a href="http://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">http://ec.europa.eu/consumers/odr/</a></p>',
							},
						},
					],
				},
			},
			{
				name: 'Section',
				props: {
					id: 'nutzungsbedingungen',
					titles: {
						left: '<p>Nutzungsbedingungen</p>',
					},
					children: [
						{
							name: 'RichText',
							props: {
								content:
									'<p><strong>Übersicht</strong></p><p>Die folgenden Bedingungen stellen eine Vereinbarung zwischen Ihnen und IBM dar. Durch den Zugriff auf diese Website oder deren Nutzung bestätigen Sie, dass Sie diese Bedingungen gelesen haben, verstehen sowie damit einverstanden sind, und Sie verpflichten sich dazu, alle geltenden Gesetze und Bestimmungen, einschließlich der Exportkontrollgesetze, einzuhalten. Wenn Sie diesen Bedingungen nicht zustimmen, dürfen Sie diese Website nicht nutzen.</p><p>IBM behält sich vor, diese Nutzungsbedingungen und andere auf dieser Website enthaltenen Informationen jederzeit und ohne vorherige Ankündigung zu ändern. Das gilt auch für Verbesserungen oder Änderungen an den auf dieser Website beschriebenen Produkten, Services oder Programmen.</p><p><strong>Allgemeines</strong></p><p><p>Diese Website enthält Hinweise auf Eigentums-/Schutzrechte und Informationen zu Urheberrechten, die beachtet und befolgt werden müssen. Weitere Informationen erhalten Sie unter der Registerkarte „Informationen zu Urheberrecht und Schutzmarken“.</p><p>IBM gewährt Ihnen das nicht ausschließliche, nicht übertragbare und begrenzte Recht, die in dieser Website enthaltenen Webseiten als Kunde oder potenzieller Kunde von IBM aufzurufen und anzuzeigen, sofern Sie diese Nutzungsbedingungen einhalten und sämtliche Urheberrechts-, Marken- und sonstigen Eigentumsvermerke beibehalten. Crawler dürfen nur in dem Umfang zum Durchsuchen dieser Website verwendet werden, der im robots.txt-Protokoll dieser Website genehmigt ist, und IBM darf Crawler nach eigenem Ermessen blockieren. Die im Rahmen dieser Vereinbarung berechtigte Nutzung ist nicht kommerzieller Natur (d. h., Sie dürfen die Inhalte, auf die Sie auf dieser Website oder über diese Website zugreifen, nicht verkaufen). Eine anderweitige Nutzung dieser Website ist untersagt.</p><p>Mit Ausnahme des begrenzten Rechts im vorstehenden Absatz gewährt IBM Ihnen keine ausdrücklichen oder stillschweigenden Rechte oder Lizenzen im Zusammenhang mit Patenten, Schutzmarken, Urheberrechten oder sonstigen Eigentums- oder gewerblichen Schutz- und Urheberrechten. Sie sind insbesondere nicht berechtigt, den Inhalt dieser Website auf einer anderen Website oder in einem anderen Medium zu kopieren. Software und sonstige Materialien mit eigenen Lizenz-, Vertragsbedingungen und Hinweisen, die auf dieser Website heruntergeladen, aufgerufen oder anderweitig genutzt werden können, unterliegen diesen Bedingungen und Hinweisen. Wenn Sie diese Bedingungen oder die auf dieser Website enthaltenen Bedingungen nicht einhalten, verlieren Sie automatisch alle Ihnen gewährten Rechte und sind verpflichtet, alle sich in Ihrem Besitz, in Ihrer Verwahrung oder unter Ihrer Kontrolle befindlichen Kopien heruntergeladener Materialien unverzüglich zu zerstören.</p><p><strong>Haftungsausschluss</strong></p><p>Diese Website kann technische Ungenauigkeiten oder typographische Fehler enthalten und IBM übernimmt keine Gewährleistung für die Richtigkeit der veröffentlichten Informationen. Bitte überprüfen Sie, ob Sie die aktuellsten Seiten im Rahmen dieser Website nutzen und ob die Informationen richtig und vollständig sind, bevor Sie die Informationen verwenden, um Entscheidungen im Zusammenhang mit Services, Produkten oder anderen auf dieser Website beschriebenen Sachen zu treffen.</p><p>Werden Bestimmungen dieser Nutzungsbedingungen von einem zuständigen Gericht als unwirksam erklärt, bleibt die Gültigkeit der restlichen Nutzungsbedingungen davon unberührt, sofern sich diese Unwirksamkeit nicht wesentlich auf die Rechte der Parteien im Rahmen dieser Nutzungsbedingungen auswirkt.</p><p><strong>Aussagen bezüglich Zukunft und Sicherheit</strong></p><p>Mit Ausnahme von allgemein gültigen Informationen und Beschreibungen kann es sich bei den auf dieser Website enthaltenen Aussagen um zukunftsorientierte Aussagen handeln. Diese Aussagen beinhalten Risiken, Unsicherheiten und andere Faktoren, die dazu führen können, dass tatsächliche Ergebnisse von diesen Aussagen erheblich abweichen können.</p><p><strong>Vertrauliche Informationen</strong></p><p>IBM bittet Sie, keine vertraulichen oder urheberrechtlich geschützten Informationen über diese Website an uns zu schicken. Bitte beachten Sie, dass wir jede Information oder jedes Material, das uns auf diesem Wege erreicht, als NICHT vertraulich betrachten. Wenn Sie uns Informationen oder Materialien schicken, räumen Sie IBM ein unbeschränktes, unwiderrufliches Recht ein, diese zu kopieren, zu reproduzieren, zu veröffentlichen, zu laden, bereitzustellen, weiterzuversenden, zu verteilen, zu veröffentlichen, auszuführen, zu modifizieren, für die Erstellung abgeleiteter Werke zu verwenden und anderweitig unbegrenzt zu nutzen oder zu verarbeiten. Sie stimmen auch zu, dass IBM frei ist, Ideen, Konzepte, Know-how oder Techniken, die Sie uns überlassen haben, für beliebige Zwecke zu nutzen. Wir werden jedoch Ihren Namen nicht bekannt geben oder Sie in einer Veröffentlichung als Einsender der Informationen oder Materialien nennen, es sei denn: a) wir bekommen Ihr Einverständnis, Ihren Namen zu nennen, b) wir informieren Sie, bevor wir das für einen speziellen Teil dieser Website überlassene Material oder die Informationen unter Nennung Ihres Namens veröffentlichen, oder c) wenn gesetzliche Vorgaben dies erfordern. Persönliche Daten, die Sie IBM für die Lieferung von Produkten oder Services bereitstellen, werden in Übereinstimmung mit unseren Datenschutzbestimmungen verarbeitet. Weitere Informationen über die IBM Datenschutzbestimmungen erhalten Sie unter der Registerkarte „Datenschutz“.</p><p><strong>Eingeschränkte Rechte für Benutzer aus US-Regierungsbehörden</strong></p><p>IBM stellt Benutzern aus US-Regierungsbehörden den Software-Download von dieser Website mit „EINGESCHRÄNKTEN RECHTEN“ zur Verfügung. Die Nutzung, Vervielfältigung oder Veröffentlichung unterliegt den Einschränkungen im Rahmen des IBM GSA ADP Schedule-Vertrags.</p><p><strong>Weltweite Gültigkeit</strong></p><p>Informationen, die IBM im Internet veröffentlicht, können Hinweise oder Querverweise auf IBM Produkte, Programme und Services enthalten, die möglicherweise nicht in Ihrem Land angekündigt oder verfügbar sind. Solche Referenzen implizieren nicht die Absicht von IBM, diese Produkte, Programme oder Services auch in Ihrem Land anzukündigen oder verfügbar zu machen. Setzen Sie sich bitte mit Ihrer lokalen IBM Geschäftsstelle in Verbindung, die Sie gern über die Verfügbarkeit dieser Produkte, Programme und Services informiert.</p><p><strong>Geschäftsbeziehungen</strong></p><p>Diese Website kann Links oder Verweise auf Nicht-IBM Websites und andere Quellen enthalten. IBM gibt keinerlei Zusicherungen, Garantien oder Gewährleistungen für andere Nicht-IBM Websites oder Quellen Dritter (wie z. B. Websites von Lenovo), auf die eine IBM Website verweist, auf die der Zugriff über eine IBM Website erfolgt oder die mit einer IBM Website verlinkt sind. Darüber hinaus ist IBM weder an geschäftlichen Transaktionen beteiligt noch für diese verantwortlich, die Sie ggf. mit Dritten abschließen, auch wenn Sie auf einer IBM Website von diesen Dritten erfahren (oder einen Link zu diesen Dritten verwenden). Wenn Sie auf eine Nicht-IBM Website zugreifen, ist das eine unabhängige Website, über deren Inhalt wir keine Kontrolle haben. Dies gilt auch dann, wenn diese Website möglicherweise das IBM Logo enthält. Wir sehen es als Ihre Aufgabe an, sicherzustellen, dass Sie sich vor Viren, Würmern, Trojanischen Pferden oder sonstigen zerstörerischen Programmen schützen; dies gilt auch für den Schutz Ihrer Informationen.</p><p><strong>Links auf diese Website</strong></p><p>IBM erteilt nur für Links auf diese Website eine Zustimmung, bei denen der Link an sich und die Seiten, die über den Link aufgerufen werden, (a) keine Rahmen um eine Seite auf dieser Website erstellen oder andere Techniken verwenden, die die visuelle Darstellung oder Anzeige von Inhalten auf dieser Website verändern, (b) Ihre Geschäftsbeziehung mit IBM nicht falsch darstellen, (c) nicht implizieren, dass IBM Sie, Ihre Website oder Ihre Service- oder Produktangebote unterstützt oder billigt, und (d) keine falschen oder irreführenden Eindrücke über IBM erwecken bzw. das Ansehen oder den Firmenwert im Zusammenhang mit dem Namen oder den Marken von IBM anderweitig schädigen. Eine weitere Voraussetzung für die Zustimmung, einen Link auf diese Website einzurichten, ist Ihr Einverständnis, dass IBM jederzeit nach eigenem Ermessen diese Zustimmung zurückziehen kann. In diesem Fall verpflichten Sie sich, unverzüglich alle entsprechenden Links auf diese Website zu entfernen und die damit verbundene Nutzung von IBM Marken einzustellen.</p><p><strong>GEWÄHRLEISTUNGSAUSSCHLUSS</strong></p><p>DIE NUTZUNG DIESER WEBSITE ERFOLGT AUF EIGENE GEFAHR. ALLE MATERIALIEN, INFORMATIONEN, PRODUKTE, SOFTWARE, PROGRAMME UND SERVICES WERDEN „AS IS“ OHNE GEWÄHRLEISTUNGEN ODER GARANTIEN BEREITGESTELLT. IBM GIBT KEINERLEI GEWÄHRLEISTUNGEN, GARANTIEN ODER ZUSICHERUNGEN, SEIEN SIE AUSDRÜCKLICH, STILLSCHWEIGEND, GESETZLICH ODER ANDERWEITIGER NATUR, EINSCHLIESSLICH DER GEWÄHRLEISTUNGEN DER HANDELSÜBLICHKEIT, DER VERWENDBARKEIT FÜR EINEN BESTIMMTEN ZWECK UND DER NICHTVERLETZUNG VON EIGENTUMSRECHTEN UND GEWERBLICHEN SCHUTZ- UND URHEBERRECHTEN. IBM ÜBERNIMMT KEINE GEWÄHRLEISTUNG ODER GARANTIE FÜR DEN UNTERBRECHUNGSFREIEN, ZEITGERECHTEN, SICHEREN ODER FEHLERFREIEN BETRIEB DIESER WEBSITE.</p><p>SIE STIMMEN ZU, DASS DER DOWNLOAD ODER DIE ANDERWEITIGE BESCHAFFUNG VON MATERIALIEN, INFORMATIONEN, PRODUKTEN, SOFTWARE, PROGRAMMEN ODER SERVICES ÜBER DIESE WEBSITE NACH IHREM EIGENEN ERMESSEN UND AUF EIGENE GEFAHR ERFOLGT UND DASS SIE DIE ALLEINIGE VERANTWORTUNG FÜR DARAUS RESULTIERENDE SCHÄDEN ÜBERNEHMEN, EINSCHLIESSLICH DATENVERLUST ODER SCHÄDEN AN IHREM COMPUTERSYSTEM. EINIGE RECHTSORDNUNGEN ERLAUBEN NICHT DEN AUSSCHLUSS VON GEWÄHRLEISTUNGEN, SODASS OBIGE AUSSCHLÜSSE MÖGLICHERWEISE NICHT ANWENDBAR SIND.</p><p><strong>HAFTUNG</strong></p><p>SOWEIT GESETZLICH ZULÄSSIG, WIRD DIE HAFTUNG VON IBM IHNEN ODER DRITTEN GEGENÜBER FÜR JEGLICHE INDIREKTE SCHÄDEN, SEIEN DIES BEILÄUFIG ENTSTANDENE SCHÄDEN, SPEZIELLE SCHÄDEN, SCHADENSERSATZANSPRÜCHE MIT STRAFCHARAKTER ODER FOLGESCHÄDEN JEGLICHER ART, IM ZUSAMMENHANG MIT DER WEBSITE UND DEREN INHALTEN SOWIE DEREN NUTZUNG AUSGESCHLOSSEN. DIESER AUSSCHLUSS UMFASST AUCH ANDERE WEBSITES ODER SONSTIGE QUELLEN, DIE MIT DIESER WEBSITE VERLINKT SIND, AUF DIE DIESE WEBSITE VERWEIST ODER AUF DIE DER ZUGRIFF ÜBER DIESE WEBSITE ERFOLGT, SOWIE DIE HAFTUNG, DIE SICH AUS DER NUTZUNG ODER DEM DOWNLOAD VON MATERIALIEN, INFORMATIONEN, PRODUKTEN ODER SERVICES ODER DEM ZUGRIFF DARAUF ERGEBEN. AUSGESCHLOSSEN IST BEISPIELSWEISE ABER NICHT AUSSCHLIESSLICH AUCH JEGLICHE HAFTUNG FÜR ENTGANGENEN GEWINN, BETRIEBSUNTERBRECHUNG, AUSGEBLIEBENE EINSPARUNGEN ODER VERLUST VON PROGRAMMEN ODER SONSTIGEN DATEN. DIES GILT AUCH DANN, WENN IBM AUSDRÜCKLICH VON DER MÖGLICHKEIT SOLCHER SCHÄDEN VORAB INFORMIERT WURDE. DIESER HAFTUNGSAUSSCHLUSS GILT FÜR ALLE ANSPRÜCHE, EINSCHLIESSLICH VERTRAGLICHER, GEWÄHRLEISTUNGSBEZOGENER, AUSSERVERTRAGLICHER ODER SONSTIGER ANSPRÜCHE, JEDOCH NICHT BEI GROBER FAHRLÄSSIGKEIT ODER VORSATZ.</p>',
							},
						},
					],
				},
			},
			{
				name: 'Section',
				props: {
					id: 'datenschutz',
					titles: {
						left: '<p>Datenschutz</p>',
					},
					children: [
						{
							name: 'RichText',
							props: {
								content:
									'<p><strong>Diese Datenschutzerklärung gilt ab 01. Dezember 2020.</strong></p><p>Die Vorgängerversion dieser Erklärung finden Sie <a href="https://www.ibm.com/privacy/portal/previous-versions-of-IBM-privacy-statements" target="_blank">hier</a>.</p><p>IBM ist sich der Bedeutung des Schutzes Ihrer personenbezogenen Daten bewusst und setzt sich dafür ein, dass diese verantwortungsvoll und in Übereinstimmung mit den geltenden Datenschutzgesetzen in allen Ländern, in denen IBM geschäftlich tätig ist, verarbeitet werden.</p><p>In dieser Datenschutzerklärung sind die allgemeinen Datenschutzverfahren von IBM beschrieben, die im Hinblick auf die Verarbeitung, einschließlich Erhebung, Verwendung und Weitergabe von personenbezogenen Daten von Nutzern und anderen Personen bei unseren Kunden, Business Partnern, Lieferanten und anderen Unternehmen, mit denen IBM eine Geschäftsbeziehung hat oder in Betracht zieht, gelten. Diese Datenschutzerklärung findet keine Anwendung, soweit IBM personenbezogene Daten im Auftrag und unter der Kontrolle eines Kunden (als „Auftragsverarbeiter“) verarbeitet, z. B. bei Cloud-Services oder Anwendungen („Apps“). Sie kann für die Erhebung von Daten zur Anwendung kommen, die sich auf berechtigte Benutzer dieser Services beziehen, falls IBM diese Daten im eigenen Interesse (als „Verantwortlicher“) verarbeitet.</p><p>Diese Datenschutzerklärung wird durch die <a href="https://www.ibm.com/de-de/privacy/details" target="_blank">IBM Erklärung zum Onlinedatenschutz</a> ergänzt, welche weitere Informationen im Onlinekontext, einschließlich Personalbeschaffung, enthält. Darüber hinaus können auch zusätzliche oder spezifischere Informationen über die Erhebung oder Verwendung personenbezogener Daten auf bestimmten Webseiten oder in Verbindung mit einem bestimmten Produkt oder Service bereitgestellt werden.</p><p><strong>Warum und wie werden Ihre personenbezogenen Daten erhoben und verwendet? </strong></p><p>Ihre personenbezogenen Daten können von uns für verschiedene Zwecke erhoben werden, wie z. B.:</p><ul class="ul"><li><strong>Zugriff auf Webseiten oder andere Onlineservices (einschließlich „Apps“) und deren Nutzung</strong><br/>Wenn Sie eine unserer Webseiten öffnen oder einen Onlineservice nutzen (wobei Verweise auf Onlineservices Desktop- oder mobile Anwendungen oder „Apps“ einschließen), werden Informationen aufgezeichnet, die für den Zugriff, den Betrieb der Webseite und die Einhaltung technischer und rechtlicher Vorgaben in Verbindung mit dem Betrieb unserer Webseite erforderlich sind, wie z. B. Kennwörter, IP-Adresse und Web-Browser-Einstellungen. Es werden auch Informationen über Ihre Aktivitäten während Ihres Besuchs auf der jeweiligen Webseite erhoben, um Ihre Erfahrung auf unseren Webseiten zu personalisieren, beispielsweise Ihre Vorgaben und Einstellungen, und um statistische Daten zu erhalten, um unsere Webseiten, Produkte und Services verbessern und weiterentwickeln zu können.</li><li><strong>Beantwortung Ihrer Anfragen bezüglich Informationen, Bestellung oder Support</strong><br/>Wenn Sie uns (online oder offline) in Verbindung mit einer Anfrage bezüglich Informationen, einer Produkt- oder Servicebestellung, der Bereitstellung von Support oder für die Teilnahme an einem Forum oder die Nutzung eines anderen Social-Computing-Tools kontaktieren, erfassen wir die Informationen, die wir benötigen, um Ihre Anfrage zu erfüllen, Ihnen Zugriff auf das entsprechende Produkt oder den Service zu erteilen, Ihnen Support bereitzustellen und Sie zu kontaktieren. So werden beispielsweise Ihr Name und Ihre Kontaktinformationen, Einzelheiten bezüglich Ihrer Anfrage, Ihrer Vereinbarung mit uns und der Erfüllung, Bereitstellung und Abrechnung Ihrer Bestellung erfasst, zudem können Informationen aus Umfragen zur Kundenzufriedenheit einbezogen werden. Diese Informationen werden zu administrativen Zwecken, zum Schutz unserer Rechte und in Verbindung mit unserer Beziehung zu Ihnen gespeichert.<br/><br/>Sofern Sie Ihren Namen und Ihre Kontaktinformationen bereitstellen, um sich bezüglich einer solchen Anfrage zu registrieren, kann diese Registrierung dazu dienen, Sie beim Besuch unserer Webseiten zu identifizieren. Für die Bestellung der meisten Services und Produkte müssen Sie eine IBMid registriert haben. Durch die Registrierung können Sie auch Ihre Datenschutzeinstellungen anpassen und kontrollieren.</li><li><strong>Ihre Nutzung von IBM Cloud-Services</strong><br/>Wir erfassen Informationen über Ihre Nutzung von IBM Cloud-Services, um die Ausführung von Produktfunktionen zu aktivieren, Ihre Benutzererfahrung zu verbessern, unsere Interaktion mit Ihnen individuell anzupassen, unsere Kunden über die allgemeine Nutzung der Services zu informieren, Support bereitzustellen und unsere Produkte und Services zu verbessern und weiterzuentwickeln. Einzelheiten in Bezug auf die von IBM genutzten Technologien, die von IBM erfassten personenbezogenen Daten und die Kontrolle oder Sperrung von Überwachungsfunktionen oder das Löschen von Cookies finden Sie in der <a href="https://www.ibm.com/de-de/privacy/details" href="_blank">IBM Erklärung zum Onlinedatenschutz</a>.</li><li><strong>Kontaktaufnahme mit Mitarbeitern unserer Kunden, potenziellen Kunden, Partner und Lieferanten</strong><br/>Im Rahmen unserer Beziehung mit Kunden, potenziellen Kunden, Partnern und Lieferanten stellen uns diese unter anderem auch geschäftsbezogene Kontaktinformationen (z. B. Name, geschäftliche Kontaktdaten, Position oder Titel ihrer Mitarbeiter, Auftragnehmer, Berater und berechtigten Benutzer) zum Zwecke des Vertragsmanagements, der Auftragserfüllung, der Bereitstellung von Produkten und Services, der Bereitstellung von Support, der Abrechnung und des Managements der Services oder der Geschäftsbeziehung zur Verfügung.</li><li><strong>Besucherinformation</strong><br/>Wir registrieren Personen, die unsere Standorte besuchen (Name, Identifikation und geschäftsbezogene Kontaktinformationen) und nutzen Kameraüberwachung aus Sicherheitsgründen und zum Schutz von Personen und Eigentum sowie zur Einhaltung gesetzlicher Bestimmungen.</li><li><strong>Marketing</strong><br/>Die meisten Informationen, die wir über Sie erheben, stammen aus unseren direkten Interaktionen mit Ihnen. Wenn Sie sich für eine Veranstaltung registrieren, können wir Informationen (online oder offline) in Verbindung mit der Veranstaltungsorganisation erfassen, aber auch während einer Veranstaltung, wie z. B. die Teilnahme an einzelnen Modulen und Umfrageergebnisse. Wir kombinieren die erfassten personenbezogenen Daten miteinander, um zur Durchführung unserer Geschäftstätigkeit und zu Marketingzwecken zusammengefasste Analysen und Business-Intelligence zu entwickeln. Sie können auswählen, ob Sie Informationen über unsere Produkte und Services per E-Mail, Telefon oder Post erhalten möchten. Wenn Sie unsere Webseiten besuchen oder unsere Services verwenden, stellen wir Ihnen ggf. personalisierte Informationen zur Verfügung. Sie können jederzeit dem Erhalt personalisierter Kommunikation von IBM widersprechen, indem Sie Ihre Präferenzen für Marketingkommunikation&nbsp; <a href="https://myibm.ibm.com/profile/dataprivacypreferences/welcome/de-de" target="_blank">hier</a> festlegen. Bei Abonnements folgen Sie bitte den Anweisungen zur Abmeldung ganz unten in jeder E-Mail. Weitere Informationen hierzu finden Sie in der <a href="https://www.ibm.com/de-de/privacy/details" target="_blank">IBM Erklärung zum Onlinedatenschutz</a>.<br/><br/>Wenn wir angeben, dass wir Ihre personenbezogenen Daten in Verbindung mit einer Anfrage, Bestellung, Transaktion oder Vereinbarung (oder der entsprechenden Vorbereitung) verwenden oder um Ihnen Services bereitzustellen, die Sie angefordert haben (z. B. eine Webseite), tun wir dies, weil es für die Erfüllung einer Vereinbarung mit Ihnen erforderlich ist.<br/><br/>Wenn wir angeben, dass wir Ihre personenbezogenen Daten in Verbindung mit Marketing, der Verbesserung oder Entwicklung unserer Produkte oder Services, aus Sicherheitsgründen oder aufgrund von gesetzlichen Bestimmungen, die nicht in Verbindung mit Ihrer Vereinbarung oder Anforderung stehen, verwenden, tun wir dies basierend auf unserem berechtigten Interesse, dem berechtigten Interesse eines Dritten oder mit Ihrer Einwilligung. Wenn personenbezogene Daten erhoben und verwendet werden, die dem EU-Datenschutzrecht unterliegen, kann dies Auswirkungen auf <a href="#your_rights">Ihre Rechte</a> haben.</li></ul><p><strong>Übermittlung von personenbezogenen Daten</strong></p><p>Als weltweit tätiger Konzern, der eine breite Palette an Produkten und Services anbietet, mit grenzüberschreitenden Geschäftsprozessen, Managementstrukturen und technischen Systemen hat IBM globale Richtlinien sowie Standards und Verfahren implementiert, um einen gleichbleibenden Schutz personenbezogener Daten zu gewährleisten. Als weltweit tätiges Unternehmen können wir Ihre personenbezogenen Daten in Übereinstimmung mit dieser Datenschutzerklärung mit unseren Konzerngesellschaften weltweit austauschen und sie an Standorte in anderen Ländern übermitteln.</p><p>Zwischen von IBM kontrollierten Konzerngesellschaften wird der Zugriff auf personenbezogene Daten nur erteilt, wenn ein berechtigtes Interesse daran besteht und diese für die entsprechenden Zwecke erforderlich sind. In Einzelfällen arbeitet IBM mit Lieferanten in verschiedenen Ländern zusammen, um im Namen von IBM personenbezogene Daten zu erheben, zu verwenden, zu analysieren oder in anderer Art und Weise zu verarbeiten.</p><p>Soweit angemessen oder basierend auf Ihrer Einwilligung kann IBM Ihre personenbezogenen Daten gegebenenfalls auch an ausgewählte Partner weitergeben, die uns dabei unterstützen, Ihnen oder dem Unternehmen, für das Sie arbeiten, Produkte oder Services bereitzustellen oder Ihre Anforderungen zu erfüllen. Bei der Auswahl unserer Lieferanten und Partner werden deren Datenverarbeitungsprozesse berücksichtigt.</p><p>Sollte sich IBM dazu entschließen, Unternehmen in bestimmten Ländern zu verkaufen, zu kaufen, zu fusionieren oder anderweitig zu reorganisieren, kann eine derartige Transaktion eine Offenlegung von personenbezogenen Daten an potentielle oder tatsächliche Käufer bzw. das Erhalten solcher Daten von den Verkäufern einschließen. Es ist gängige Praxis bei IBM, bei derartigen Transaktionen einen entsprechenden Schutz der personenbezogenen Daten zu verlangen.</p><p>Beachten Sie bitte, dass es in bestimmten Situationen möglich ist, dass personenbezogene Daten an Behörden auf Grund von gerichtlicher oder behördlicher Anordnung oder zur Einhaltung des Rechtsweges offengelegt werden müssen. Wir können Ihre personenbezogenen Daten auch weitergeben, um die Rechte und das Eigentum von IBM und IBM Business Partnern, Lieferanten, Kunden oder Dritten zu schützen, wenn berechtigter Grund zur Annahme besteht, dass diese Rechte oder dieses Eigentum beeinträchtigt wurden oder werden könnten.</p><p><strong>Internationale Datenübermittlung</strong><br/><br/>Die internationale Tätigkeit von IBM bringt eine große Anzahl Übermittlungen personenbezogener Daten zwischen verschiedenen IBM Konzerngesellschaften mit sich, sowie an Dritte, die ihren Sitz in den Ländern haben, in denen wir geschäftlich tätig sind. Einige Länder haben Beschränkungen für die Übermittlung personenbezogener Daten umgesetzt, sodass IBM in diesem Zusammenhang verschiedene Maßnahmen ergriffen hat, wie z. B.:</p><ul class="ul"><li>Falls erforderlich, nutzt IBM die von der EU-Kommission genehmigten Standardvertragsklauseln oder vergleichbare Vertragsklauseln in anderen Rechtsordnungen. Dies umfasst Datenübertragungen an Lieferanten oder andere Dritte. <a href="https://www.ibm.com/privacy/portal/contact/de-de" target="_blank">Hier</a> können Sie eine Kopie der EU-Standardvertragsklauseln anfordern.</li><li>IBM hält die <a href="http://cbprs.org/" target="_blank">APEC Cross Border Privacy Rules</a>(CBPR) ein.</li></ul><p>Obwohl das EU-US und das Swiss-US Privacy Shield-Abkommen nicht mehr als Grundlage für die Übermittlung personenbezogener Daten verwendet werden dürfen, hält IBM weiterhin alle Verpflichtungen des EU-US und des Swiss-US Privacy Shield-Abkommens ein. Weitere Informationen finden Sie hier: <a href="https://www.ibm.com/privacy/privacy-shield" target="_blank">IBM Privacy Shield Privacy Policy</a> und <a href="https://www.privacyshield.gov/" target="_blank">US Department of Commerce</a>.</p><p><strong>Sicherheit und Qualität von Informationen</strong><br/><br/>Es ist unser Anliegen, Ihre personenbezogenen Daten zu schützen und ihre Richtigkeit zu gewährleisten. IBM hat angemessene physische, administrative und technische Sicherheitsvorkehrungen implementiert, um Ihre personenbezogenen Daten vor unbefugtem Zugriff, unbefugter Nutzung und Offenlegung zu schützen. Beispielsweise werden bestimmte besonders sensible personenbezogene Daten (z. B. Kreditkartendaten) verschlüsselt, wenn diese über das Internet übertragen werden. Zudem verlangen wir von unseren Lieferanten, diese Daten vor unbefugtem Zugriff, unbefugter Nutzung und Offenlegung zu schützen.</p><p><strong>Aufbewahrungsdauer</strong><br/><br/>Personenbezogene Daten werden nicht länger als notwendig aufbewahrt, um die Zwecke, zu denen sie verarbeitet werden, zu erfüllen, einschließlich der Erfüllung von gesetzlichen oder behördlichen Verpflichtungen (z. B. Prüfung, Abrechnung und gesetzliche Aufbewahrungsfristen), der Abwicklung von Streitfällen und der Begründung, Ausübung oder Verteidigung von Rechtsansprüchen in den Ländern, in denen wir geschäftlich tätig sind.</p><p>Da die Umstände je nach Kontext und Services unterschiedlich sein können, umfassen die in der <a href="https://www.ibm.com/de-de/privacy/details" target="_blank">Erklärung zum Onlinedatenschutz</a> oder einer spezifischen Benachrichtigung enthaltenen Informationen möglicherweise detailliertere Angaben zu den geltenden Aufbewahrungsfristen.</p><hr/><p><strong>Kontakt</strong><br/><br/>Wenn Sie eine Frage zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte unter Verwendung dieses <a href="https://www.ibm.com/privacy/portal/contact/de-de " target="_blank">Formulars</a>. Ihre Nachricht wird an das entsprechende Mitglied des IBM Datenschutzteams, z. B. Datenschutzbeauftragte oder Mitglieder ihrer Teams, weitergeleitet.</p><p>Falls relevant, ist die International Business Machines Corporation (IBM Corp.), 1 North Castle Drive, Armonk, New York, USA, der Verantwortliche für Ihre personenbezogenen Daten, sofern nicht abweichend vereinbart. Sofern die IBM Corp. oder eine von ihr kontrollierte Konzerngesellschaft nach dem Datenschutzgesetz einen gesetzlichen Vertreter im EWR oder im Vereinigten Königreich benennen muss, ist der Vertreter für den EWR die IBM International Group B.V., Johan Huizingalaan 765, 1066 VH Amsterdam, Niederlande, und der Vertreter für das Vereinigte Königreich die IBM United Kingdom Limited, PO Box 41, North Harbour, Portsmouth, Hampshire, PO6 3AU, Vereinigtes Königreich.</p><p>IBM Corp. fungiert in folgenden Situationen nicht als Verantwortlicher:</p><ul class="ul"><li>Personenbezogene Daten, die in Verbindung mit einem Vertragsverhältnis oder bei Eingehen eines Vertragsverhältnisses mit einer bestimmten IBM Konzerngesellschaft verarbeitet werden. In diesem Fall ist der Verantwortliche für personenbezogene Daten die IBM Vertragsgesellschaft, welche das jeweilige Unternehmen ist, mit dem Sie oder Ihr Arbeitgeber den Vertrag geschlossen haben oder schließen werden.</li><li>Personenbezogene Daten, die am physischen Standort einer IBM Konzerngesellschaft erfasst werden. In diesem Fall ist diese Konzerngesellschaft der Verantwortliche für die personenbezogenen Daten.</li></ul><p><strong>Ihre Rechte</strong></p><p>Sie können Auskunft bezüglich Ihrer personenbezogenen Daten, deren Aktualisierung oder Berichtigung und unter bestimmten Umständen deren Löschung anfordern. Außerdem haben Sie das Recht, Direktwerbung zu widersprechen. <a href="https://www.ibm.com/privacy/portal/contact/de-de" target="_blank">Hier</a> kommen Sie zum Anforderungsprozess.</p><p>Möglicherweise haben Sie gemäß dem für Sie geltenden Recht in Bezug auf die Datenverarbeitung zusätzliche Rechte. Weitere Informationen finden Sie <a href="https://www.ibm.com/de-de/privacy/additional-data-subjects-rights" target="_blank">hier</a>.</p><p><strong>Beschwerderecht</strong><br/><br/>Sollten Sie der Ansicht sein, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die geltenden Datenschutzgesetze verstößt, können Sie eine Beschwerde einlegen:</p><ul class="ul"><li>Direkt bei IBM unter Verwendung <a href="https://www.ibm.com/privacy/portal/contact/de-de " target="_blank">dieses Formulars</a>.</li><li>Bei der zuständigen Aufsichtsbehörde. Namen und Kontaktinformationen der zuständigen Aufsichtsbehörden in der Europäischen Union finden Sie <a href="https://ec.europa.eu/justice/article-29/structure/data-protection-authorities/index_en.htm" target="_blank">hier</a>.</li></ul><p><strong>Änderungen an IBM Datenschutzerklärungen</strong><br/><br/>Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren, um Änderungen unserer Datenverwaltungspraxis zu reflektieren. Die überarbeitete Datenschutzerklärung wird an dieser Stelle mit einem aktualisierten Überarbeitungsdatum veröffentlicht. Wir empfehlen Ihnen, die Seite regelmäßig zwecks Kenntnisnahme von Änderungen oder Aktualisierungen zu besuchen. Sofern wir wesentliche Änderungen an dieser Datenschutzerklärung vornehmen sollten, werden wir Sie darüber im oberen Bereich dieser Seite für die Dauer von 30 Tagen informieren. Bei fortgesetzter Nutzung unserer Webseiten nach Inkrafttreten solcher Änderungen gehen wir davon aus, dass Sie die Änderungen gelesen und verstanden haben.</p><hr/><p><strong>Andere Datenschutzerklärungen und -richtlinien</strong></p><p><a href="https://www.ibm.com/de-de/privacy/privacy-interactions" target="_blank">Hier erfahren Sie, wie IBM die Interaktion mit Ihnen gestaltet</a></p><p><a href="https://www.ibm.com/privacy/bcr" target="_blank">IBM Controller Binding Corporate Rules (US)</a></p><p><a href="https://www.ibm.com/de-de/privacy/kyndryl" target="_blank">Ergänzende Datenschutzerklärung für Kyndryl</a></p>',
							},
						},
					],
				},
			},
			{
				name: 'Footer',
				props: {
					links: [
						{
							title: 'Datenschutz',
							url: '/impressum#datenschutz',
						},
						{
							title: 'Nutzungsbedingungen',
							url: '/impressum#nutzungsbedingungen',
						},
						{
							title: 'Barrierefreiheit',
							url: 'https://www.ibm.com/able',
						},
						{
							title: 'Impressum',
							url: '/impressum',
						},
					],
				},
			},
		],
	};
};
