<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* core/modules/system/templates/admin-block-content.html.twig */
class __TwigTemplate_4bb6eae887d3af56783f129c94e6da8cd59b5fab541eea20b616a6ea22a43866 extends \Twig\Template
{
    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $tags = ["set" => 20, "if" => 25, "for" => 27];
        $filters = ["escape" => 26];
        $functions = [];

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'for'],
                ['escape'],
                []
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->getSourceContext());

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        // line 20
        $context["classes"] = [0 => "list-group", 1 => ((        // line 22
($context["compact"] ?? null)) ? ("compact") : (""))];
        // line 25
        if (($context["content"] ?? null)) {
            // line 26
            echo "  <dl";
            echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute(($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method")), "html", null, true);
            echo ">
    ";
            // line 27
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(($context["content"] ?? null));
            foreach ($context['_seq'] as $context["_key"] => $context["item"]) {
                // line 28
                echo "      <dt class=\"list-group__link\">";
                echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "link", [])), "html", null, true);
                echo "</dt>
      ";
                // line 29
                if ($this->getAttribute($context["item"], "description", [])) {
                    // line 30
                    echo "        <dd class=\"list-group__description\">";
                    echo $this->env->getExtension('Drupal\Core\Template\TwigExtension')->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed($this->getAttribute($context["item"], "description", [])), "html", null, true);
                    echo "</dd>
      ";
                }
                // line 32
                echo "    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['item'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 33
            echo "  </dl>
";
        }
    }

    public function getTemplateName()
    {
        return "core/modules/system/templates/admin-block-content.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  88 => 33,  82 => 32,  76 => 30,  74 => 29,  69 => 28,  65 => 27,  60 => 26,  58 => 25,  56 => 22,  55 => 20,);
    }

    /** @deprecated since 1.27 (to be removed in 2.0). Use getSourceContext() instead */
    public function getSource()
    {
        @trigger_error('The '.__METHOD__.' method is deprecated since version 1.27 and will be removed in 2.0. Use getSourceContext() instead.', E_USER_DEPRECATED);

        return $this->getSourceContext()->getCode();
    }

    public function getSourceContext()
    {
        return new Source("{#
/**
 * @file
 * Default theme implementation for the content of an administrative block.
 *
 * Available variables:
 * - content: A list containing information about the block. Each element
 *   of the array represents an administrative menu item, and must at least
 *   contain the keys 'title', 'link_path', and 'localized_options', which are
 *   passed to l(). A 'description' key may also be provided.
 * - attributes: HTML attributes to be added to the element.
 * - compact: Boolean indicating whether compact mode is turned on or not.
 *
 * @see template_preprocess_admin_block_content()
 *
 * @ingroup themeable
 */
#}
{%
  set classes = [
    'list-group',
    compact ? 'compact',
  ]
%}
{% if content %}
  <dl{{ attributes.addClass(classes) }}>
    {% for item in content %}
      <dt class=\"list-group__link\">{{ item.link }}</dt>
      {% if item.description %}
        <dd class=\"list-group__description\">{{ item.description }}</dd>
      {% endif %}
    {% endfor %}
  </dl>
{% endif %}
", "core/modules/system/templates/admin-block-content.html.twig", "C:\\xampp\\htdocs\\DrupalWebsite\\core\\modules\\system\\templates\\admin-block-content.html.twig");
    }
}
