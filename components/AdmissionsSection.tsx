import { FormEvent, useEffect, useState } from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { ANNOUNCEMENTS, PROGRAMMES } from '../data/collegeData';

interface AdmissionsSectionProps {
  modalOpen: boolean;
  defaultProgramme: string;
  onCloseModal: () => void;
}

interface EnquiryFormState {
  fullName: string;
  email: string;
  phone: string;
  programme: string;
  streamMarks: string;
  notes: string;
}

const INITIAL_FORM: EnquiryFormState = {
  fullName: '',
  email: '',
  phone: '',
  programme: PROGRAMMES[0].title,
  streamMarks: '',
  notes: '',
};

export function AdmissionsSection({
  modalOpen,
  defaultProgramme,
  onCloseModal,
}: AdmissionsSectionProps) {
  const [form, setForm] = useState<EnquiryFormState>(INITIAL_FORM);
  const [formError, setFormError] = useState<string | null>(null);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const [modalForm, setModalForm] = useState<EnquiryFormState>(INITIAL_FORM);
  const [modalError, setModalError] = useState<string | null>(null);
  const [modalRef, setModalRef] = useState<string | null>(null);

  useEffect(() => {
    if (defaultProgramme) {
      setModalForm((prev) => ({ ...prev, programme: defaultProgramme }));
    }
  }, [defaultProgramme]);

  const validateFields = (state: EnquiryFormState): string | null => {
    if (state.fullName.trim().length < 2) {
      return 'Please enter the applicant’s full name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email.trim())) {
      return 'Please enter a valid email address.';
    }
    if (!/^[+\d\s-]{8,15}$/.test(state.phone.trim())) {
      return 'Please enter a valid 10-digit mobile number.';
    }
    return null;
  };

  const generateRefCode = () =>
    `SKASC-2026-${Math.floor(1000 + Math.random() * 9000)}`;

  const handleEnquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    const err = validateFields(form);
    if (err) {
      setFormError(err);
      return;
    }
    setFormError(null);
    setSubmittedRef(generateRefCode());
  };

  const handleModalSubmit = (e: FormEvent) => {
    e.preventDefault();
    const err = validateFields(modalForm);
    if (err) {
      setModalError(err);
      return;
    }
    setModalError(null);
    setModalRef(generateRefCode());
  };

  return (
    <>
      <section id="notices" className="py-16 lg:py-24 bg-white border-b border-[#E4DED3]">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Notices & Academic Circulars */}
            <div className="lg:col-span-6">
              <p className="text-xs font-medium tracking-wider uppercase text-[#5C5852]">
                Circulars & Announcements <span aria-hidden="true">·</span> 2026–27 Session
              </p>
              <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-semibold text-[#1A1917] [text-wrap:balance]">
                Campus Notices & Admissions Desk
              </h2>
              <p className="mt-2.5 text-base text-[#4A4640]">
                Official notifications issued by the Admissions Office, Controller of Examinations, and Placement Cell.
              </p>

              <div className="mt-8 divide-y divide-[#E4DED3] border-y border-[#E4DED3]">
                {ANNOUNCEMENTS.map((item) => (
                  <article key={item.id} className="py-5">
                    <p className="text-xs text-[#5C5852] font-mono tabular-nums">
                      {item.date} <span aria-hidden="true">·</span> {item.category}
                    </p>
                    <h3 className="mt-1.5 font-serif text-lg font-semibold text-[#1A1917]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#4A4640] leading-relaxed">
                      {item.detail}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            {/* Right Column: Admissions & Campus Visit Enquiry Form */}
            <div className="lg:col-span-6 bg-[#FAF8F5] border border-[#E4DED3] rounded-xl p-6 sm:p-8">
              <p className="text-xs font-medium tracking-wider uppercase text-[#5C5852]">
                Admissions Office <span aria-hidden="true">·</span> Kuniamuthur Campus
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-[#1A1917]">
                Request Prospectus & Admission Guidance
              </h3>
              <p className="mt-1.5 text-sm text-[#4A4640]">
                Receive fee structure details, scholarship eligibility, and counselling dates from our Admissions Counsellors.
              </p>

              {submittedRef ? (
                <div className="mt-6 bg-white border border-[#E4DED3] rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#14326B] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-[#1A1917]">
                        Enquiry Registered
                      </h4>
                      <p className="mt-1 text-sm text-[#4A4640]">
                        Thank you, <span className="font-medium text-[#1A1917]">{form.fullName}</span>. Your admissions enquiry for{' '}
                        <span className="font-medium text-[#1A1917]">{form.programme}</span> has been recorded.
                      </p>
                      <p className="mt-3 font-mono text-xs text-[#14326B] tabular-nums">
                        Reference ID: {submittedRef}
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setForm(INITIAL_FORM);
                          setSubmittedRef(null);
                        }}
                        className="mt-5 px-4 py-2 text-xs font-medium text-[#14326B] bg-[#F1EDE6] rounded-lg hover:bg-[#E7E1D6] cursor-pointer"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} noValidate className="mt-6 space-y-4">
                  {formError && (
                    <div
                      role="alert"
                      className="px-4 py-3 text-xs font-medium text-[#991B1B] bg-[#FEF2F2] border border-[#FECACA] rounded-lg"
                    >
                      {formError}
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="enquiry-name"
                      className="block text-xs font-medium text-[#1A1917] mb-1.5"
                    >
                      Applicant Full Name
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder="e.g. Kavya Subramanian"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C3] rounded-lg text-[#1A1917] focus:outline-none focus:border-[#14326B]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="enquiry-email"
                        className="block text-xs font-medium text-[#1A1917] mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="enquiry-email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="applicant@example.com"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C3] rounded-lg text-[#1A1917] focus:outline-none focus:border-[#14326B]"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="enquiry-phone"
                        className="block text-xs font-medium text-[#1A1917] mb-1.5"
                      >
                        Mobile Number
                      </label>
                      <input
                        id="enquiry-phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 98422 00000"
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C3] rounded-lg text-[#1A1917] focus:outline-none focus:border-[#14326B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-programme"
                      className="block text-xs font-medium text-[#1A1917] mb-1.5"
                    >
                      Preferred Programme
                    </label>
                    <select
                      id="enquiry-programme"
                      value={form.programme}
                      onChange={(e) => setForm({ ...form, programme: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C3] rounded-lg text-[#1A1917] focus:outline-none focus:border-[#14326B]"
                    >
                      {PROGRAMMES.map((prog) => (
                        <option key={prog.id} value={prog.title}>
                          {prog.title} ({prog.level})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-notes"
                      className="block text-xs font-medium text-[#1A1917] mb-1.5"
                    >
                      Questions or Hostel / Scholarship Enquiry (Optional)
                    </label>
                    <textarea
                      id="enquiry-notes"
                      rows={3}
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      placeholder="Specify higher secondary stream, sports quota, or campus tour request..."
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C3] rounded-lg text-[#1A1917] focus:outline-none focus:border-[#14326B]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-5 text-sm font-medium text-white bg-[#14326B] rounded-lg hover:bg-[#0E244F] transition-colors duration-150 cursor-pointer"
                  >
                    Request Prospectus & Call Back
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Online Admissions Application Modal */}
      {modalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="admissions-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 sm:p-6"
          onClick={onCloseModal}
        >
          <div
            className="bg-[#FAF8F5] border border-[#E4DED3] rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#E4DED3]">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[#5C5852]">
                  Online Application Portal <span aria-hidden="true">·</span> 2026–27
                </p>
                <h3
                  id="admissions-modal-title"
                  className="mt-1 font-serif text-2xl font-semibold text-[#1A1917]"
                >
                  Apply to Sree Krishna College
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close admissions application"
                onClick={onCloseModal}
                className="w-10 h-10 inline-flex items-center justify-center rounded-lg border border-[#E4DED3] bg-white text-[#1A1917] hover:bg-[#F1EDE6] cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {modalRef ? (
              <div className="mt-6 bg-white border border-[#E4DED3] rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#14326B] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-[#1A1917]">
                      Provisional Application Submitted
                    </h4>
                    <p className="mt-1.5 text-sm text-[#4A4640]">
                      We have registered your interest for{' '}
                      <span className="font-medium text-[#1A1917]">{modalForm.programme}</span>. Verification instructions have been prepared for{' '}
                      <span className="font-medium text-[#1A1917]">{modalForm.email}</span>.
                    </p>
                    <p className="mt-3 font-mono text-xs text-[#14326B] tabular-nums">
                      Application No: {modalRef}
                    </p>
                    <div className="mt-5 flex gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          setModalRef(null);
                          setModalForm(INITIAL_FORM);
                          onCloseModal();
                        }}
                        className="px-4 py-2 text-xs font-medium text-white bg-[#14326B] rounded-lg hover:bg-[#0E244F] cursor-pointer"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} noValidate className="mt-5 space-y-4">
                {modalError && (
                  <div
                    role="alert"
                    className="px-4 py-3 text-xs font-medium text-[#991B1B] bg-[#FEF2F2] border border-[#FECACA] rounded-lg"
                  >
                    {modalError}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="modal-name"
                    className="block text-xs font-medium text-[#1A1917] mb-1.5"
                  >
                    Candidate Full Name (as per 10th / 12th Marksheet)
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    value={modalForm.fullName}
                    onChange={(e) => setModalForm({ ...modalForm, fullName: e.target.value })}
                    placeholder="Full Name"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C3] rounded-lg text-[#1A1917] focus:outline-none focus:border-[#14326B]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="modal-email"
                      className="block text-xs font-medium text-[#1A1917] mb-1.5"
                    >
                      Email Address
                    </label>
                    <input
                      id="modal-email"
                      type="email"
                      required
                      value={modalForm.email}
                      onChange={(e) => setModalForm({ ...modalForm, email: e.target.value })}
                      placeholder="student@example.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C3] rounded-lg text-[#1A1917] focus:outline-none focus:border-[#14326B]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="modal-phone"
                      className="block text-xs font-medium text-[#1A1917] mb-1.5"
                    >
                      Mobile Number
                    </label>
                    <input
                      id="modal-phone"
                      type="tel"
                      required
                      value={modalForm.phone}
                      onChange={(e) => setModalForm({ ...modalForm, phone: e.target.value })}
                      placeholder="+91 98422 00000"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C3] rounded-lg text-[#1A1917] focus:outline-none focus:border-[#14326B]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="modal-programme"
                    className="block text-xs font-medium text-[#1A1917] mb-1.5"
                  >
                    Programme Applying For
                  </label>
                  <select
                    id="modal-programme"
                    value={modalForm.programme}
                    onChange={(e) => setModalForm({ ...modalForm, programme: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C3] rounded-lg text-[#1A1917] focus:outline-none focus:border-[#14326B]"
                  >
                    {PROGRAMMES.map((prog) => (
                      <option key={prog.id} value={prog.title}>
                        {prog.title} ({prog.level})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="modal-marks"
                    className="block text-xs font-medium text-[#1A1917] mb-1.5"
                  >
                    Higher Secondary / Qualifying Aggregate % (Optional)
                  </label>
                  <input
                    id="modal-marks"
                    type="text"
                    value={modalForm.streamMarks}
                    onChange={(e) => setModalForm({ ...modalForm, streamMarks: e.target.value })}
                    placeholder="e.g. 91.5% (Mathematics / Computer Science)"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8D0C3] rounded-lg text-[#1A1917] focus:outline-none focus:border-[#14326B]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onCloseModal}
                    className="px-4 py-2.5 text-sm font-medium text-[#4A4640] bg-white border border-[#E4DED3] rounded-lg hover:bg-[#F1EDE6] cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 text-sm font-medium text-white bg-[#14326B] rounded-lg hover:bg-[#0E244F] cursor-pointer"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
