import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, CheckCircle, ArrowRight } from "lucide-react";

interface TicketFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TicketFormModal = ({ isOpen, onClose }: TicketFormModalProps) => {
  const [formData, setFormData] = useState({
    EMAIL: "",
    FNAME: "",
    PHONEPREFIX: "",
    PHONE: "",
    COUNTRY: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create a hidden form and submit it
    const hiddenForm = document.createElement('form');
    hiddenForm.method = 'POST';
    hiddenForm.action = 'https://app.mailingboss.com/lists/68b6ad768df66/subscribe';
    hiddenForm.target = '_blank';
    hiddenForm.style.display = 'none';
    
    // Add form fields
    const fields = ['EMAIL', 'FNAME', 'PHONEPREFIX', 'PHONE', 'COUNTRY'];
    fields.forEach(field => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = field;
      input.value = formData[field as keyof typeof formData];
      hiddenForm.appendChild(input);
    });
    
    // Append to body and submit
    document.body.appendChild(hiddenForm);
    hiddenForm.submit();
    
    // Clean up
    document.body.removeChild(hiddenForm);
    
    // Show success message and redirect
    setShowSuccess(true);
    setIsSubmitting(false);
    
    // Redirect to payment page after 2 seconds
    setTimeout(() => {
      window.location.href = "https://pay.gtextglobal.com/singapore-retreat-for/";
    }, 2000);
  };

  const phonePrefixOptions = [
    { value: "1USA", label: "USA (+1)" },
    { value: "55BRAZIL", label: "Brazil (+55)" },
    { value: "213ALGERIA", label: "Algeria (+213)" },
    { value: "376ANDORRA", label: "Andorra (+376)" },
    { value: "244ANGOLA", label: "Angola (+244)" },
    { value: "1264ANGUILLA", label: "Anguilla (+1264)" },
    { value: "1268ANTIGUABARBUDA", label: "Antigua & Barbuda (+1268)" },
    { value: "54ARGENTINA", label: "Argentina (+54)" },
    { value: "374ARMENIA", label: "Armenia (+374)" },
    { value: "297ARUBA", label: "Aruba (+297)" },
    { value: "61AUSTRALIA", label: "Australia (+61)" },
    { value: "43AUSTRIA", label: "Austria (+43)" },
    { value: "994AZERBAIJAN", label: "Azerbaijan (+994)" },
    { value: "1242BAHAMAS", label: "Bahamas (+1242)" },
    { value: "973BAHRAIN", label: "Bahrain (+973)" },
    { value: "880BANGLADESH", label: "Bangladesh (+880)" },
    { value: "1246BARBADOS", label: "Barbados (+1246)" },
    { value: "375BELARUS", label: "Belarus (+375)" },
    { value: "32BELGIUM", label: "Belgium (+32)" },
    { value: "501BELIZE", label: "Belize (+501)" },
    { value: "229BENIN", label: "Benin (+229)" },
    { value: "1441BERMUDA", label: "Bermuda (+1441)" },
    { value: "975BHUTAN", label: "Bhutan (+975)" },
    { value: "591BOLIVIA", label: "Bolivia (+591)" },
    { value: "387BOSNIAHERZEGOVINA", label: "Bosnia Herzegovina (+387)" },
    { value: "267BOTSWANA", label: "Botswana (+267)" },
    { value: "673BRUNEI", label: "Brunei (+673)" },
    { value: "359BULGARIA", label: "Bulgaria (+359)" },
    { value: "226BURKINAFASO", label: "Burkina Faso (+226)" },
    { value: "257BURUNDI", label: "Burundi (+257)" },
    { value: "855CAMBODIA", label: "Cambodia (+855)" },
    { value: "237CAMEROON", label: "Cameroon (+237)" },
    { value: "1CANADA", label: "Canada (+1)" },
    { value: "238CAPEVERDEISLANDS", label: "Cape Verde Islands (+238)" },
    { value: "1345CAYMANISLANDS", label: "Cayman Islands (+1345)" },
    { value: "236CENTRALAFRICANREPUBLIC", label: "Central African Republic (+236)" },
    { value: "56CHILE", label: "Chile (+56)" },
    { value: "86CHINA", label: "China (+86)" },
    { value: "57COLOMBIA", label: "Colombia (+57)" },
    { value: "269COMOROS", label: "Comoros (+269)" },
    { value: "242CONGO", label: "Congo (+242)" },
    { value: "682COOKISLANDS", label: "Cook Islands (+682)" },
    { value: "506COSTARICA", label: "Costa Rica (+506)" },
    { value: "385CROATIA", label: "Croatia (+385)" },
    { value: "53CUBA", label: "Cuba (+53)" },
    { value: "90392CYPRUSNORTH", label: "Cyprus North (+90392)" },
    { value: "357CYPRUSSOUTH", label: "Cyprus South (+357)" },
    { value: "420CZECHREPUBLIC", label: "Czech Republic (+420)" },
    { value: "45DENMARK", label: "Denmark (+45)" },
    { value: "253DJIBOUTI", label: "Djibouti (+253)" },
    { value: "1809DOMINICA", label: "Dominica (+1809)" },
    { value: "1809DOMINICANREPUBLIC", label: "Dominican Republic (+1809)" },
    { value: "593ECUADOR", label: "Ecuador (+593)" },
    { value: "20EGYPT", label: "Egypt (+20)" },
    { value: "503ELSALVADOR", label: "El Salvador (+503)" },
    { value: "240EQUATORIALGUINEA", label: "Equatorial Guinea (+240)" },
    { value: "291ERITREA", label: "Eritrea (+291)" },
    { value: "372ESTONIA", label: "Estonia (+372)" },
    { value: "251ETHIOPIA", label: "Ethiopia (+251)" },
    { value: "500FALKLANDISLANDS", label: "Falkland Islands (+500)" },
    { value: "298FAROEISLANDS", label: "Faroe Islands (+298)" },
    { value: "679FIJI", label: "Fiji (+679)" },
    { value: "358FINLAND", label: "Finland (+358)" },
    { value: "33FRANCE", label: "France (+33)" },
    { value: "594FRENCHGUIANA", label: "French Guiana (+594)" },
    { value: "689FRENCHPOLYNESIA", label: "French Polynesia (+689)" },
    { value: "241GABON", label: "Gabon (+241)" },
    { value: "220GAMBIA", label: "Gambia (+220)" },
    { value: "7880GEORGIA", label: "Georgia (+7880)" },
    { value: "49GERMANY", label: "Germany (+49)" },
    { value: "233GHANA", label: "Ghana (+233)" },
    { value: "350GIBRALTAR", label: "Gibraltar (+350)" },
    { value: "30GREECE", label: "Greece (+30)" },
    { value: "299GREENLAND", label: "Greenland (+299)" },
    { value: "1473GRENADA", label: "Grenada (+1473)" },
    { value: "590GUADELOUPE", label: "Guadeloupe (+590)" },
    { value: "671GUAM", label: "Guam (+671)" },
    { value: "502GUATEMALA", label: "Guatemala (+502)" },
    { value: "224GUINEA", label: "Guinea (+224)" },
    { value: "245GUINEABISSAU", label: "Guinea - Bissau (+245)" },
    { value: "592GUYANA", label: "Guyana (+592)" },
    { value: "509HAITI", label: "Haiti (+509)" },
    { value: "504HONDURAS", label: "Honduras (+504)" },
    { value: "852HONGKONG", label: "Hong Kong (+852)" },
    { value: "36HUNGARY", label: "Hungary (+36)" },
    { value: "354ICELAND", label: "Iceland (+354)" },
    { value: "91INDIA", label: "India (+91)" },
    { value: "62INDONESIA", label: "Indonesia (+62)" },
    { value: "98IRAN", label: "Iran (+98)" },
    { value: "964IRAQ", label: "Iraq (+964)" },
    { value: "353IRELAND", label: "Ireland (+353)" },
    { value: "972ISRAEL", label: "Israel (+972)" },
    { value: "39ITALY", label: "Italy (+39)" },
    { value: "1876JAMAICA", label: "Jamaica (+1876)" },
    { value: "81JAPAN", label: "Japan (+81)" },
    { value: "962JORDAN", label: "Jordan (+962)" },
    { value: "7KAZAKHSTAN", label: "Kazakhstan (+7)" },
    { value: "254KENYA", label: "Kenya (+254)" },
    { value: "686KIRIBATI", label: "Kiribati (+686)" },
    { value: "850KOREANORTH", label: "Korea North (+850)" },
    { value: "82KOREASOUTH", label: "Korea South (+82)" },
    { value: "965KUWAIT", label: "Kuwait (+965)" },
    { value: "996KYRGYZSTAN", label: "Kyrgyzstan (+996)" },
    { value: "856LAOS", label: "Laos (+856)" },
    { value: "371LATVIA", label: "Latvia (+371)" },
    { value: "961LEBANON", label: "Lebanon (+961)" },
    { value: "266LESOTHO", label: "Lesotho (+266)" },
    { value: "231LIBERIA", label: "Liberia (+231)" },
    { value: "218LIBYA", label: "Libya (+218)" },
    { value: "417LIECHTENSTEIN", label: "Liechtenstein (+417)" },
    { value: "370LITHUANIA", label: "Lithuania (+370)" },
    { value: "352LUXEMBOURG", label: "Luxembourg (+352)" },
    { value: "853MACAO", label: "Macao (+853)" },
    { value: "389MACEDONIA", label: "Macedonia (+389)" },
    { value: "261MADAGASCAR", label: "Madagascar (+261)" },
    { value: "265MALAWI", label: "Malawi (+265)" },
    { value: "60MALAYSIA", label: "Malaysia (+60)" },
    { value: "960MALDIVES", label: "Maldives (+960)" },
    { value: "223MALI", label: "Mali (+223)" },
    { value: "356MALTA", label: "Malta (+356)" },
    { value: "692MARSHALLISLANDS", label: "Marshall Islands (+692)" },
    { value: "596MARTINIQUE", label: "Martinique (+596)" },
    { value: "222MAURITANIA", label: "Mauritania (+222)" },
    { value: "269MAYOTTE", label: "Mayotte (+269)" },
    { value: "52MEXICO", label: "Mexico (+52)" },
    { value: "691MICRONESIA", label: "Micronesia (+691)" },
    { value: "373MOLDOVA", label: "Moldova (+373)" },
    { value: "377MONACO", label: "Monaco (+377)" },
    { value: "976MONGOLIA", label: "Mongolia (+976)" },
    { value: "1664MONTSERRAT", label: "Montserrat (+1664)" },
    { value: "212MOROCCO", label: "Morocco (+212)" },
    { value: "258MOZAMBIQUE", label: "Mozambique (+258)" },
    { value: "95MYANMAR", label: "Myanmar (+95)" },
    { value: "264NAMIBIA", label: "Namibia (+264)" },
    { value: "674NAURU", label: "Nauru (+674)" },
    { value: "977NEPAL", label: "Nepal (+977)" },
    { value: "31NETHERLANDS", label: "Netherlands (+31)" },
    { value: "687NEWCALEDONIA", label: "New Caledonia (+687)" },
    { value: "64NEWZEALAND", label: "New Zealand (+64)" },
    { value: "505NICARAGUA", label: "Nicaragua (+505)" },
    { value: "227NIGER", label: "Niger (+227)" },
    { value: "234NIGERIA", label: "Nigeria (+234)" },
    { value: "683NIUE", label: "Niue (+683)" },
    { value: "672NORFOLKISLANDS", label: "Norfolk Islands (+672)" },
    { value: "670NORTHERNMARIANAS", label: "Northern Marianas (+670)" },
    { value: "47NORWAY", label: "Norway (+47)" },
    { value: "968OMAN", label: "Oman (+968)" },
    { value: "680PALAU", label: "Palau (+680)" },
    { value: "507PANAMA", label: "Panama (+507)" },
    { value: "675PAPUANEWGUINEA", label: "Papua New Guinea (+675)" },
    { value: "595PARAGUAY", label: "Paraguay (+595)" },
    { value: "51PERU", label: "Peru (+51)" },
    { value: "63PHILIPPINES", label: "Philippines (+63)" },
    { value: "48POLAND", label: "Poland (+48)" },
    { value: "351PORTUGAL", label: "Portugal (+351)" },
    { value: "1787PUERTORICO", label: "Puerto Rico (+1787)" },
    { value: "974QATAR", label: "Qatar (+974)" },
    { value: "262REUNION", label: "Reunion (+262)" },
    { value: "40ROMANIA", label: "Romania (+40)" },
    { value: "7RUSSIA", label: "Russia (+7)" },
    { value: "250RWANDA", label: "Rwanda (+250)" },
    { value: "378SANMARINO", label: "San Marino (+378)" },
    { value: "239SAOTOMEPRINCIPE", label: "Sao Tome & Principe (+239)" },
    { value: "966SAUDIARABIA", label: "Saudi Arabia (+966)" },
    { value: "221SENEGAL", label: "Senegal (+221)" },
    { value: "381SERBIA", label: "Serbia (+381)" },
    { value: "248SEYCHELLES", label: "Seychelles (+248)" },
    { value: "232SIERRALEONE", label: "Sierra Leone (+232)" },
    { value: "65SINGAPORE", label: "Singapore (+65)" },
    { value: "421SLOVAKREPUBLIC", label: "Slovak Republic (+421)" },
    { value: "386SLOVENIA", label: "Slovenia (+386)" },
    { value: "677SOLOMONISLANDS", label: "Solomon Islands (+677)" },
    { value: "252SOMALIA", label: "Somalia (+252)" },
    { value: "27SOUTHAFRICA", label: "South Africa (+27)" },
    { value: "34SPAIN", label: "Spain (+34)" },
    { value: "94SRILANKA", label: "Sri Lanka (+94)" },
    { value: "290STHELENA", label: "St. Helena (+290)" },
    { value: "1869STKITTS", label: "St. Kitts (+1869)" },
    { value: "1758STLUCIA", label: "St. Lucia (+1758)" },
    { value: "249SUDAN", label: "Sudan (+249)" },
    { value: "597SURINAME", label: "Suriname (+597)" },
    { value: "268SWAZILAND", label: "Swaziland (+268)" },
    { value: "46SWEDEN", label: "Sweden (+46)" },
    { value: "41SWITZERLAND", label: "Switzerland (+41)" },
    { value: "963SYRIA", label: "Syria (+963)" },
    { value: "886TAIWAN", label: "Taiwan (+886)" },
    { value: "7TAJIKSTAN", label: "Tajikstan (+7)" },
    { value: "66THAILAND", label: "Thailand (+66)" },
    { value: "228TOGO", label: "Togo (+228)" },
    { value: "676TONGA", label: "Tonga (+676)" },
    { value: "1868TRINIDADTOBAGO", label: "Trinidad & Tobago (+1868)" },
    { value: "216TUNISIA", label: "Tunisia (+216)" },
    { value: "90TURKEY", label: "Turkey (+90)" },
    { value: "7TURKMENISTAN", label: "Turkmenistan (+7)" },
    { value: "993TURKMENISTAN", label: "Turkmenistan (+993)" },
    { value: "1649TURKSCAICOSISLANDS", label: "Turks & Caicos Islands (+1649)" },
    { value: "688TUVALU", label: "Tuvalu (+688)" },
    { value: "256UGANDA", label: "Uganda (+256)" },
    { value: "380UKRAINE", label: "Ukraine (+380)" },
    { value: "44UNITEDKINGDOM", label: "United Kingdom (+44)" },
    { value: "971UNITEDARABEMIRATES", label: "United Arab Emirates (+971)" },
    { value: "598URUGUAY", label: "Uruguay (+598)" },
    { value: "7UZBEKISTAN", label: "Uzbekistan (+7)" },
    { value: "678VANUATU", label: "Vanuatu (+678)" },
    { value: "379VATICANCITY", label: "Vatican City (+379)" },
    { value: "58VENEZUELA", label: "Venezuela (+58)" },
    { value: "84VIETNAM", label: "Vietnam (+84)" },
    { value: "84VIRGINISLANDSBRITISH", label: "Virgin Islands - British (+84)" },
    { value: "84VIRGINISLANDSUS", label: "Virgin Islands - US (+84)" },
    { value: "681WALLISFUTUNA", label: "Wallis & Futuna (+681)" },
    { value: "969YEMENNORTH", label: "Yemen (North) (+969)" },
    { value: "967YEMENSOUTH", label: "Yemen (South) (+967)" },
    { value: "260ZAMBIA", label: "Zambia (+260)" },
    { value: "263ZIMBABWE", label: "Zimbabwe (+263)" },
    { value: "599CURAAO", label: "Curaçao (+599)" }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-white border-0 shadow-2xl">
        <DialogHeader className="relative">
          <DialogTitle className="text-2xl font-serif font-bold text-navy text-center">
            Claim Your Seat
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-6 w-6 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>
        
        {showSuccess ? (
          <div className="text-center py-8">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-2">Success!</h3>
              <p className="text-gray-600 mb-4">
                Your information has been submitted successfully. You're now being redirected to complete your registration.
              </p>
            </div>
            
            <div className="bg-gold/10 border border-gold/20 rounded-lg p-4 mb-6">
              <div className="flex items-center justify-center text-gold">
                <ArrowRight className="w-5 h-5 mr-2 animate-pulse" />
                <span className="font-semibold">Redirecting to payment page...</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-500">
              If you're not redirected automatically, 
              <a 
                href="https://pay.gtextglobal.com/singapore-retreat-for/" 
                className="text-gold hover:text-gold-dark font-semibold ml-1"
              >
                click here
              </a>
            </p>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="space-y-6"
          >
          <div className="space-y-2">
            <Label htmlFor="EMAIL" className="text-navy font-semibold">
              Email Address *
            </Label>
            <Input
              id="EMAIL"
              name="EMAIL"
              type="email"
              placeholder="Enter your email address"
              value={formData.EMAIL}
              onChange={(e) => handleInputChange("EMAIL", e.target.value)}
              required
              className="border-gray-300 focus:border-gold focus:ring-gold"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="FNAME" className="text-navy font-semibold">
              Full Name *
            </Label>
            <Input
              id="FNAME"
              name="FNAME"
              type="text"
              placeholder="Enter your full name"
              value={formData.FNAME}
              onChange={(e) => handleInputChange("FNAME", e.target.value)}
              required
              className="border-gray-300 focus:border-gold focus:ring-gold"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="PHONEPREFIX" className="text-navy font-semibold">
              Phone Prefix *
            </Label>
            <Select
              value={formData.PHONEPREFIX}
              onValueChange={(value) => handleInputChange("PHONEPREFIX", value)}
              required
            >
              <SelectTrigger className="border-gray-300 focus:border-gold focus:ring-gold">
                <SelectValue placeholder="Select your country code" />
              </SelectTrigger>
              <SelectContent className="max-h-60">
                {phonePrefixOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="PHONE" className="text-navy font-semibold">
              Phone Number *
            </Label>
            <Input
              id="PHONE"
              name="PHONE"
              type="text"
              placeholder="Enter your phone number"
              value={formData.PHONE}
              onChange={(e) => handleInputChange("PHONE", e.target.value)}
              required
              className="border-gray-300 focus:border-gold focus:ring-gold"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="COUNTRY" className="text-navy font-semibold">
              Country *
            </Label>
            <Input
              id="COUNTRY"
              name="COUNTRY"
              type="text"
              placeholder="Enter your country"
              value={formData.COUNTRY}
              onChange={(e) => handleInputChange("COUNTRY", e.target.value)}
              required
              className="border-gray-300 focus:border-gold focus:ring-gold"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold hover:bg-gold-dark text-navy-dark font-bold py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Processing..." : "Subscribe & Claim My Seat"}
          </Button>
        </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TicketFormModal;
