import { Ref, SVGProps, forwardRef, memo } from "react";

const SvgSprite = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg ref={ref} {...props} />
);
const ForwardRef = forwardRef(SvgSprite);
const Memo = memo(ForwardRef);

export default Memo;
