import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Student Privacy Policy | Monarch AI",
  description:
    "Monarch AI Technologies Inc. Student Privacy Policy — what we process, why, who can see it, and how long we keep it.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />

      <main className="pt-28 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm font-semibold tracking-wide uppercase text-[#0094C5] mb-4">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-4 leading-tight">
            Student Privacy Policy
          </h1>
          <p className="text-slate-500 mb-12">
            Effective: September 8th 2026 · Last updated: September 8th 2026 ·
            Version: 1.0
          </p>

          <div className="prose-policy space-y-10 text-slate-600 text-base leading-relaxed">
            <p>
              Monarch AI Technologies Inc. (“Monarch”) provides a student-safety
              platform to schools. Our extension is installed by school
              administrators on school-managed Chromebooks. This policy explains
              what it processes, why, who can see it, and how long we keep it.
            </p>

            <section className="rounded-2xl bg-slate-50 border border-slate-100 p-6 md:p-8">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">
                At a glance
              </h2>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  We read what a student types and images they add, and only on
                  a short, named list of sites the school has approved.
                </li>
                <li>
                  We look for six kinds of safety risk: self-harm, violence,
                  sexual exploitation or grooming, substance use, mental-health
                  crisis, and bullying.
                </li>
                <li>
                  We do not capture audio or video, do not read pages the student
                  didn’t write in, and do not read what an AI assistant writes
                  back.
                </li>
                <li>
                  We never train AI models on student data — us or any company we
                  work with, without exception.
                </li>
                <li>
                  We never sell or rent student data and never use it for
                  advertising.
                </li>
                <li>
                  Content is pseudonymized by default. Only authorized school
                  staff — never Monarch employees — can link it to a named
                  student, and every time they do, it’s logged.
                </li>
                <li>We delete raw captured content after 30 days.</li>
                <li>
                  Monarch raises signals. The school decides what happens next.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                1. Our role
              </h2>
              <div className="space-y-4">
                <p>
                  We work for the school, not for students directly. The school
                  decides whether to use the Service, how to configure it, who
                  may review content, and what to do about anything surfaced. We
                  process student data only on the school’s documented
                  instructions.
                </p>
                <p>
                  Where FERPA applies, the school designates Monarch a School
                  Official with a legitimate educational interest: we perform a
                  function the school would otherwise perform itself, stay under
                  its direct control, use records only for the authorized purpose
                  below, and do not redisclose them.
                </p>
                <p>
                  Because the school holds the records, requests to see, correct,
                  or delete data go to the school (Section 10).
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                2. What the Service does
              </h2>
              <div className="space-y-4">
                <p>
                  <span className="font-semibold text-slate-800">
                    Safety detection.
                  </span>{" "}
                  We analyze text a student types and images a student adds, on
                  school-approved sites, and flag possible early indicators of
                  risk across the six areas above. Indicators go to authorized
                  school staff for human review.
                </p>
                <p>
                  <span className="font-semibold text-slate-800">
                    Site restriction — optional, off unless the school turns it
                    on.
                  </span>{" "}
                  A school may enable enforcement of its own restricted-site
                  list and school-hours window. Rules come from the school’s
                  administrator and are applied by the browser. We never inspect
                  network traffic and cannot read the content of blocked sites.
                  Where enabled, we record only per-domain daily counts of
                  blocked attempts — not individual page requests or timestamps.
                </p>
                <p>
                  <span className="font-semibold text-slate-800">
                    What it is not.
                  </span>{" "}
                  Monarch is a detection and alerting tool. It does not make
                  decisions, is not a mandated reporter, does not discharge the
                  school’s legal duties, and does not guarantee that every risk
                  is detected. It does not replace trained staff.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                3. What we process
              </h2>
              <div className="space-y-4">
                <p>
                  <span className="font-semibold text-slate-800">
                    Student-created content.
                  </span>{" "}
                  Only what the student types or adds. Content they did not
                  create is not read, and AI assistant replies are not read.
                </p>
                <p>
                  <span className="font-semibold text-slate-800">Where.</span>{" "}
                  Content scripts run only on sites named in the manifest: Google
                  Docs, Google Slides, Gmail, Google Search, and the AI
                  assistants Gemini, ChatGPT, and Character.AI. Students
                  increasingly type the things this Service exists to notice into
                  a chatbot rather than a document, where a conventional filter
                  cannot see them. There is no wildcard or all-sites access, and
                  no way to widen the list without a new version Google
                  re-reviews.
                </p>
                <p>
                  <span className="font-semibold text-slate-800">When.</span> The
                  extension is active whenever the device is in use, including
                  outside school hours if the device goes home.
                </p>
                <p>
                  <span className="font-semibold text-slate-800">
                    Risk assessments.
                  </span>{" "}
                  Signals inferred across the six areas, with a confidence score
                  and trend. These belong to the school.
                </p>
                <p>
                  <span className="font-semibold text-slate-800">
                    School account address — once, at enrollment only.
                  </span>{" "}
                  Read solely to match the device to the school’s roster. The
                  address is never stored; we keep only a keyed one-way hash
                  (HMAC). Never used for email or marketing.
                </p>
                <p>
                  <span className="font-semibold text-slate-800">
                    Device identifier.
                  </span>{" "}
                  The enterprise directory device ID, so a re-imaged Chromebook
                  keeps a stable identity in the school’s inventory.
                </p>
                <p>
                  <span className="font-semibold text-slate-800">
                    Blocked-site counts.
                  </span>{" "}
                  Only where site restriction is enabled, as described above.
                </p>
                <p>
                  <span className="font-semibold text-slate-800">
                    Access log.
                  </span>{" "}
                  A tamper-proof, append-only record of who accessed or
                  re-identified what, and when. Contains no captured content.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                4. What we never do
              </h2>
              <p className="mb-4">
                These are contractual obligations in the agreement we sign with
                every school, and each flows down by written contract to every
                company handling student data for us.
              </p>
              <ul className="list-disc pl-5 space-y-3">
                <li>
                  <span className="font-semibold text-slate-800">
                    No AI training.
                  </span>{" "}
                  We do not use student data — and permit no service provider to
                  use it — to train, test, develop, fine-tune, evaluate, or
                  improve any model, algorithm, or dataset, ours or anyone’s.
                  Every model performs classification only. This is
                  unconditional.
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    No sale or rental.
                  </span>{" "}
                  Not to advertisers, data brokers, or anyone.
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    No advertising and no commercial use
                  </span>{" "}
                  of student data.
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    No secondary use.
                  </span>{" "}
                  We process for one authorized purpose — surfacing safety
                  indicators for human review — and no other.
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    No excess collection.
                  </span>{" "}
                  We do not condition participation on more information than is
                  reasonably necessary.
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    No offshore processing.
                  </span>{" "}
                  All processing and storage is in United States regions.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                5. Pseudonymity and who can see content
              </h2>
              <div className="space-y-4">
                <p>
                  Student data is handled by device and serial identifiers and
                  cannot be attributed to a specific student without information
                  the school controls. Re-identification is possible by design —
                  the Service exists to alert staff about a specific child at
                  risk — but only authorized school personnel (typically a
                  principal or vice principal) can perform it, and every
                  re-identification is logged. We do not represent this data as
                  anonymous.
                </p>
                <p>
                  Monarch personnel do not access identifiable content. This is
                  enforced by role-based access controls, and every access is
                  logged.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                6. FERPA, COPPA, and consent
              </h2>
              <div className="space-y-4">
                <p>
                  The Service processes personal information of children under
                  13. Consistent with FTC guidance permitting a school to
                  authorize collection of students’ personal information for a
                  school-authorized educational purpose, the school — acting in
                  place of the parent — provides any verifiable parental consent
                  required under COPPA.
                </p>
                <p>
                  We use children’s personal information only for the authorized
                  purpose, never for commercial purposes, and provide access and
                  deletion on authenticated request routed through the school.
                </p>
                <p>
                  <span className="font-semibold text-slate-800">Parents:</span>{" "}
                  to learn whether your child’s school uses Monarch, how it is
                  configured there, or whether opting out is available, contact
                  the school.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                7. Service providers
              </h2>
              <p className="mb-6">
                Each is bound by written contract to protections no less strict
                than our school agreements, including the no-training prohibition
                and deletion obligations. All process data in United States
                regions only.
              </p>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 text-slate-900">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Provider</th>
                      <th className="px-4 py-3 font-semibold">Role</th>
                      <th className="px-4 py-3 font-semibold">Note</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-4 py-3 align-top font-medium text-slate-800">
                        Google Cloud (Vertex AI)
                      </td>
                      <td className="px-4 py-3 align-top">
                        Hosting and Gemini classification
                      </td>
                      <td className="px-4 py-3 align-top">
                        Paid enterprise tier; provider contractually commits not
                        to train on submitted inputs. Classification only.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 align-top font-medium text-slate-800">
                        Google Gemini (via Vertex AI)
                      </td>
                      <td className="px-4 py-3 align-top">
                        Secondary classification
                      </td>
                      <td className="px-4 py-3 align-top">
                        Same enterprise terms and no-training commitment.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 align-top font-medium text-slate-800">
                        RunPod
                      </td>
                      <td className="px-4 py-3 align-top">
                        GPU compute for our self-hosted safety model
                      </td>
                      <td className="px-4 py-3 align-top">
                        Bound by contractual flow-down obligations.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 align-top font-medium text-slate-800">
                        Meta Llama Guard (self-hosted by Monarch)
                      </td>
                      <td className="px-4 py-3 align-top">
                        Safety classification
                      </td>
                      <td className="px-4 py-3 align-top">
                        Monarch-operated instance. Not trained or fine-tuned on
                        student data.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-6">
                We give schools 30 days’ notice before adding or replacing any
                provider that processes student data. No AI or inference provider
                may use student data to train or improve its models.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                8. Security
              </h2>
              <p>
                Encryption in transit and at rest · role-based access control
                with least privilege · multi-factor authentication ·
                tamper-proof audit logging · personnel confidentiality
                obligations and training · encrypted backups with restore testing
                · documented incident response · code-review gates and
                dependency-vulnerability monitoring.
              </p>
              <p className="mt-4">
                We will not materially reduce security during a school’s term.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                9. Retention, deletion, and incidents
              </h2>
              <ul className="list-disc pl-5 space-y-3 mb-4">
                <li>
                  <span className="font-semibold text-slate-800">
                    Raw captured content:
                  </span>{" "}
                  deleted after 30 days.
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    Alerts and risk assessments:
                  </span>{" "}
                  retained for the term of the school’s agreement, exportable at
                  any time.
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    On termination:
                  </span>{" "}
                  full export in a machine-readable format, then certified
                  deletion of all captured content, flagged content, and risk
                  assessments within 30 days.
                </li>
                <li>
                  Individual deletion on the school’s request, as state law
                  requires.
                </li>
                <li>
                  <span className="font-semibold text-slate-800">
                    Exception:
                  </span>{" "}
                  the access log is preserved, so the school retains proof the
                  Service was used properly. It contains no captured content.
                </li>
              </ul>
              <p>
                <span className="font-semibold text-slate-800">
                  Security incidents.
                </span>{" "}
                We notify the school’s designated contact within 72 hours of
                confirming a breach affecting student data, describing the
                incident, scope, likely consequences, and measures taken. We do
                not notify parents or regulators on the school’s behalf except at
                its written direction or as required by law — if your child’s
                data were affected, you would hear from the school.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                10. Parent and student rights
              </h2>
              <div className="space-y-4">
                <p>
                  Parents and eligible students may inspect, review, correct, and
                  in some cases delete student data. Because the school holds the
                  records and can verify identity, requests go to the school. We
                  assist the school in responding, refer any direct request to
                  it, and do not alter or delete data except on the school’s
                  written instruction or as law requires.
                </p>
                <p>
                  <span className="font-semibold text-slate-800">
                    Ownership.
                  </span>{" "}
                  The school owns raw student data, alerts, flagged content, and
                  identifiable risk assessments. Monarch owns its models and
                  software, developed without training on any school’s student
                  data.
                </p>
                <p>
                  If you’re unsure who to contact at your school, write to us and
                  we’ll point you to the right office.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                11. School staff and administrative information
              </h2>
              <div className="space-y-4">
                <p>
                  <span className="font-semibold text-slate-800">
                    Administrator accounts:
                  </span>{" "}
                  name, work email, role, and authentication identifiers — used
                  to operate and secure the account and to contact administrators
                  about the Service. Not used for marketing without consent.
                </p>
                <p>
                  <span className="font-semibold text-slate-800">
                    Support communications:
                  </span>{" "}
                  correspondence and anything you include in it.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                12. Browser extension disclosures
              </h2>
              <div className="space-y-4 mb-6">
                <p>
                  Installed by school administrators via Chrome Admin Console
                  policy on school-managed ChromeOS devices. Not offered for
                  personal installation.
                </p>
                <p>
                  <span className="font-semibold text-slate-800">
                    Single purpose:
                  </span>{" "}
                  the extension enforces the school’s student-safety policy on
                  school-managed devices — surfacing early indicators of risk in
                  what a student writes for staff review, and, where the school
                  enables it, applying the restricted-site rules the school sets.
                </p>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200 mb-6">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 text-slate-900">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Permission</th>
                      <th className="px-4 py-3 font-semibold">
                        Why it is required
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-4 py-3 align-top font-medium text-slate-800">
                        storage
                      </td>
                      <td className="px-4 py-3 align-top">
                        Reads the school’s policy from managed storage; holds
                        the outbound queue and device credential locally so
                        captured content isn’t lost while offline.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 align-top font-medium text-slate-800">
                        alarms
                      </td>
                      <td className="px-4 py-3 align-top">
                        Flushes the outbound queue, renews the device credential,
                        and re-evaluates the school-hours window. MV3 service
                        workers terminate between events, so an alarm is the only
                        way to run periodic work.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 align-top font-medium text-slate-800">
                        identity, identity.email
                      </td>
                      <td className="px-4 py-3 align-top">
                        Reads the signed-in school account address once, at
                        enrollment only, to match the device to the school’s
                        roster. Admin Console policy applies per organisational
                        unit and is identical across devices in it, so no
                        per-student identifier can be distributed by policy.
                        Address never stored — only a keyed one-way hash. Never
                        used for email or marketing.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 align-top font-medium text-slate-800">
                        enterprise.deviceAttributes
                      </td>
                      <td className="px-4 py-3 align-top">
                        Reads the enterprise directory device ID so a re-imaged
                        or reassigned Chromebook keeps a stable identity in the
                        school’s inventory. Chrome grants this only to
                        policy-installed extensions on managed ChromeOS, the sole
                        deployment context.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 align-top font-medium text-slate-800">
                        declarativeNetRequest
                      </td>
                      <td className="px-4 py-3 align-top">
                        Enforces the school’s restricted-site list and
                        school-hours window where the school has enabled it.
                        Rules come from the school’s authenticated administrator
                        and are applied by the browser. The extension never
                        inspects network traffic and holds no host permission to
                        read blocked sites. declarativeNetRequestFeedback is
                        deliberately not requested.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 align-top font-medium text-slate-800">
                        Content script matches
                      </td>
                      <td className="px-4 py-3 align-top">
                        Runs only on manifest-named sites: Google Docs, Google
                        Slides, Gmail, Google Search, Gemini, ChatGPT,
                        Character.AI. Only what the student types or adds is
                        read; content they did not create is not read, and
                        assistant replies are not read.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="space-y-4">
                <p>
                  <span className="font-semibold text-slate-800">
                    Host scope.
                  </span>{" "}
                  These sites appear in content_scripts.matches only, not in
                  host_permissions — the service worker holds no fetch or cookie
                  access to them. There is no &lt;all_urls&gt; or wildcard access
                  anywhere in the manifest, and no runtime mechanism to widen the
                  list.
                </p>
                <p>
                  <span className="font-semibold text-slate-800">
                    Limited Use.
                  </span>{" "}
                  Collection is limited to what is strictly necessary for the
                  single purpose above. We do not sell user data or transfer it
                  for advertising, creditworthiness, or lending. We do not use or
                  transfer it for any unrelated purpose. We do not use or transfer
                  it to train generalized AI models. Human access to identifiable
                  content is limited to authorized school staff. Data is
                  encrypted in transit and at rest.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                13. State laws and changes
              </h2>
              <div className="space-y-4">
                <p>
                  Our data processing agreement aligns with the National Data
                  Privacy Agreement published by the Student Data Privacy
                  Consortium, and we execute state-specific addenda schools
                  require, which prevail over inconsistent standard terms.
                </p>
                <p>
                  If we materially change how we handle student data, we update
                  this policy, revise the effective date, and notify schools as
                  our agreements require. Adding a service provider requires 30
                  days’ advance notice.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                14. Contact
              </h2>
              <div className="space-y-4">
                <p>
                  Monarch AI Technologies Inc.
                  <br />
                  1178 Broadway, 3rd Floor #1501
                  <br />
                  New York City, NY 10001
                </p>
                <p>
                  Privacy &amp; Support email:{" "}
                  <a
                    href="mailto:support@monarchai.io"
                    className="text-[#0094C5] hover:underline font-medium"
                  >
                    support@monarchai.io
                  </a>
                </p>
                <p>
                  Parents: for records about your own child, contact your school
                  first; they hold the records.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
            <div className="md:col-span-2">
              <Link
                href="/"
                className="inline-block mb-6 bg-white rounded-lg px-4 py-2.5 shadow-sm"
              >
                <Image
                  src="/monarch_logo.png"
                  alt="Monarch AI"
                  width={120}
                  height={28}
                  className="h-7 w-auto object-contain"
                />
              </Link>
              <p className="max-w-sm mb-6 leading-relaxed">
                Building a proactive, multimodal behavioral risk detection
                platform for K-12 schools to intervene before harm occurs.
              </p>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <ShieldCheck className="w-4 h-4" />
                <span>
                  Committed to ethical AI, compliant with state and federal
                  regulations
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Platform</h4>
              <ul className="space-y-4">
                {[
                  { label: "Capabilities", href: "/#capabilities" },
                  { label: "How it Works", href: "/#platform" },
                  { label: "Trust & Ethics", href: "/#trust-ethics" },
                  { label: "About", href: "/#about" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-6">Company</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:support@monarchai.io"
                    className="hover:text-white transition-colors"
                  >
                    Contact Support
                  </a>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p>© {new Date().getFullYear()} Monarch AI. All rights reserved.</p>
            <p>
              <Link
                href="/privacy-policy"
                className="text-white hover:underline"
              >
                Privacy Policy
              </Link>
              <span className="mx-3 text-slate-600">·</span>
              Contact us:{" "}
              <a
                href="mailto:support@monarchai.io"
                className="text-white hover:underline"
              >
                support@monarchai.io
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
